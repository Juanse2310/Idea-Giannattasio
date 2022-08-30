import React from "react";
import Logo from "./imagenes/logo.jpg"

const Header = () => {
    return (
           <div className="container">
                <ul className="nav d-flex align-items-center" >
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#"  ><img src={Logo} width="80px" /></a></li>
                    <li className="nav-item"><a className="nav-link linkeando" href="#"   >Home</a></li>
                    <li className="nav-item"><a className="nav-link linkeando" href="#"   >Galeria</a></li>
                    <li className="nav-item"><a className="nav-link linkeando" href="#"   >Insumos</a></li>
                    
                </ul>
            </div>
      
    )
    }

export default Header