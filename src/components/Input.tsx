import React, { useId } from 'react'
import InputWrapper from './InputWrapper'

const Input = ({label}:{label:string}) => {
    const id = useId()

  return (
    <InputWrapper>
        <label htmlFor={id} className='text-label-gray text-[10px]'>{label}</label>
        <input id={id} name={id} className='w-full rounded-md text-white bg-transparent' type="text" />
    </InputWrapper>
  )
}

export default Input