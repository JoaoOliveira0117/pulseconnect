"use client";

import TextArea from "./TextArea";
import InputField from "./InputField";

export default function Input(props: InputProps) {
  const Element = props.multiline ? TextArea : InputField;
  return <Element {...props} />;
}
