'use client';

import { useCallback, useEffect, useState } from 'react';
import Post from '@/components/Post';
import PostComposer from '@/components/PostComposer';
import { PostType } from '@/types';
import { getPosts } from '@/services/posts';
import useToast from '@/hooks/useToast';

export default function Trending() {
	const [posts,setPosts] = useState<PostType[]>([]);

	const toastify = useToast();

	const handleGetPosts = useCallback(async () => {
		const { data, errors } = await getPosts();

		if (errors?.msg.length) {
			return toastify(errors.msg, 'error');
		}

		return setPosts(data.posts);
	}, [toastify] );

	useEffect(()=>{
		handleGetPosts();
	},[handleGetPosts])

	return (
		<div className="min-w-[1000px] flex flex-col gap-8">
			<PostComposer />
			{posts.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</div>
	);
}
