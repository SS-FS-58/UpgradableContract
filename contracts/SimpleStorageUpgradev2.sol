//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SimpleStorageUpgradeV2 {
    uint storedData;
    uint storedKey;

    event Change(string message, uint newval);

    function set(uint x) public {
        console.log("The value iss %d",x);
        require(x < 5000, "Should be less than 5000");
        storedData  = x;
        emit Change("set",x);
    }

    function get() public view returns (uint) {
        return storedData;
    }

    function setKey(uint key) public {
        storedKey = key;
    }

    function getKey() public view returns(uint){
        return storedKey;
    }
}