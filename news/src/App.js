import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

const App = () => {
  const [category,setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <News category={category}/> 
    </>
  )
}

export default App