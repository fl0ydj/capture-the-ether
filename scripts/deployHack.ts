import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import CoActTokenABI from "../artifacts/contracts/fuzzyIdentity.sol/FuzzyIdentityChallenge.json";
import {
  FuzzyIdentityChallenge,
  hackSol,
  Hack__factory,
} from "../artifacts/contracts/types";
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const deploy = async () => {
  const Hack = await ethers.getContractFactory("Hack");
  const hack = await Hack.deploy();
  console.log("Contract deployed to:", hack.address);
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CoActTokenABI.abi
  ) as FuzzyIdentityChallenge;
  await hack.setIdentityContract(CONTRACT_ADDRESS);
  await hack.auth();
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
