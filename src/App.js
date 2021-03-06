import React from 'react'
import Sidebar from './Component/sidebar/Sidebar'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'

export default function App() {
  return (
    <div className="App">
    
        <Sidebar/>  
      <Navbar />
      <Home/>
     </div>
  )
}
