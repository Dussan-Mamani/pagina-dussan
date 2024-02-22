import React from 'react'
import Dussan from "./img/Dussan.png"
import Facebook from "./img/Facebook_Logo_2023.png"
import GitHub from "./img/GitHub.png"
import Blogger from "./img/Blogger.png"
import Alignment from "./img/Bottom Alignment.svg"
import java from "./img/java-logo-1.png"
import react1 from "./img/react1.png"
import netBeans from "./img/NetBeans.png"
import Proteus from "./img/Proteus.png"
import Cisco from "./img/Cisco-Packet-Tracer.png"
import Redes from "./img/redes.png"
import Visual from "./img/Visual-Studio-Code.png"
import next from "./img/NEXT_logo.png"
import eclipse from "./img/logo-eclipse.png"
import postman from "./img/postman.png"
export const Perfil = () => {
  return (
<div>
    <div className='a'>
         <div>
        <img src={Dussan} className='b'/>
        </div>
    <div>
        <h1>Dussan Mamani </h1>
        <h2>Redes Sociales</h2>
        <div><a href="https://www.facebook.com/dussan.mamani">< img src={Facebook} className='c'/></a>
        <a href="https://github.com/Dussan-Mamani?fbclid=IwAR345-klj5hV7aPPWT2Nbt9UGLvpWFY4zmfI7XD2IVbjb271tOogRjpor2s"><img src={GitHub} className='c'/></a>
        <a href="http://dussanmamani.blogspot.com/"><img src={Blogger} className='c'/></a>
        </div>
    </div>
</div>
        <div className='d'>
            <div className='e'><p>Programador en diversos</p>
           <p>lenguajes de programacion</p></div>
            <div className='e'><p>Programador de paginas web,</p>
           <p>Html, WordPress, React, Next</p></div>
            <div className='e'><p>Conocimientos en Redes</p>
             <p>Cableado Estructurado</p></div>
       </div>
    
<div>
    <div className='h'><img className='g' src={java}/></div>
    <div className='h'><a href='https://www.java.com/es/download/'><button> Descargar jdk java <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={netBeans}/></div>
    <div className='h'><a href='https://filehippo.com/es/download_netbeans/8.2/'><button> Descargar NetBeans <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={eclipse}/></div>
    <div className='h'><a href='https://eclipseide.org/'><button> Descargar Eclipse <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={Cisco}/></div>
    <div className='h'><a href='https://www.telectronika.com/descargas/packet-tracer/'><button> Descargar Cisco Packet T. <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={Visual}/></div>
    <div className='h'><a href='https://code.visualstudio.com/download'><button> Descargar Visual Studio C. <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={Redes}/></div>
    <div className='h'><a href='https://www.mheducation.es/bcv/guide/capitulo/8448180828.pdf'><button> Descargar Redes <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={Proteus}/></div>
    <div className='h'><a href='https://therandomserver.wordpress.com/2016/09/28/proteus-8-5/'><button> Descargar Proteus <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={next}/></div>
    <div className='h'><a href='https://sourceforge.net/projects/next-js.mirror/'><button> Descargar Next <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={react1}/></div>
    <div className='h'><a href='https://nodejs.org/en?fbclid=IwAR16j2E2KYzXfxnoIcqnelsmQK-Xs1DnBtIFR2A3u4Vr9SQMkP5y7GQc87Q'><button> Descargar React <img className='f' src={Alignment} /></button></a></div>
    <div className='h'><img className='g' src={postman}/></div>
    <div className='h'><a href='https://www.postman.com/downloads/'><button> Descargar Postman <img className='f' src={Alignment} /></button></a></div>
    
</div>
</div>
);
}

export default Perfil;