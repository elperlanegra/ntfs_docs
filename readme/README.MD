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
npx hardhat run scripts/sample-script.js
```
## Bibliography

* Documentation - [Ethereum developers](https://ethereum.org/en/developers/docs/intro-to-ethereum/) 