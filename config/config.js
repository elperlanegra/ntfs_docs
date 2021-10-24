// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  metamaskApiKey: process.env.METAMASK_PRIVATE_API_KEY,
  alchemyEthUrl: process.env.ETH_RINKEBY_URL
};