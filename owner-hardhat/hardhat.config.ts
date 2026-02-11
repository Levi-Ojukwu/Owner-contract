require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.27",

  networks: {
    liskSepolia: {
      url: `${process.env.LISK_SEPOLIA_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`], 
    },
    arcTestnet: {
      url: `${process.env.ARC_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  }
};

export default config;