import { APIResponse } from '@/types';

type RequestMethods = 'get' | 'post' | 'put' | 'delete';

type RequestObject = { [key: string]: unknown };

type RequestOptions = {
	body?: unknown;
	query?: RequestObject;
	headers?: RequestObject;
	cache?: RequestCache;
};

const config = {
	baseUrl: 'http://localhost:3000',
	headers: {},
};

const _mountOptions = (options: RequestOptions, config?: RequestOptions) => {
	return {
		...options,
		...(options.body ? { body: options.body } : {}),
		...(config?.headers ? { headers: { ...config.headers, ...options.headers } } : {}),
	};
};

const _send = <T>(method: RequestMethods, url: string, options: RequestOptions): Promise<APIResponse<T>> =>
	fetch(url, { method, ...options } as RequestInit).then((response) => response.json());

function init(endpoint: string) {
	const mountRequest = (url: string, options: RequestOptions = {}): [string, RequestOptions] => [
		`${config.baseUrl}/${endpoint}${url}`,
		_mountOptions(options, config),
	];

	return {
		addHeaders: function (headers: RequestObject) {
			config.headers = {
				...headers,
			};

			return this;
		},

		get: <T>(url: string, options?: RequestOptions) => _send<T>('get', ...mountRequest(url, options)),
		post: <T>(url: string, options?: RequestOptions) => _send<T>('post', ...mountRequest(url, options)),
		put: <T>(url: string, options?: RequestOptions) => _send<T>('put', ...mountRequest(url, options)),
		delete: <T>(url: string, options?: RequestOptions) => _send<T>('delete', ...mountRequest(url, options)),
	};
}

export default init;
