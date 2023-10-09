import { post } from "./api/config";

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const login = async ({ email, password }: LoginProps) => {
  try {
    const body = {
      email,
      password,
    }

    const response = await post("/users/login", body);
    return response
  } catch (error: any) {
    return error.response.data;
  }
}

const register = async ({ username, name, email, password, confirmPassword }: RegisterProps) => {
  try {
    const body = {
      username,
      name,
      email,
      password,
      confirm_password: confirmPassword,
    }

    const response = await post("/users", body);
    return response
  } catch (error: any) {
    return error.response.data;
  }
}

export { login, register };