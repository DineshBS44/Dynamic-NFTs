# Dynamic NFT

A Dynamic NFT with Random traits is deployed to Ethereum's Public test network called Rinkeby

Random traits for the NFT have been obtained using Chainlink VRF and the metadata for NFT has been stores using IPFS

The smart contract is verified in Etherscan using its API

The smart contract is compiled, tested and deployed to Rinkeby test network using Chainlink Truffle Box

<br/>
<p align="center">
<a href="https://chain.link" target="_blank">
<img src="https://raw.githubusercontent.com/smartcontractkit/box/master/box-img-lg.png" width="225" alt="Chainlink Truffle logo">
</a>
</p>
<br/>

## Verified smart contract on Etherscan

- Contract address - **0x702685B934aaa8bCaf3a2e69789566402d346109**
- <a href="https://rinkeby.etherscan.io/address/0x702685B934aaa8bCaf3a2e69789566402d346109#code">Click here</a> to view more details about the contract

## Requirements

- NPM

## Installation

1. Install truffle

```bash
npm install truffle -g
```

2. Setup repo

```bash
mkdir Dynamic-NFT
cd Dynamic-NFT
```

3. Unbox

```bash
truffle unbox smartcontractkit/box
```

4. Install dependencies by running:

```bash
npm install

# OR...

yarn install
```

## Compile

```bash
truffle compile
```

## Test

```bash
truffle test
```

## Deploy

For deploying to the Rinkeby network, Truffle will use `@truffle/hdwallet-provider` for the mnemonic and Infura RPC URL. Set the environment variables `$RINKEBY_RPC_URL` and `$MNEMONIC` before running:

```bash
truffle migrate --reset --network rinkeby
```

## Verify

For verifying the smart contract deployed to Rinkeby

```bash
truffle run verify DungeonsAndDragons --network rinkeby --license MIT
```

## Libraries/services used

- **openzeppelin-solidity** - For inheriting the ERC721 token standard into this token
- **Truffle** - Framework to make compiling, deploying and testing the smart contract easier
- **Chainlink** - For inheriting the VRFConsumerBase.sol contract to generate Random traits for the NFT
- **solc** - For writing smart contracts in solidity and compiling it
- **mocha & chai** - For writing tests on smart contracts
- **Infura** - To get the API endpoint to interact with the Ethereum public network
- **@truffle/hdwallet-provider** - To import the wallet's details using seed phrase and infura api key which is used to deploy the smart contract
- **truffle-plugin-verify** - To verify the smart contract code on Etherscan using its API
- **dotenv** - For managing data in .env files
- **IPFS** - To store the NFT images and metadata in the decentralized storage provided by IPFS
- **Remix** - For writing, compiling, deploying and testing smart contracts on JavaScript VM
- **web3** - To interact with the smart contract which is deployed to the Rinkeby Test network
- **Metamask** - Ethereum wallet which is connected to the DApp(Decentralized Application)
- **Etherscan** - View and keep track of transactions happening around a smart contract as well as view its code, read and write stuff to it
- **OpenSea** - To view the NFT along with its metadata by connecting to the Metamask wallet

### Additional details

- **ERC-721 Token name** - DungeonsAndDragons
- **ERC-721 Token symbol** - D&D
- **Token address on the Rinkeby test network** - 0x702685B934aaa8bCaf3a2e69789566402d346109
- **Truffle version** - 5.3.14
- **Solidity version** - 0.6.6
- **Node JS version** - 14.16.1
- **openzeppelin-solidity version** - 4.2.0
- **@truffle/hdwallet-provider version** - 1.2.1
- **web3 version** - 1.4.0

## Developer

- **Dinesh B S** [(@DineshBS44)](https://github.com/DineshBS44)

## License

Licensed under MIT License : https://opensource.org/licenses/MIT

<br>
<br>
