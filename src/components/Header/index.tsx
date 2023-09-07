import Navbar from "../Navbar";
import User from "../User";

export default function Header() {
  return (
    <div className="w-full min-w-[1000px] cursor-default select-none my-6">
      <div className="flex items-center justify-between">
        <h1 className="font-mono text-5xl">
          <span className="font-light">pulse</span>
          <span className="font-medium text-secondary">connect</span>
        </h1>
        <User />
      </div>
      <Navbar />
    </div>
  );
}
