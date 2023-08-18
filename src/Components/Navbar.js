import React, { useState , useEffect} from 'react'
import { ethers } from 'ethers';
import "../App.css"



export default function Navbar() {

  

    
  return (

    <div>
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">

       

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#/">Home</a>
                        
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#/Admin">Admin</a>
                    </li>
                  

                </ul>

                        
                </div>
            </div>
        </nav>  
    </div>
  )
}