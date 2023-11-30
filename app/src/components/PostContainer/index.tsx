'use client'

import { useEffect } from 'react'
import Post from '../Post'
import { getPostsAction } from '@/store/thunks/posts.thunk'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'

interface PostContainerProps {
  userToken?: string;
} 

export default function PostContainer({ userToken }: PostContainerProps) {
  const posts = useAppSelector((state)=>state.posts?.data || [])
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPostsAction(userToken))
  }, [dispatch, userToken])

  return posts.map((post) => (
    <Post key={post.id} userToken={userToken} post={post} />
  ))
}