"use client";

import TextArea from "./TextArea";
import InputField from "./InputField";

export default function Input({ multiline, ...rest }: InputProps) {
  const Element = multiline ? TextArea : InputField;
  return <Element {...rest} />;
}
