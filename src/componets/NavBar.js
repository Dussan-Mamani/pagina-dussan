import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
        <nav>
        <Link to={"/"}><h2 className='du'>Perfil Dussan</h2></Link>
         <ul className='nav-list'>
         <Link to={"descargar"}><li className='des'><h3>DESCARGAR</h3></li></Link>
         </ul>
        </nav>
  )
}
