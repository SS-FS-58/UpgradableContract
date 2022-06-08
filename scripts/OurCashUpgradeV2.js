const { upgrades } = require("hardhat");
const hre = require("hardhat");


async function main() {
   //TODO
  
  const proxyAddress = "0x52B8983d6C55Ce7b22ae70eC4E5Fbd6904e9B986";
  const OurCashUpgradeV2 = await hre.ethers.getContractFactory("OurCashUpgradeV2");
  const ssu2 = await upgrades.upgradeProxy(proxyAddress, OurCashUpgradeV2);

  console.log("SimpleStoageUpgrade deployed to ",ssu2.address);
        
}
  

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });