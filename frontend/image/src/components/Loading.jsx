import React from 'react'
import { FadeLoader } from 'react-spinners'
const Loading = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <FadeLoader color="#12b7b1" />
    </div>
  )
}

export default Loading
