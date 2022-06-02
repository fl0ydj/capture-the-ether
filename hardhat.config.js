//@ts-nocheck
import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";

require("dotenv").config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config = {
  solidity: "0.4.21",
  typechain: {
    outDir: "artifacts/contracts/types",
    target: "ethers-v5",
  },
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${MUMBAI_PRIVATE_KEY}`],
    },
  },
};

export default config;
