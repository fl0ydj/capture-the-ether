import { ethers } from "ethers";
import CoActTokenABI from "../artifacts/contracts/fuzzyIdentity.sol/FuzzyIdentityChallenge.json";
import { FuzzyIdentityChallenge } from "../artifacts/contracts/types";
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const contract = new ethers.Contract(
  CONTRACT_ADDRESS,
  CoActTokenABI.abi
) as FuzzyIdentityChallenge;

console.log("Connected to: " + contract.address);
