var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        '0xd112ccdfefb60b37505f482f6d471e2d7137eda6',
        '0xe92305e6a629813a748eeed4db7f1fbeb7e32ce8',
        '0xde9f341dc069f2384afe3b66112ca69b2fd1459d',
        '0x5135e1c60ec301e5265c1e28be6bdb8972690e97',
        '0x91dccf1b8ced8ebd84a5aefe2b286b93a7d6d2ef',
        '0x11ee66fdcf5800161dd291c6c3d84cdcb2423d1b',
        '0x019ea91f3403d43d488ce4c0c077253131de5134',
        '0xa8adfb3a70cb2c77f33472a54f33036f6d790abc',
        '0x227833bca3f5ac6e6a9ce9353fbd22e4de0e388f',
        '0x125e8e299f1367e09ab9870932fa1cb4ea7edf1f'
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new(firstAirline);
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};