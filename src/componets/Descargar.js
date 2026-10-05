import React from 'react'
import Xampp from "./img/Xampp.png"
import WordPress from "./img/Wordpress.png"
import Git from "./img/Git.png"
import GitHub from "./img/GitHub.png"
import oracle from "./img/oracle.svg"
import PostgresSQL from "./img/PostgresSQL.png"

export const Descargar = () => {
  return (
    <div>
        <div>
          <div className='h'><a href='https://sourceforge.net/projects/xampp/?fbclid=IwAR1ohSK5LVKFHUr4xi2xOyvfD-nFyIUdsnhI5fAZ7oHP3okQQv-la3kv9YA'><img className='g' src={Xampp}/></a></div>
          <div className='h'><a href='https://es.wordpress.org/download/#utm_medium=referral&utm_source=facebook.com&utm_content=social'><img className='g' src={WordPress}/></a></div>
          <div className='h'><a href='https://git-scm.com/download/win?fbclid=IwAR1ohSK5LVKFHUr4xi2xOyvfD-nFyIUdsnhI5fAZ7oHP3okQQv-la3kv9YA'><img className='g' src={Git}/></a></div>
          <div className='h'><a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Fsignup%3Ffbclid%3DIwAR24QNLFBjyuWMvLmDb3I-JAHBOwi2jgkYKyTVvxEhQsG7WA1X_6eWfGdmE&h=AT0qtosZcT7KkEC0526QjOo_8RfudIX7sXlinCo42nld2cMjJ7sp2ajyUWCXEpYXVa2VtPkXXghkj7wRzf2cDbEKbNUsTeoKSa6C1aRVMhziqdtRtLROuO7Dxxu8kiKihcQo0szR8F6nGU8w39rVCA'><img className='g' src={GitHub}/></a></div>
          <div className='h'><a href='https://git-scm.com/download/win?fbclid=IwAR1ohSK5LVKFHUr4xi2xOyvfD-nFyIUdsnhI5fAZ7oHP3okQQv-la3kv9YA'><img className='g' src={oracle}/></a></div>
          <div className='h'><a href='https://www.postgresql.org/download/'><img className='g' src={PostgresSQL}/></a></div>
        </div>
    </div>
  )
}
