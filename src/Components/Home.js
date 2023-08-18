import React, { useState } from 'react'
import '../CSS/Btn.css'
// User Page

function Home() {
  
  // Register users (Btn + input fields (Address))
  // Returns user bal (Btn + input fields)
  // Redeem Points (Btn + input fields (Address, Amount))

  const [userAddress, setUserAddress] = useState() 
  const [userAddressForPoints, setUserAddressForPoints] = useState() 
  const [userRedeemPoints, setUserRedeemPoints] = useState()
  const [userRedeemAddress, setUserRedeemAddress] = useState()


  const registerUserFun = async() => {
    // Code goes here
    console.log(userAddress)
    
  }
  
  const getUserPointsFun = async() => {
    // Code goes here
    console.log(userAddressForPoints)
    
  }
  const redeemPointsFun = async() => {
    // Code goes here
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
      {/* Register User  */}
      <div>
          <input type="text" onChange={getUserAddress} placeholder='Enter Address' />
          <button onClick={registerUserFun}>Register</button>
      </div>
      <hr />

      {/* Get user's points. Input filed might be optional.  */}
      <div>
          <input type="text" onChange={getUserAddressForPoints} placeholder='Enter Address' />
          <button onClick={getUserPointsFun}>Get Points</button>
      </div>
      <hr />

      {/* Redeem Points*/}
      <div>
          <input type="text" onChange={getUserRedeenAddress} placeholder='Enter Address' />
          <input type="number" onChange={getUserRedeemPoints} placeholder='Enter Points' />
          <button onClick={redeemPointsFun}>Redeem Points</button>
      </div>
      <hr />


    </>
  )
}

export default Home