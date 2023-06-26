import { useState } from 'react'
import Navbar from './component/Navbar';
import Header  from './component/Header';
import Services from './component/Services';
import SectionOne from './component/SectionOne';
import './App.css'
                                                                                             
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Services/>
    <SectionOne/>
    </>
  )
}

export default App
