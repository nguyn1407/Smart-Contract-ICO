// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const token = await hre.ethers.deployContract("ICO");
  // await token.waitForDeployment();

  // const vault = await hre.ethers.deployContract("Vault");
  // await vault.waitForDeployment();

  // console.log(`token address ${token.target}`);
  // console.log(`vault address ${vault.target}`)
  

  // const USDT = await hre.ethers.deployContract("USDT");
  // await USDT.waitForDeployment();
  // console.log(`USDT address ${USDT.target}`)

  const CrowdSale = await hre.ethers.deployContract("CrowdSale",[1000,100,"0x652C02bE862A244F3BC25eb98B740738f48935cF", "0x87B515F410B44912Bc7625a017d2A2610475FCEA"]);
  await CrowdSale.waitForDeployment();
  console.log(`ICO address ${CrowdSale.target}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
