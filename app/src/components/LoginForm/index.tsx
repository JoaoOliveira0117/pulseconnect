import Button from "../Dummies/Button";
import Input from "../Input";
import AuthOptions from "../AuthOptions";
import useToast from "@/hooks/useToast";
import { useState } from "react";
import { login } from "@/services/admin";

interface LoginProps {
  changeRegister: () => void;
}

const DEFAULT_FORM_VALUES = {
  email: "",
  password: "",
}

export default function LoginForm({ changeRegister }: LoginProps) {
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  
  const toastify = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = async () => {
    const { data, errors } = await login(formValues)

    if (errors?.msg.length) {
      return toastify(errors.msg, "error")
    }

    console.log(data)
  }

  return (
    <>
      <Input variant="outline" name="email" label="Email" onChange={handleChange}/>
      <Input
        variant="outline"
        name="password"
        label="Password"
        type="password" 
        onChange={handleChange}
      />
      <span className="font-light">
        or you can
        <Button
          variant="borderless"
          className="font-bold text-secondary cursor-pointer px-2"
          onClick={changeRegister}
        >
          Register
        </Button>
        instead
      </span>
      <AuthOptions />
      <hr className="w-[75%] border-bgsecondary border-y-1" />
      <Button variant="filled" className="text-sm py-3 px-8 my-2" onClick={handleSubmit}>
        Login
      </Button>
    </>
  );
}
