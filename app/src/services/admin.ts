import { APIResponse, UserType } from '@/types'
import { post } from './api/config'
import { LoginProps, RegisterProps } from './types/admin.types'

const endpoint = '/users'

type AuthType = {
	user: UserType,
	token: string
}

export const login = async (body: LoginProps): Promise<APIResponse<AuthType>> => {
  try {
    return await post(`${endpoint}/login`, body)
  } catch (error: any) {
    return error
  }
}

export const register = async (body: RegisterProps): Promise<APIResponse<AuthType>> => {
  try {
    return await post(`${endpoint}`, body)
  } catch (error: any) {
    return error
  }
}
