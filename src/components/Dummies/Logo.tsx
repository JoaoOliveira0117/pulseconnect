export default function Logo({ className = "" }) {
  return (
    <h1 className={`font-mono text-5xl ${className}`}>
      <span className="font-light">pulse</span>
      <span className="font-medium text-secondary">connect</span>
    </h1>
  );
}
