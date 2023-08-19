import React, { useState } from 'react'
import '../CSS/Btn.css'
import {getPoint,registerUser,claim} from'../interface/request';
import MnemonicModal from './Modal';
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
    
    <>
      <h2>Home</h2>
      <br /><br /><br />
      
      <div>
          <input type="text" onChange={getUserAddress} placeholder='Enter Address' />
          <button onClick={registerUserFun}>Register</button>
          
      </div>
      <div>{regmsg}</div>
      <hr />

      {/* Get user's points. Input filed might be optional.  */}
      <div>
          <input type="text" onChange={getUserAddressForPoints} placeholder='Enter Address' />
          <button onClick={getUserPointsFun}>Get Points</button>
      </div>
      <div>{pomsg}</div>
      
      <hr />

      {/* Redeem Points*/}
      <div>
          <input type="text" onChange={getUserRedeenAddress} placeholder='Enter Address' />
          <input type="number" onChange={getUserRedeemPoints} placeholder='Enter Points' />
          <button onClick={redeemPointsFun}>Redeem Points</button>
      </div>
      <div>{redmsg}</div>
      <hr />


    </>
  )
}

export default Home