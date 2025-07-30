import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

   const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
       

        <ul className="navmenu">
            <li><p onClick={()=>setMenu("home")}>Home</p></li>
            <li><p onClick={()=>setMenu("about")}>About Me</p></li>
            <li><p onClick={()=>setMenu("services")}>Services</p></li>
            <li><p onClick={()=>setMenu("work")}>Portfolio</p></li>
            <li><p onClick={()=>setMenu("contact")}>Contact</p></li>
        </ul>
        <div className="nav-connect">
            Connect with Me
        </div>

    </div>
  )
}

export default Navbar