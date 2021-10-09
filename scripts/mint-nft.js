require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

// parse contents of contract ABI
const contract = require("../artifacts/contracts/magiNFT.sol/magiNFT.json")

// create contract from ABI
const contractAddress = "0xf8d3d42a27e16217bC6125f2074033a612630aBB"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

