const { upgrades } = require("hardhat");
const hre = require("hardhat");


async function main() {
   //TODO
    const OurCashUpgrade = await hre.ethers.getContractFactory("OurCashUpgrade")
    const ocu = await upgrades.deployProxy(OurCashUpgrade, ["OurCash", "OC"], {initializer: 'initialize'});

    console.log("OurCashUpgrade deployed to:", ocu.address);
        
}
  

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });