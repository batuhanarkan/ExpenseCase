import React, { useId, useState } from 'react'
import InputWrapper from './InputWrapper'

const Input = ({label,value,setValue}:{label:string,value:string,setValue:(value:string) => void}) => {
    const id = useId()
   
  return (
    <InputWrapper>
        <label htmlFor={id} className='text-label-gray text-[10px]'>{label}</label>
        <input id={id} name={id} value={value} onChange={e => setValue(e.target.value)} className='w-full rounded-md text-white bg-transparent' type="text" />
    </InputWrapper>
  )
}

export default Input