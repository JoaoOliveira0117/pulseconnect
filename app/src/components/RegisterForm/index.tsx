import React, { FormEvent, useState } from 'react'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import useToast from '@/hooks/useToast'
import { register } from '@/services/admin'

import Button from '../Dummies/Button'
import Input from '../Input'
import AuthOptions from '../AuthOptions'
import form from './form'

interface RegisterProps {
  changeLogin: () => void;
}

const DEFAULT_FORM_VALUES = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirm_password: ''
}

export default function RegisterForm({ changeLogin }: RegisterProps) {
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES)

  const toastify = useToast()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const { data, errors } = await register(formValues)

    if (errors?.msg?.length) {
      return toastify(errors.msg[0].map(({msg}: {msg: string}) => msg), 'error')
    }
		
    toastify('Login success', 'success')
    Cookies.set('jwt', data.token, { expires: 1 })
    return router.push('/home')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute left-0 min-w-[300px] flex flex-col items-center gap-8 "
    >
      {form.map((input) => (
        <Input
          key={input.name}
          variant={input.variant}
          name={input.name}
          label={input.label}
          type={input.type}
          onChange={handleChange}
        />
      ))}
      <span className="font-light">
  			or you can
        <Button
          type="button"
          variant="borderless"
          className="font-bold text-secondary cursor-pointer px-2"
          onClick={changeLogin}
        >
  				login
        </Button>
  			instead
      </span>
      <AuthOptions />
      <hr className="w-[75%] border-bgsecondary border-y-1" />
      <Button type="submit" variant="filled" className="text-sm py-3 px-8 my-2" onClick={handleSubmit}>
  			Register
      </Button>
    </form>
  )
}
