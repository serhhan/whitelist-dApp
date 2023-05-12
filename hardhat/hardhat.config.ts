import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv";

const { QUICKNODE_HTTP_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: String(QUICKNODE_HTTP_URL),
      accounts: [String(PRIVATE_KEY)],
    },
  },
};

export default config;
