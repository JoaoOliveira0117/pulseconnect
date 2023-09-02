import Navbar from "../Navbar";

export default function Header() {
  return (
    <div className="w-100 cursor-default select-none my-6">
      <h1 className="font-mono text-5xl">
        <span className="font-light">pulse</span>
        <span className="font-medium text-secondary">connect</span>
      </h1>
      <Navbar />
    </div>
  );
}
