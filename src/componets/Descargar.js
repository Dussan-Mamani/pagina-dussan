import React from 'react'
import Xampp from "./img/Xampp.png"
import WordPress from "./img/Wordpress.png"
import Git from "./img/Git.png"
import GitHub from "./img/GitHub.png"
import Alignment from "./img/Bottom Alignment.svg"

export const Descargar = () => {
  return (
    <div>
        <div>
          <div className='h'><img className='g' src={Xampp}/></div>
          <div className='h'><a href='https://sourceforge.net/projects/xampp/?fbclid=IwAR1ohSK5LVKFHUr4xi2xOyvfD-nFyIUdsnhI5fAZ7oHP3okQQv-la3kv9YA'><button> Descargar Xampp <img className='f' src={Alignment} /></button></a></div>
          <div className='h'><img className='g' src={WordPress}/></div>
          <div className='h'><a href='https://es.wordpress.org/download/#utm_medium=referral&utm_source=facebook.com&utm_content=social'><button> Descargar WordPress <img className='f' src={Alignment} /></button></a></div>
          <div className='h'><img className='g' src={Git}/></div>
          <div className='h'><a href='https://git-scm.com/download/win?fbclid=IwAR1ohSK5LVKFHUr4xi2xOyvfD-nFyIUdsnhI5fAZ7oHP3okQQv-la3kv9YA'><button> Descargar Git <img className='f' src={Alignment} /></button></a></div>
          <div className='h'><img className='g' src={GitHub}/></div>
          <div className='h'><a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Fsignup%3Ffbclid%3DIwAR24QNLFBjyuWMvLmDb3I-JAHBOwi2jgkYKyTVvxEhQsG7WA1X_6eWfGdmE&h=AT0qtosZcT7KkEC0526QjOo_8RfudIX7sXlinCo42nld2cMjJ7sp2ajyUWCXEpYXVa2VtPkXXghkj7wRzf2cDbEKbNUsTeoKSa6C1aRVMhziqdtRtLROuO7Dxxu8kiKihcQo0szR8F6nGU8w39rVCA'><button> Crear Cuenta en GitHub <img className='f' src={Alignment} /></button></a></div>
        </div>
    </div>
  )
}
