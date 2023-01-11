import React, { useId } from 'react'
import InputWrapper from './InputWrapper'

const Date = ({label,value,setDate}:{label:string,value:string,setDate:(value:string) => void}) => {
    const id = useId()
  return (
   <InputWrapper>
   <label htmlFor={id} className='text-label-gray text-[10px]'>{label}</label>
    <input id={id} name={id} value={value} onChange={e => setDate(e.target.value)} className='w-full rounded-md text-white bg-transparent' type="date" />
   </InputWrapper>
  )
}

export default Date