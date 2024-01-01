import { CreatePostType, PostType } from '@/types';

import getAuth from '@/utils/getAuth';
import init from './api';

const api = init('posts').addHeaders({ Authorization: getAuth() });

const posts = {
	getAll: () => api.get<PostType[]>(''),
	getById: (id: string) => api.get<PostType & { replies: PostType }>(`/${id}`),
	getAllInteracted: () => api.get<PostType[]>('/interactions'),
	create: (body: CreatePostType) => api.post<PostType>('/create', { body }),
	createReply: (body: CreatePostType, postId: string) => api.post<PostType>(`/create/${postId}`, { body }),
	like: (postId: string) => api.post<PostType>(`/like/${postId}`),
	repost: (postId: string) => api.post<PostType>(`/repost/${postId}`),
	dislike: (postId: string) => api.delete(`/like/${postId}`),
	disrepost: (postId: string) => api.delete(`/repost/${postId}`),
};

export default posts;
