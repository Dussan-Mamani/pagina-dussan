import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
        <nav>
        <Link to={"/"}><h2 className='du'>DUSSAN</h2></Link>
         <ul className='nav-list'>
         <li className='des'>
         <Link to={"/descargar"}><h2>SIGUIENTE PAGINA</h2></Link>
         </li>
         </ul>
        </nav>
  )
}
