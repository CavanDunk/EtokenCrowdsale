var Etoken = artifacts.require("./Etoken.sol");
var TCrowdsale = artifacts.require("./TCrowdsale.sol");

const ether = (n) => new web3.BigNumber(web3.toWei(n, 'ether'));

module.exports = async function(deployer, network, accounts){
    const _name = "CSC4980 Token";
    const _symbol = "GSU";
    const _decimal = 18;
    //const lastestTime = (new Date).getTime();
    //const _openingTime = lastestTime;
    //const _closingTime = _openingTime + 
    //const token = await ExampleToken.deployed();
    //ExampleToken.deployed("Example Token", "EXM", 18).then((t) => {token = t;})
    //ExampleTokenCrowdsale.deployed(500, web3.eth.accounts[0], token.address , new web3.BigNumber(web3.toWei(200, 'ether'))).then((t) => {sale = t;})
    deployer.deploy(Etoken,_name,_symbol,_decimal)
    .then(() => Etoken.deployed())
    .then(token => deployer.deploy(TCrowdsale
                                    , 450
                                    , accounts[0]
                                    , token.address
                                    , ether(150)))
                                    
                                    
};