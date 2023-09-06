"use client";

import { useRef, useState } from "react";
import TextArea from "../Dummies/TextArea";
import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  variant: "transparent" | "outline" | "filled";
  multiline?: boolean;
}

function TextAreaInput(props: InputProps) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(ref.current, value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <TextArea
      ref={ref}
      onChange={handleChange}
      rows={1}
      {...props}
      maxLength={300}
    />
  );
}

export default function Input(props: InputProps) {
  // TODO implement custom input
  const Element = props.multiline ? TextAreaInput : "input";
  return <Element {...props} />;
}
