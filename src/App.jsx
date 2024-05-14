import { useState } from 'react'
import PasswordGenerator from './components/PasswordGenerator'
// import BgChanger from './components/01BgChanger'


function App() {
  // const [color, setColor]=useState("olive")

  // const handleColor = ()=>{
  //   setColor()
  // }


  return (

    //bgChanger code------ to run the code plz comment out ---------
  //   <div className='w-full max-h-screen md:h-screen bg-blue-700 relative' style={{backgroundColor:color}}>
  // <BgChanger setColor={setColor}/>
  //   </div>

  // -------------------------

  <div className='w-full h-screen bg-black fixed'>
    <PasswordGenerator/>
  </div>
  )
}

export default App
