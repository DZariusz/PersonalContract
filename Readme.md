# DZariusz Personal Contract

Purpose of it, is when there is a need to provide ethereum address to mark me somewhere,  
I can provide this contract address instead. It will be better solution, 
because anybody can see my name and contact to me right away.

## See it on mainNet

[0x2eaf4bbdc530f4cb4724eadfffa82abd0e61f6b4](https://etherscan.io/address/0x2eaf4bbdc530f4cb4724eadfffa82abd0e61f6b4)




## Development step by step

First make sure, you have latest nodejs to support await/async

```
//start is simple
npm init
truffle init
npm i openzeppelin-solidity
npm i -D babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader


//after developing the contracts...
truffle compile --all

//after developing the tests...
ganache-cli -b 3
truffle migrate --reset
truffle test
```


## Deploy 

Usefull info
* https://medium.com/coinmonks/complete-walkthrough-deploy-a-smart-contract-to-development-ropsten-and-mainnet-howtobuidl-a7d1a89fa75a


### Using Infura.io 

**WARNING:** at moment of writing, infura and HDwallet has some issue, 
that causes problem with deploying to mainnet! 

https://github.com/trufflesuite/truffle-migrate/issues/29

But it working well with ropsten, so this are the speps:

#### Infura - Ropsten

Using MetaMask you need to know your address and private key (or mnemonic) 
and you need to have some ETH.
You can grab some from: http://faucet.ropsten.be:3001/

Configuration for Infura you can  find in `truffle.js`.

``` 
npm install --save-dev truffle-wallet-provider
npm install --save-dev bluebird

# before run this, you need to setup ropsten network, Im using infura for this
truffle console --network ropsten

# now in console you can check if the address is correct

Promisify = require("bluebird")
Promisify.promisifyAll(web3.eth)
web3.eth.getAccountsAsync()
a = _
web3.eth.getBalanceAsync(a[0]);
b = _
b.toString(10)


(ropsten)> migrate
```

Contract address on ropsten network: 
[0x3ce526b35f075305b6fdd5d67c5e46018572a331](https://ropsten.etherscan.io/address/0x3ce526b35f075305b6fdd5d67c5e46018572a331)

We can play on ropsten to see, if all looks good ;)

```
truffle console --network ropsten
(ropsten)> DZariusz.at('0x3ce526b35f075305b6fdd5d67c5e46018572a331')
dz = _
dz.name.call();
dz.contact.call();
dz.setContact('http://www.dzariusz.com');
dz.contact.call();
```
 
 #### infura - mainNet
 
 There were issues with infura, so I did not deploy to live using it. But it should be same scenario as for testnet. 
 Just remember to adjust `./migrations/2_deploy_contracts.js` and `truffle.js`.
 
 ### Using Remix
 
 base on [deploy-smart-contracts-on-ropsten-testnet-through-ethereum-remix](https://medium.com/swlh/deploy-smart-contracts-on-ropsten-testnet-through-ethereum-remix-233cd1494b4b)
 
 Connect MetaMask to remix network and go to [Remix Solidity IDE](http://remix.ethereum.org).
 
 Set valid setting on _Settings_ and _Run_ tabs... and you are ready to go!
 
 Compile and deploy!
 
 BTW - use onl version of MetaMask GUI - 
 because on new one there are missing field for _gas_ and _gasPrice_.
 
      
 Deployed contract:
 [0x60bc69c356b975f39240d21deeeed4f7537ab68f](https://ropsten.etherscan.io/address/0x60bc69c356b975f39240d21deeeed4f7537ab68f)
 
 
 #### Remix - mainNet
 
 Same as for testnet... but more stressfull :-D
 Just remember to adjust `./migrations/2_deploy_contracts.js` and `truffle.js`.
 
 and my first baby is alive! 
 [0x2eaf4bbdc530f4cb4724eadfffa82abd0e61f6b4](https://etherscan.io/address/0x2eaf4bbdc530f4cb4724eadfffa82abd0e61f6b4)
 
 
 
 