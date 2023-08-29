import React, { useState } from 'react'
import '../CSS/Btn.css'
import {getPoint,registerUser,claim} from'../interface/request';
import MnemonicModal from './Modal';
import { Link } from 'react-scroll';
// User Page

function Home() {
  

  const [userAddress, setUserAddress] = useState() 
  const [userAddressForPoints, setUserAddressForPoints] = useState() 
  const [userRedeemPoints, setUserRedeemPoints] = useState()
  const [userRedeemAddress, setUserRedeemAddress] = useState()

  const [pomsg,setpomsg]=useState("")
  const[regmsg,setregmsg]=useState("")
  const[redmsg,setredmsg]=useState("")


  const registerUserFun = async() => {
    // Code goes here
    const result=await registerUser(userAddress);
    setregmsg("User registered successfully!!")
    console.log(result)

    console.log(userAddress)
    
  }
  
  const getUserPointsFun = async() => {
    // Code goes here
    const point =await getPoint(userAddressForPoints);
    setpomsg(`Points: ${point}`)
    console.log("p",point)
    console.log(userAddressForPoints)
    
  }
  const redeemPointsFun = async() => {
    // Code goes here
    const result= await claim(userRedeemAddress,userRedeemPoints)
console.log(result)
setredmsg(`${userRedeemPoints} points redeemed`)
    console.log(userRedeemPoints)
    console.log(userRedeemAddress)

  }

  // Helper functions. No changes.
  const getUserAddress = (e) => {
    setUserAddress(e.target.value);
  }
  const getUserAddressForPoints = (e) => {
    setUserAddressForPoints(e.target.value);
  }
  const getUserRedeemPoints = (e) => {
    setUserRedeemPoints(e.target.value);
  }
  const getUserRedeenAddress = (e) => {
    setUserRedeemAddress(e.target.value);
  }

  return (
    
    <div className='home'>
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <div className='title'>MOILITY</div>
          <h1>Welcome to our Loyalty Program</h1>
          <p>Join us to enjoy exclusive benefits and rewards.</p>
          <Link
            to="section2" // ID of the section you want to scroll to
            smooth={true}
            duration={500} // Duration of the scroll animation in milliseconds
            offset={-70} // Offset from the top of the section (adjust as needed)
          >
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
    <section id="section2">
    <div className='function'>
      <h1 className='function-name'>MOILITY</h1>
      <h5>The Loyalty Program project is a decentralized application (DApp) developed in the COCO language and deployed on the MOI blockchain. The main objective of this project is to provide businesses and individuals with a reliable and secure solution for managing their loyalty points using blockchain technology and smart contracts.</h5>
      <hr />
      <div className='function-title'>Register yourself 👇</div>
      <div>
          <input type="text" onChange={getUserAddress} placeholder='Enter Address' />
          <button onClick={registerUserFun}>Register</button>
          
      </div>
      <div>{regmsg}</div>
      <hr />

      {/* Get user's points. Input filed might be optional.  */}
      <div className='function-title'>View your points balance 👀</div>
      <div>
          <input type="text" onChange={getUserAddressForPoints} placeholder='Enter Address' />
          <button onClick={getUserPointsFun}>Get Points</button>
      </div>
      <div>{pomsg}</div>
      
      <hr />

      {/* Redeem Points*/}
      <div className='function-title'>Redeem your points 😍</div>
      <div>
          <input type="text" onChange={getUserRedeenAddress} placeholder='Enter Address' />
          <input type="number" onChange={getUserRedeemPoints} placeholder='Enter Points' />
          <button onClick={redeemPointsFun}>Redeem Points</button>
      </div>
      <div>{redmsg}</div>
      <hr />
      </div>
      
      </section>

    </div>
  )
}

export default Home