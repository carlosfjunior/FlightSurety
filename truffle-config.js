var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "gap connect jealous champion video protect half concert warrior wing raven armed";
const infuraKey = "009597eb4c7440699cd793bfdd27874a";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       
      gas: 4500000,
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: '^0.4.25'
    }
  }
};