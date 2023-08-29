import { VoyageProvider, Wallet, getLogicDriver } from "js-moi-sdk";

const provider = new VoyageProvider("babylon");

const initializeWallet = async () => {
  const derivationPath = "m/44'/6174'/7020'/0/0";
  const wallet = new Wallet(provider);
  await wallet.fromMnemonic(
    "artefact furnace melody sphere chunk axis judge domain bulb endorse mystery weekend",
    derivationPath
  );
  return wallet;
};

export const getPoint = async (address) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x0800003cb15d420b432f8a3f68f42820520af27fabc4c4d8feed3831532ad3caeacae6";
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
    return result.output.point;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const registerUser = async (address,{sethash}) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x08000080590e9b78de02e36b9b9b8fec2fbd879080ff82cfbfab0ab64802b26833f432";
  const driver = await getLogicDriver(logicID, signer);

  const response = await driver.routines.RegisterUser([address]).send({
    sender: signer.getAddress(),
    fuelPrice: 1,
    fuelLimit: 1000,
  });

  try {
    const receipt = await response.wait();
    console.log("ix_receipt: ", receipt.ix_hash);
   await sethash(receipt.ix_hash)
    const result = await response.result();
    console.log("ix_result: ", result.output.point);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const claim = async (address, point) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x0800003cb15d420b432f8a3f68f42820520af27fabc4c4d8feed3831532ad3caeacae6";
  const driver = await getLogicDriver(logicID, signer);

  const response = await driver.routines.claimPoints([address,point]).send({
    sender: signer.getAddress(),
    fuelPrice: 1,
    fuelLimit: 1000,
  });

  try {
    const receipt = await response.wait();
    console.log("ix_receipt: ", receipt);

    const result = await response.result();
    console.log("ix_result: ", result.output.point);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};


//admin

export const deregisterUser = async (address) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x0800003cb15d420b432f8a3f68f42820520af27fabc4c4d8feed3831532ad3caeacae6";
  const driver = await getLogicDriver(logicID, signer);

  const response = await driver.routines.DeRegisterUser([address]).send({
    sender: signer.getAddress(),
    fuelPrice: 1,
    fuelLimit: 1000,
  });

  try {
    const receipt = await response.wait();
    console.log("ix_receipt: ", receipt);

    const result = await response.result();
    console.log("ix_result: ", result.output.point);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const send = async (address,point) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x0800003cb15d420b432f8a3f68f42820520af27fabc4c4d8feed3831532ad3caeacae6";
  const driver = await getLogicDriver(logicID, signer);

  const response = await driver.routines.SendPoints([address,point]).send({
    sender: signer.getAddress(),
    fuelPrice: 1,
    fuelLimit: 1000,
  });

  try {
    const receipt = await response.wait();
    console.log("ix_receipt: ", receipt);

    const result = await response.result();
    console.log("ix_result: ", result.output.point);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};