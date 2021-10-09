async function main() {
  const MagiNFT = await ethers.getContractFactory("MagiNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const magiNFT = await MagiNFT.deploy()
  console.log("Contract deployed to address:", magiNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

