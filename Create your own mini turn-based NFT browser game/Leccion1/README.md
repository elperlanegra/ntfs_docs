#  A little blockchain primer.
# steps
* Install dependencies.
```
mkdir epic-game
cd epic-game
npm init -y
npm install --save-dev hardhat
```
* then
```
npx hardhat
```
it will install all the dependencies in case of not: 
```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npm install @openzeppelin/contracts
```

* Execute: 
```
npx hardhat run scripts/run.js
```
* Execute: 
```
npx hardhat run scripts/deploy.js --network rinkeby
```
## Bibliography
* Alchemy - [Alchemy to metamask](https://dashboard.alchemyapi.io/) 
* Documentation - [Ethereum developers](https://ethereum.org/en/developers/docs/intro-to-ethereum/) 
* Generate api metamask api key: 
* Metamask ApiKey - [Metamask Api Key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) 

## test our nft
* NFTS Marketplace and put on sale - [Rarible](https://rinkeby.rarible.com/) - [Opensean](https://opensea.io/) 
* Etherscan check our deploy smart contract - [Etherscan](https://rinkeby.etherscan.io/) 
