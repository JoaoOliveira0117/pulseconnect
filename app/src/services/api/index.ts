import axios, { AxiosInstance, RawAxiosRequestHeaders } from 'axios';
import { APIResponse } from '@/types';

type RequestMethods = 'get' | 'post' | 'put' | 'delete';

type RequestOptions = {
	body?: unknown;
	query?: { [key: string]: unknown };
	headers?: RawAxiosRequestHeaders;
};

class Service {
	#instance: AxiosInstance;

	constructor(url: string) {
		this.#instance = this.#createInstance(url);
		this.#instance.interceptors.response.use(
			(response) => response.data,
			(error) => Promise.reject(error.response.data),
		);
	}

	#createInstance(url: string) {
		return axios.create({
			baseURL: `http://localhost:3000/${url}`,
			params: {},
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			validateStatus: (status) => status >= 200 && status < 300,
		});
	}

	#mountUrl(url: string, query?: { [key: string]: unknown }) {
		if (query) {
			return Object.keys(query)
				.map((key) => `${key}=${query[key]}`)
				.join('&');
		}

		return url;
	}

	#mountRequestOptions(options?: RequestOptions) {
		if (options) {
			return [
				...(options.body ? [options.body] : []),
				{
					headers: options.headers,
				},
			];
		}

		return [];
	}

	#useRequestInstance<R>(method: RequestMethods, url: string, options?: RequestOptions): Promise<APIResponse<R>> {
		return this.#instance[method](this.#mountUrl(url, options?.query), ...this.#mountRequestOptions(options));
	}

	addHeaders(headers: RawAxiosRequestHeaders) {
		Object.keys(headers).forEach((key) => {
			this.#instance.defaults.headers.common[key] = headers[key];
		});

		return this;
	}

	get<R>(url: string, options?: RequestOptions) {
		return this.#useRequestInstance<R>('get', url, options);
	}

	post<R>(url: string, options?: RequestOptions) {
		return this.#useRequestInstance<R>('post', url, options);
	}

	put<R>(url: string, options?: RequestOptions) {
		return this.#useRequestInstance<R>('put', url, options);
	}

	delete<R>(url: string, options?: RequestOptions) {
		return this.#useRequestInstance<R>('delete', url, options);
	}
}

export default (url: string) => new Service(url);
