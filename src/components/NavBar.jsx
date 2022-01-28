import React from "react";

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light fondoColorNavBar bordeAzul">
                <div className="container-fluid bordeRojo ">
                    <a className="navbar-brand flex-column justify-content-start bordeAzul" href="#">                    
                        <h1 className="estiloBrand">By Dany</h1>
                    </a>

                    <button className="navbar-toggler " 
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center bordeAmarrillo" id="navbarNav">
                        <ul className="navbar-nav align-items-center bordeVerde">
                            <li className="nav-item ">
                                <a className="nav-link estiloMenu mx-2 bordeAzul" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link estiloMenu mx-2 bordeAzul" href="#">Aretes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link estiloMenu mx-2 bordeAzul" href="#">Collares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link estiloMenu mx-2 bordeAzul" href="#">Pulseras</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>       
        </>
    )
}

export default NavBar;