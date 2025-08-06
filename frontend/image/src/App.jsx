import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className='w-screen flex items-center justify-center flex-col h-screen bg-zinc-800 text-white px-10'>
      <h1 className='p-2  font-bold text-2xl '>AI Image Enhancer</h1>
      <Home />
    </div>
   </>
       
  )
}

export default App
