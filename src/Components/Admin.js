import React, { useState } from 'react'
import '../CSS/Btn.css'

  // DeRegister users
  // Returns user bal
  // Send points 

function Admin() {
  const [deRegisterAddress, setDeRegisterAddress] = useState()
  const [sendTokenAddress, setsendTokenAddress] = useState()
  const [sendTokenPoints, setsendTokenPoints] = useState()

  const deRegisterUser = async() => {
    console.log(deRegisterAddress)
  }

  const sendPoints = async() => {
    console.log(sendTokenAddress)
    console.log(sendTokenPoints)

  }

  // Helper functions
  const getDeRegisterAddress = (e) => {
    setDeRegisterAddress(e.target.value)
  }
  const getSendAddress = (e) => {
    setsendTokenAddress(e.target.value)
  }
  const getSendPoints = (e) => {
    setsendTokenPoints(e.target.value)
  }
  
  


  return (
    <>
        <h1>Admin</h1>
        <br /><br /><br /><br />

        {/* DeRegister User */}
        <div>
            <input type="text" onChange={getDeRegisterAddress} placeholder='Enter Address' />
            <button onClick={deRegisterUser}>deRegister User</button>
        </div>
        <hr />

        {/* Send Points to Users */}
            <input type="text" onChange={getSendAddress} placeholder='Enter Address' />
            <input type="number" onChange={getSendPoints} placeholder='Enter Points' />
            <button onClick={sendPoints}>Send Points</button>
        
    </>
  )
}

export default Admin