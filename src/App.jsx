import { useState } from 'react'
import BgChanger from './components/01BgChanger'


function App() {
  const [color, setColor]=useState("olive")

  const handleColor = ()=>{
    setColor()
  }


  return (
    <div className='w-full max-h-screen md:h-screen bg-blue-700 relative' style={{backgroundColor:color}}>
  <BgChanger setColor={setColor}/>
    </div>
  )
}

export default App
