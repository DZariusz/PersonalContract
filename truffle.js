/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

let mainNetProvider = null;
let ropstenProvider = null;

//UNCOMMENT THIS FOR TESTNET/MAINNET DEPLOY
/*
let secrets = require('./secrets');

const WalletProvider = require("truffle-wallet-provider");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Wallet = require('ethereumjs-wallet');



let mainNetPrivateKey = new Buffer(secrets.mainnetPK, "hex");
let mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
//https://mainnet.infura.io/v3/238e31fdb120442cb89eeaf9e9a47cfa
mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");


//Two ways to generate provider:
//1) wallet

let ropstenPrivateKey = new Buffer(secrets.ropstenPK, "hex");
let ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
ropstenProvider = new WalletProvider(ropstenWallet,  "https://ropsten.infura.io/");


//2) HDwallet
//let ropstenProvider = new HDWalletProvider(secrets.ropstenMnemonic,  "https://ropsten.infura.io/" + secrets.infuraKey);
//mainNetProvider = new HDWalletProvider(secrets.mainnetMnemonic,  "https://mainnet.infura.io/" + secrets.infuraKey);
// */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

    networks: {
        development: {
            host: "192.168.8.8",
            port: 8545,
            network_id: "*",
            gasPrice: 1,
            gas: 6700000
        },
        ropsten: {
            host: "127.0.0.1",
            network_id: "3",
            gas: 1500000
        },
        ropstenInfura: {
            provider: ropstenProvider,
            network_id: "3",
            gas: 1500000
        },
        mainnetInfura: {
            provider: mainNetProvider,
            network_id: "1",
            gasPrice: 21000000000,  //wei
            gas: 6700000
        }
    },

    mocha: {
        reporter: 'eth-gas-reporter',
        reporterOptions : {
            currency: 'PLN',
            gasPrice: 21    //gwei
        }
    }
};
