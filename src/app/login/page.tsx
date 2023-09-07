import Button from "@/components/Dummies/Button";
import Logo from "@/components/Dummies/Logo";
import Input from "@/components/Input";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

export default function Login() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-between">
      <div
        className="m-auto w-[400px] min-h-[300px] bg-bgprimary rounded-2xl shadow-xl
        flex flex-col items-center py-6 gap-8"
      >
        <Logo className="text-3xl cursor-default select-none" />
        <hr className="w-[75%] border-bgsecondary border-y-1" />
        <Input variant="outline" name="email" label="Email" />
        <Input
          variant="outline"
          name="password"
          label="Password"
          type="password"
        />
        <div className="flex items-center justify-evenly gap-4">
          <Button variant="filled" className="text-xl py-2 px-6">
            <AiFillGithub />
          </Button>
          <Button variant="filled" className="text-xl py-2 px-6">
            <AiFillGoogleCircle />
          </Button>
        </div>
        <hr className="w-[75%] border-bgsecondary border-y-1" />
        <Button variant="filled" className="text-xl py-2 px-6 my-2">
          Login
        </Button>
      </div>
    </div>
  );
}
