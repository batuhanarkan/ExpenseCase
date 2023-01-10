import React, { useId } from 'react'

const InputWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full bg-input-bg rounded-lg p-1.5'>
        {children}
    </div>
    )
}

export default InputWrapper