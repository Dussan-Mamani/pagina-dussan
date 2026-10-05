import React from 'react'
import David from "./img/David.png"
import Facebook from "./img/Facebook_Logo_2023.png"
import whatsapp from "./img/whatsapp.png"
import GitHub from "./img/GitHub.png"
import Blogger from "./img/Blogger.png"
import Gmail from "./img/Gmail.png"
import java from "./img/java-logo-1.png"
import netBeans from "./img/netbeans-logo-png_seeklogo-482893.png"
import eclipse from "./img/Eclipse-IDE.svg"
import Cisco from "./img/Ciscotracer.png"
import Visual from "./img/Visual-Studio-Code.png"
import Macro from "./img/Macro.png"
import Proteus from "./img/Proteus.png"
import next from "./img/Next.png"
import react1 from "./img/react.png"
import postman from "./img/postman.png"
import Python from "./img/Python.png"
import Boostrap from "./img/Boostrap.png"

export const Perfil = () => {
  return (
<div>
    <div className='a'>
         <div>
        <img src={David} className='b'/>
        </div>
    <div>
        <h1>Dussan Mamani </h1>
        <h2>Redes Sociales</h2>
        <div><a href="https://www.facebook.com/dussan.mamani">< img src={Facebook} className='c'/></a>
        <a href="https://wa.me/59171253410" target="_blank" class="numberCel">
                <i class="fa-brands fa-whatsapp"></i><img src={whatsapp} alt="+591 71253410" className='c'/>
        </a>
        <a href="https://github.com/Dussan-Mamani?fbclid=IwAR345-klj5hV7aPPWT2Nbt9UGLvpWFY4zmfI7XD2IVbjb271tOogRjpor2s"><img src={GitHub} className='c'/></a>
        <a href="http://dussanmamani.blogspot.com/"><img src={Blogger} className='c'/></a>
        <a href="mailto:dussanmamani0@gmail.com" class="Gmail">
                <i class="fa-solid fa-envelope"></i><img src={Gmail} alt="dussanmamani0@gmail.com" className='c'/>
        </a> 
       </div>
    </div>
</div>
        <div className='d'>
                <div class="e" ><h4 class="f">Paginas web</h4><h4>Html, WordPress, React, Next</h4></div>
                <div class="e"><h4 class="f">Ensamblaje</h4><h4>Ensamblaje y configuracion de Pc, Laptop</h4></div>
                <div class="e"><h4 class="f">Hardware</h4><h4>Hardware de Celulares</h4></div>
                <div class="e"><h4 class="f">Software</h4><h4>Software de Celulares</h4></div></div>
    
<div>
    <div className='h'><a href='https://www.java.com/es/download/'><img className='g' src= {java}/></a></div>
    <div className='h'><a href='https://filehippo.com/es/download_netbeans/8.2/'><img className='g' src={netBeans}/></a></div>
    <div className='h'><a href='https://eclipseide.org/'><img className='g' src={eclipse}/></a></div>
    <div className='h'><a href='https://www.telectronika.com/descargas/packet-tracer/'><img className='g' src={Cisco}/></a></div>
    <div className='h'><a href='https://code.visualstudio.com/download'><img className='g' src={Visual}/></a></div>
    <div className='h'><a href='https://macromedia-flash-8.softonic.com/'><img className='g' src={Macro}/></a></div>
    <div className='h'><a href='https://therandomserver.wordpress.com/2016/09/28/proteus-8-5/'><img className='g' src={Proteus}/></a></div>
    <div className='h'><a href='https://sourceforge.net/projects/next-js.mirror/'><img className='g' src={next}/></a></div>
    <div className='h'><a href='https://nodejs.org/en?fbclid=IwAR16j2E2KYzXfxnoIcqnelsmQK-Xs1DnBtIFR2A3u4Vr9SQMkP5y7GQc87Q'><img className='g' src={react1}/></a></div>
    <div className='h'><a href='https://www.postman.com/downloads/'><img className='g' src={postman}/></a></div>
    <div className='h'><a href='https://www.python.org/downloads/?hl=ES'><img className='g' src={Python}/></a></div>
    <div className='h'><a href='https://getbootstrap.com/docs/5.0/getting-started/download/'><img className='g' src={Boostrap}/></a></div>
    
</div>
</div>
);
}

export default Perfil;