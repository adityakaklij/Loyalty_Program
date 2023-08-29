import React, { useState, useEffect } from "react";
import { Spin, Button } from 'antd'
import MnemonicModal from "./Modal";
import { validateMnemonic } from 'js-moi-sdk'

import "../App.css";




export default function Navbar() {

  const [isChecked, setIsChecked] = useState(true);
  const [ready, setReady] = useState(false)
  const [mnemonic, setMnemonic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [click, setClick] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (mnemonic) => {
    
    if(validateMnemonic(mnemonic))
      {
        setMnemonic(mnemonic)
        setIsModalOpen(false);
        setError("d")
        setClick(true)
        console.log(error)
      }
    else{
      setError("Incorrect mnemonic")
      console.log(error)
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false)
    setError("")
  };

  const handleLogout = () => {
    setMnemonic("")
    setError("")
  }
  return (
    <div>

      <nav className="navbar navbar-expand-lg  ">
      <div className="nav-title">MOILITY</div>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/Admin">
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
}
