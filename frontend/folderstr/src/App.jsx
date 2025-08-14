import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Folder from './Folder'
import { files } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
      <h1>hello</h1>
      <Folder files={files}/>
     </div>
    </>
  )
}

export default App
