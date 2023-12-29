import { CreatePostType, PostType } from '@/types';

import api from './api';
import getAuth from '@/utils/getAuth';

const instance = api('posts').addHeaders({ Authorization: getAuth() });

const posts = {
	getAll: () => instance.get<PostType[]>('/'),
	getById: (id: string) => instance.get<PostType>(`/${id}`),
	getAllInteracted: () => instance.get<PostType[]>('/interactions'),
	create: (body: CreatePostType) => instance.post<PostType>('/create', { body }),
	createReply: (body: CreatePostType, postId: string) => instance.post<PostType>(`/create/${postId}`, { body }),
	like: (postId: string) => instance.post<PostType>(`/like/${postId}`),
	repost: (postId: string) => instance.post<PostType>(`/repost/${postId}`),
	dislike: (postId: string) => instance.delete(`/like/${postId}`),
	disrepost: (postId: string) => instance.delete(`/repost/${postId}`),
};

export default posts;
