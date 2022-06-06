import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const deploy = async () => {
  const FuzzyIdentity = await ethers.getContractFactory("TokenBankChallenge");
  const fuzzyIdentity = await FuzzyIdentity.deploy(
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
  );
  console.log("Contract deployed to:", fuzzyIdentity.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
