require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "mumbai": {
       url: "https://polygon-mumbai.g.alchemy.com/v2/ZodJfVyRlh54vtWlTEGqhxqSKVminrxH",
       accounts: ["19652ea92a5d0070f48ff4ce083fb5e327f685cf5488f2d26f33d59072da93fb"]
    }
  }

};
