'use client'

import TextArea from './components/TextArea'
import InputField from './components/InputField'
import { InputProps } from './input.types'

export default function Input({ multiline, ...rest }: InputProps) {
  const Element = multiline ? TextArea : InputField
  return <Element {...rest} />
}
