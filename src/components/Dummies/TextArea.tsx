import { LegacyRef, forwardRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  variant: "transparent" | "outline" | "filled";
  resize?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const resize = props.resize ? "resize" : "resize-none";
    const vFilled = "bg-bgtertiary rounded-full";
    const vOutline = "py-2 bg-transparent border border-secondary rounded-full";
    const vTransparent = "bg-transparent";
    const variants = {
      transparent: vTransparent,
      outline: vOutline,
      filled: vFilled,
    };
    return (
      <textarea
        {...props}
        ref={ref}
        className={`px-6 font-light caret-white outline-none ${
          variants[props.variant]
        }
       ${
         props.className
       } ${resize} placeholder:italic placeholder:text-gray-200 `}
      />
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
