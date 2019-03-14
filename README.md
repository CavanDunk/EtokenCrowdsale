# EtokenCrowdsale
Assignment made for CSC 4980(Block Chain)
Created by Cavan Dunkley
The following code was created through the use of tutorials made by Gaurav Agrawal.
The tutorials can be found here. ([Part one](https://medium.com/crowdbotics/how-to-build-a-simple-capped-crowdsale-token-using-openzeppelin-library-part-1-2789ec642308) and [Part two](https://medium.com/crowdbotics/how-to-build-a-simple-capped-crowdsale-token-using-openzeppelin-library-part-2-cf96cb66c3d0))
## Installation
This project does not use the lastest version on truffle
#### Command Lines
```
npm install -g truffle@4.1.15
```
These Files are needed for this program to compile and work aswell
```
npm install web3@0.20.7
npm install openzeppelin-solidity@1.10.0
```
# Tutorial Test Lines
#### First
```
truffle compile
truffle develop
migrate --reset
```
EToken.deployed().then((t) => {token= t;})
TCrowdsale.deployed().then((t) => {token = t;})
token.transferOwnership(sale.address)
![as](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/Tutorial%201-3.png?raw=true)
- **sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(1, 'ether')) , from : web3.eth.accounts[1]});**
![first sale](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/Tutone%20(2).png)
- **sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(2, 'ether')) , from : web3.eth.accounts[1]});**
![error](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/Tutone%20(3).png)
- **sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(48, 'ether')) , from : web3.eth.accounts[1]});**
![Big Buy](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/tuttwo%20(3).png)
- **sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(1, 'ether')) , from : web3.eth.accounts[1]});**
![second error](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/tuttwo%20(2).png)
- **token.balanceOf(web3.eth.accounts[1]).then(result => result.toNumber())**
![balance](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/Balanof.png)

# Assignment Test Problems
```
truffle compile
truffle develop
migrate --reset
EToken.deployed().then((t) => {token= t;})
TCrowdsale.deployed().then((t) => {token = t;})
token.transferOwnership(sale.address)
```
```
Token Name:"CSC4980"
Token Symbol: "GSU"
Token decimals: 18
rate: 450 tokens x Ether
cap: 150 Ether
```

- **Try to buy tokens with 2.5 ether(minimum is set to five so this will not work)**
![2.5](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/gsuuu1.png)
- **Buy tokens with 15 ether**
![15](https://github.com/CavanDunk/EtokenCrowdsale/blob/master/Solutions/15gsu.png)
- **Return How many tokens are left**
# 60,750


