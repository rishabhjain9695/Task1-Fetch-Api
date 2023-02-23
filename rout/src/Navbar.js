import React from 'react'

export default function Navbar() {
    const NavlinkCSS=({isActive})=>{
        return{
            fontWeight:isActive?'bold':'normal',
            fontSize:isActive?'23px':'20px'

        }

    }
  return (
    <div>
          <ul className="nav nav-pills">
    <li class="nav-item">
      <NavLink className="nav-link active" style={NavlinkCSS}to="/">Home</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className="nav-link active" style={NavlinkCSS}to="/">Products</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className="nav-link" style={NavlinkCSS}to="/a">About</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className="nav-link  active" style={NavlinkCSS} to="/c">Contact</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className="nav-link  active" style={NavlinkCSS} to="/u/anil">Anil</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className="nav-link  active" style={NavlinkCSS} to="/u/peter">Peter</NavLink>
    </li>
  </ul>
    </div>
  )
}
