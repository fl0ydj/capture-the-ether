import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const deploy = async () => {
  const FuzzyIdentity = await ethers.getContractFactory(
    "FuzzyIdentityChallenge"
  );
  const fuzzyIdentity = await FuzzyIdentity.deploy();
  console.log("Contract deployed to:", fuzzyIdentity.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
