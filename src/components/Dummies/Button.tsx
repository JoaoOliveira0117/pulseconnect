interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: "borderless" | "outline" | "filled";
  active?: boolean;
}

export default function Button({
  children,
  className,
  variant,
  active,
  ...rest
}: ButtonProps) {
  const vBorderless = "hover:bg-bgsecondary bg-bgprimary text-secondary";
  const vOutline =
    "hover:bg-bgsecondary bg-bgprimary text-secondary border-2 border-bgsecondary";
  const vFilled =
    "hover:bg-secondary hover:text-white bg-bgsecondary text-secondary ";
  const variants = {
    borderless: vBorderless,
    outline: vOutline,
    filled: vFilled,
  };
  return (
    <button
      {...rest}
      className={`${className} outline-none flex-1 rounded-lg text-center cursor-pointer 
      transition ease-out duration-75 ${variants[variant]}
      active:scale-[0.95] active:opacity-75 ${
        active ? "scale-[0.95] opacity-75 bg-bgsecondary" : ""
      }`}
    >
      {children}
    </button>
  );
}
