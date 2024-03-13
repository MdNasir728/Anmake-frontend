import React from 'react'

const Input = ({placeholder}) => {
  return (
    <>
      <input className='placeholder:text-md placeholder-slate-400 py-4 px-6 border-2 rounded-2xl border-gray-500 bg-transparent outline-4 outline-[#17C2EC] text-white flex-1 lg:min-w-1/3 w-full' type="text" placeholder={placeholder} />
    </>
  )
}

export default Input
