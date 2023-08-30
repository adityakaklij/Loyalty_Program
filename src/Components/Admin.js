import React, { useState } from 'react'
import '../CSS/Btn.css'
import {} from "../interface/request"; 
import { VoyageProvider, Wallet, getLogicDriver } from "js-moi-sdk";

function Admin() {
  const [deRegisterAddress, setDeRegisterAddress] = useState()
  const [sendTokenAddress, setsendTokenAddress] = useState()
  const [sendTokenPoints, setsendTokenPoints] = useState()

  const[dregmsg,setdregmsg]=useState("")
  const[pomsg,setpomsg]=useState("")

  const[tranhash,settranhash]=useState()

  const[isdregloading,setdregloading]=useState(false)
  const[ispoloading,setpoloading]=useState(false)

  const provider = new VoyageProvider("babylon");

  const initializeWallet = async () => {
    const derivationPath = "m/44'/6174'/7020'/0/0";
    const wallet = new Wallet(provider);
    await wallet.fromMnemonic(
      "finger must nurse tribe result gasp cart torch inflict laugh olive broken",
      derivationPath
    );
    return wallet;
  };

  const deregisterUser = async (address) => {
    let signer = await initializeWallet(provider);
    const logicID =
      "0x08000052b43bca875d72ed5c64d6bd5a9d6ec69ad54ac08453e3529b20b7a368476551";
    const driver = await getLogicDriver(logicID, signer);
  
    const response = await driver.routines.DeRegisterUser([address]).send({
      sender: signer.getAddress(),
      fuelPrice: 1,
      fuelLimit: 1000,
    });
  
    try {
      const receipt = await response.wait();
      console.log("ix_receipt: ", receipt);
  
      
      return receipt.ix_hash;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const send = async (address,point) => {
    let signer = await initializeWallet(provider);
    const logicID =
      "0x08000052b43bca875d72ed5c64d6bd5a9d6ec69ad54ac08453e3529b20b7a368476551";
    const driver = await getLogicDriver(logicID, signer);
  
    const response = await driver.routines.SendPoints([address,point]).send({
      sender: signer.getAddress(),
      fuelPrice: 1,
      fuelLimit: 1000,
    });
  
    try {
      const receipt = await response.wait();
      console.log("ix_receipt: ", receipt);
  
      
      return receipt.ix_hash;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const deRegisterUser = async() => {
    setdregloading(true)
    const result =await deregisterUser(deRegisterAddress)
    setdregmsg("User address deregistered successfully :/")
    settranhash(result)
    setdregloading(false)
    console.log(result)
    console.log(deRegisterAddress)
  }

  const sendPoints = async() => {
setpoloading(true)
    const result =await send(sendTokenAddress,sendTokenPoints)
    console.log(result)
    settranhash(result)
    setpomsg(`${sendTokenPoints} points transfered successfully`)
    setpoloading(false)
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

  const ViewTrans=()=>
  {
    window.open(`https://voyage.moi.technology/interaction/?${tranhash}`)
  }
  


  return (
    <div className='admin-page'>
        <h1>Admin</h1>
        <br /><br /><br /><br />

        {/* DeRegister User */}
        <div>
            <input type="text" onChange={getDeRegisterAddress} placeholder='Enter Wallet Address' />
            <button onClick={deRegisterUser}>{isdregloading?<div class="spinner-border text-light" role="status">
  <span class="sr-only"></span>
</div> : "Deregister User"}</button>
        </div>
        <div>{dregmsg}</div>
        {dregmsg!= "" && (
        <div>
         
          <button onClick={ViewTrans}>View Transaction</button>
        
        </div>
      )}
        <hr />

        {/* Send Points to Users */}
        <div>
            <input type="text" onChange={getSendAddress} placeholder='Enter Wallet Address' />
            <input type="number" onChange={getSendPoints} placeholder='Enter Points' />
            <button onClick={sendPoints}>{ispoloading?<div class="spinner-border text-light" role="status">
  <span class="sr-only"></span>
</div> : "Send Points"}</button>
            </div>
            <div>{pomsg}</div>
            {pomsg!= "" && (
        <div>
         
          <button onClick={ViewTrans}>View Transaction</button>
        
        </div>
      )}
    </div>
  )
}

export default Admin