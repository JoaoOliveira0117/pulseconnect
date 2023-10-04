import { post } from "./api/config";

interface RegisterProps {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const register = async ({ username, name, email, password, confirmPassword }: RegisterProps) => {
  try {
    const response = await post("/users", { username, name, email, password, confirm_password: confirmPassword });
    console.log(response)
  } catch (error) {
    throw new Error(error);
  }
}

export { register };