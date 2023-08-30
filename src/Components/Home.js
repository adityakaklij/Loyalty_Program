import React, { useState } from 'react'
import '../CSS/Btn.css'
import {} from'../interface/request';
import MnemonicModal from './Modal';
import { Link } from 'react-scroll';
import { VoyageProvider, Wallet, getLogicDriver } from "js-moi-sdk";
// User Page


function Home() {
  

  const [userAddress, setUserAddress] = useState() 
  const [userAddressForPoints, setUserAddressForPoints] = useState() 
  const [userRedeemPoints, setUserRedeemPoints] = useState()
  const [userRedeemAddress, setUserRedeemAddress] = useState()

  const [pomsg,setpomsg]=useState("")
  const[regmsg,setregmsg]=useState("")
  const[redmsg,setredmsg]=useState("")


  const[tranhash,settranhash]=useState()

  const[isregloading,setregloading]=useState(false)
  const[ispoloading,setpoloading]=useState(false)
  const[isredloading,setredloading]=useState(false)

  

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

  const registerUser = async (address) => {
    let signer = await initializeWallet(provider);
    const logicID =
      "0x08000052b43bca875d72ed5c64d6bd5a9d6ec69ad54ac08453e3529b20b7a368476551";
    const driver = await getLogicDriver(logicID, signer);
  
    const response = await driver.routines.RegisterUser([address]).send({
      sender: signer.getAddress(),
      fuelPrice: 1,
      fuelLimit: 1000,
    });
  
    try {
      const receipt = await response.wait();
      const hash= await receipt.ix_hash
      console.log("ix_receipt: ", hash);
     
      // const result = await response.result();
      // console.log("ix_result: ", result.output.point);
      return hash;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getPoint = async (address) => {
    let signer = await initializeWallet(provider);
    const logicID =
      "0x08000052b43bca875d72ed5c64d6bd5a9d6ec69ad54ac08453e3529b20b7a368476551";
    const driver = await getLogicDriver(logicID, signer);
  
    const response = await driver.routines.UserPoints([address]).send({
      sender: signer.getAddress(),
      fuelPrice: 1,
      fuelLimit: 1000,
    });
  
    try {
      const receipt = await response.wait();
      console.log("ix_receipt: ", receipt);
  
      const result = await response.result();
      console.log("ix_result: ", result.output.point);
      return [result.output.point,receipt.ix_hash];
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const claim = async (address, point) => {
    let signer = await initializeWallet(provider);
    const logicID =
      "0x08000052b43bca875d72ed5c64d6bd5a9d6ec69ad54ac08453e3529b20b7a368476551";
    const driver = await getLogicDriver(logicID, signer);
  
    const response = await driver.routines.claimPoints([address,point]).send({
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
  
  const registerUserFun = async() => {
    // Code goes here
    setregloading(true)
    const result=await registerUser(userAddress);
    setregmsg(`User registered successfully!! `)
    console.log("res:",result)
    settranhash(result)
    setregloading(false)
    
    console.log(userAddress)
    
  }
  
  const getUserPointsFun = async() => {
    // Code goes here
    setpoloading(true)
    const point =await getPoint(userAddressForPoints);
    setpomsg(`Points: ${point[0]}`)
    console.log("p",point)
    settranhash(point[1])
    setpoloading(false)
    console.log(userAddressForPoints)
    
  }
  const redeemPointsFun = async() => {
    // Code goes here
    setredloading(true)
    const result= await claim(userRedeemAddress,userRedeemPoints)
console.log(result)
setredmsg(`${userRedeemPoints} points redeemed`)
settranhash(result)
setredloading(false)
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

  const ViewTrans=()=>
{
  window.open(`https://voyage.moi.technology/interaction/?${tranhash}`)
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
          <input type="text" onChange={getUserAddress} placeholder='Enter Wallet Address' />
          <button onClick={registerUserFun}>{isregloading?<div class="spinner-border text-light" role="status">
  <span class="sr-only"></span>
</div> : "Register"}</button>
          
      </div>
      <div>{regmsg}</div>
      {regmsg!= "" && (
        <div>
         
          <button onClick={ViewTrans}>View Transaction</button>
        
        </div>
      )}
      <hr />

      {/* Get user's points. Input filed might be optional.  */}
      <div className='function-title'>View your points balance 👀</div>
      <div>
          <input type="text" onChange={getUserAddressForPoints} placeholder='Enter Wallet Address' />
          <button onClick={getUserPointsFun}>{ispoloading?<div class="spinner-border text-light" role="status">
  <span class="sr-only"></span>
</div> : "Get Points"}</button>
      </div>
      <div>{pomsg}</div>
      {pomsg!= "" && (
        <div>
         
          <button onClick={ViewTrans}>View Transaction</button>
        
        </div>
      )}
      
      <hr />

      {/* Redeem Points*/}
      <div className='function-title'>Redeem your points 😍</div>
      <div>
          <input type="text" onChange={getUserRedeenAddress} placeholder='Enter Wallet Address' />
          <input type="number" onChange={getUserRedeemPoints} placeholder='Enter Points' />
          <button onClick={redeemPointsFun}>{isredloading?<div class="spinner-border text-light" role="status">
  <span class="sr-only"></span>
</div> : "Redeem Points"}</button>
      </div>
      <div>{redmsg}</div>
      {redmsg!= "" && (
        <div>
         
          <button onClick={ViewTrans}>View Transaction</button>
        
        </div>
      )}
      <hr />
      </div>
      
      </section>

    </div>
  )
}

export default Home