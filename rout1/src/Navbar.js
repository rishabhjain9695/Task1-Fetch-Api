import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const NavlinkCSS=({isActive})=>{
        return{
            fontWeight:isActive?'bold':'normal',
            fontSize:isActive?'23px':'20px'

        }

    }
  return (
    <ul class="nav nav-pills">
    <li class="nav-item">
      <NavLink class="nav-link active" style={NavlinkCSS}to="/">Home</NavLink>
    </li>
    <li class="nav-item">
      <NavLink class="nav-link active" style={NavlinkCSS}to="/">Products</NavLink>
    </li>
    <li class="nav-item">
      <NavLink class="nav-link" style={NavlinkCSS}to="/a">About</NavLink>
    </li>
    <li class="nav-item">
      <NavLink class="nav-link  active" style={NavlinkCSS} to="/c">Contact</NavLink>
    </li>
  </ul>
  )
}

