import AuthOptions from "../AuthOptions";
import Button from "../Dummies/Button";
import Input from "../Input";

interface RegisterProps {
  changeLogin: () => void;
}

export default function RegisterForm({ changeLogin }: RegisterProps) {
  return (
    <>
      <Input variant="outline" name="username" label="Username" />
      <Input variant="outline" name="email" label="Email" />
      <Input
        variant="outline"
        name="password"
        label="Password"
        type="password"
      />
      <Input
        variant="outline"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
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
      <Button variant="filled" className="text-sm py-3 px-8 my-2">
        Register
      </Button>
    </>
  );
}
