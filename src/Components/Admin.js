import React, { useState } from 'react'
import '../CSS/Btn.css'
import {deregisterUser,send} from "../interface/request"; 

function Admin() {
  const [deRegisterAddress, setDeRegisterAddress] = useState()
  const [sendTokenAddress, setsendTokenAddress] = useState()
  const [sendTokenPoints, setsendTokenPoints] = useState()

  const[dregmsg,setdregmsg]=useState("")
  const[pomsg,setpomsg]=useState("")

  const deRegisterUser = async() => {
    const result =await deregisterUser(deRegisterAddress)
    setdregmsg("User address deregistered successfully :/")
    console.log(result)
    console.log(deRegisterAddress)
  }

  const sendPoints = async() => {

    const result =await send(sendTokenAddress,sendTokenPoints)
    console.log(result)
    setpomsg(`${sendTokenPoints} points transfered successfully`)
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
        <div>{dregmsg}</div>
        <hr />

        {/* Send Points to Users */}
        <div>
            <input type="text" onChange={getSendAddress} placeholder='Enter Address' />
            <input type="number" onChange={getSendPoints} placeholder='Enter Points' />
            <button onClick={sendPoints}>Send Points</button>
            </div>
            <div>{pomsg}</div>
    </>
  )
}

export default Admin