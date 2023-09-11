import Button from "../Dummies/Button";
import Input from "../Input";
import AuthOptions from "../AuthOptions";

interface LoginProps {
  changeRegister: () => void;
}

export default function LoginForm({ changeRegister }: LoginProps) {
  return (
    <>
      <Input variant="outline" name="email" label="Email" />
      <Input
        variant="outline"
        name="password"
        label="Password"
        type="password"
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
      <Button variant="filled" className="text-sm py-3 px-8 my-2">
        Login
      </Button>
    </>
  );
}
