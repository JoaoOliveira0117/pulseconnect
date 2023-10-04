import { useEffect, useState } from "react";
import AuthOptions from "../AuthOptions";
import Button from "../Dummies/Button";
import Input from "../Input";
import { register } from "@/services/admin";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  
  const handleSubmit = () => {
    register(formValues)
  }

  return (
    <>
      <Input variant="outline" name="username" label="Username" onChange={handleChange}/>
      <Input variant="outline" name="name" label="Name" onChange={handleChange}/>
      <Input variant="outline" name="email" label="Email" onChange={handleChange}/>
      <Input
        variant="outline"
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
      />
      <Input
        variant="outline"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        onChange={handleChange}
      />
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
