const { upgrades } = require("hardhat");
const hre = require("hardhat");


async function main() {
   //TODO
    const SimpleStorageUpgrade = await hre.ethers.getContractFactory("SimpleStorageUpgrade")
    const ssu = await upgrades.deployProxy(SimpleStorageUpgrade, [500], { initializer: 'set' });

    console.log("SimpleStorageUpgrade deployed to:", ssu.address);
        
}
  

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });