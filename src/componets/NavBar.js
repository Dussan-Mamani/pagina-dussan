import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
        <nav>
        <Link to={"/"}><h3 className='du'>DUSSAN</h3></Link>
         
         
         <Link to={"/descargar"}><h3 className='du'>PAGINA SIGUIENTE</h3></Link>

       
        </nav>
  )
}
