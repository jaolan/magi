async function main() {
  const magiNFT = await ethers.getContractFactory("magiNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const magiNFT = await magiNFT.deploy()
  console.log("Contract deployed to address:", magiNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

