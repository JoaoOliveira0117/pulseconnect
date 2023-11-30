import { InputProps } from '../Input/input.types'

function Input(props: InputProps) {
  const vFilled = 'px-4 py-2 bg-bgtertiary rounded-2xl rounded-tl-none'
  const vOutline = 'py-2 bg-transparent border-b border-primary focus:border-secondary'
  const vTransparent = 'bg-transparent'
  const variants = {
    transparent: vTransparent,
    outline: vOutline,
    filled: vFilled,
  }
  return (
    <div className="group">
      {props.label && (
        <label
          htmlFor={props.name}
          className="block text-primary group-focus-within:text-secondary text-sm"
        >
          {props.label}
        </label>
      )}
      <input
        {...props}
        className={`font-light caret-white outline-none text-sm ${
          variants[props.variant]
        }
       ${props.className} placeholder:italic placeholder:text-gray-200 `}
      />
    </div>
  )
}

export default Input
