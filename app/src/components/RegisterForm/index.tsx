import { useEffect, useState } from "react";
import AuthOptions from "../AuthOptions";
import Button from "../Dummies/Button";
import Input from "../Input";
import { register } from "@/services/admin";
import form from "./form";
import useToast from "@/hooks/useToast";

interface RegisterProps {
  changeLogin: () => void;
}

const DEFAULT_FORM_VALUES = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export default function RegisterForm({ changeLogin }: RegisterProps) {
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

  const toastify = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  
  const handleSubmit = async () => {
    const { data, errors } = await register(formValues)

    if (errors?.msg.length) {
      return toastify(errors.msg, "error")
    }

  }

  return (
    <>
      {form.map((input) => (
        <Input
          key={input.name}
          variant={input.variant}
          name={input.name}
          label={input.label}
          type={input.type}
          onChange={handleChange} />
      ))}
      <span className="font-light">
        or you can
        <Button
          variant="borderless"
          className="font-bold text-secondary cursor-pointer px-2"
          onClick={changeLogin}
        >
          login
        </Button>
        instead
      </span>
      <AuthOptions />
      <hr className="w-[75%] border-bgsecondary border-y-1" />
      <Button variant="filled" className="text-sm py-3 px-8 my-2" onClick={handleSubmit}>
        Register
      </Button>
    </>
  );
}
