import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <>
    <div>
      <h1>Products Page</h1>
    </div>
    <nav>
    <Link to='shirts'>Shirts</Link>
    <Link to='jeans'>Jeans</Link>
     </nav>
     </>
  )
}
