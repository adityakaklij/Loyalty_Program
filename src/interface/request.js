import { VoyageProvider, Wallet, getLogicDriver } from "js-moi-sdk";

const provider = new VoyageProvider("babylon");

const initializeWallet = async () => {
  const derivationPath = "m/44'/6174'/7020'/0/0";
  const wallet = new Wallet(provider);
  await wallet.fromMnemonic(
    "beauty water bubble charge luggage pony spell mixture crime family rapid return",
    derivationPath
  );
  return wallet;
};

export const getPoint = async (address) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x0800006e36ca3218a2e7204348864dfc9348864a3254d11fbbb01d14e494a4ccf99755";
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

export const registerUser = async (address) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x0800006e36ca3218a2e7204348864dfc9348864a3254d11fbbb01d14e494a4ccf99755";
  const driver = await getLogicDriver(logicID, signer);

  const response = await driver.routines.RegisterUser([address]).send({
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

export const claim = async (address, point) => {
  let signer = await initializeWallet(provider);
  const logicID =
    "0x0800006e36ca3218a2e7204348864dfc9348864a3254d11fbbb01d14e494a4ccf99755";
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
    "0x0800006e36ca3218a2e7204348864dfc9348864a3254d11fbbb01d14e494a4ccf99755";
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
    "0x0800006e36ca3218a2e7204348864dfc9348864a3254d11fbbb01d14e494a4ccf99755";
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