const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    // URL from where we can extract the metadata for a DotaPunks
    const metadataURL = "ipfs://QmYFWtqG3pvAK3opjpPmGdVMsfsDRywaRJJcDfpi773Kth";
    /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so dotaPunksContract here is a factory for instances of our DotaPunks contract.
  */
    const dotaPunksContract = await ethers.getContractFactory("DotaPunks");

    // deploy the contract
    const deployedDotaPunksContract = await dotaPunksContract.deploy(
        metadataURL
    );

    await deployedDotaPunksContract.deployed();

    // print the address of the deployed contract
    console.log(
        "DotaPunks Contract Address:",
        deployedDotaPunksContract.address
    );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
