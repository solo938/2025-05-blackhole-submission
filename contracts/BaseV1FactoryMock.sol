 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract BaseV1FactoryMock {
    address public pair;

    constructor() {
        pair = address(0);
    }

    function setPair(address _pair) external {
        pair = _pair;
    }

    function isPair(address _pair) external view returns (bool) {
        return _pair == pair;
    }

    function getPair(address, address, bool) external view returns (address) {
        return pair;
    }
}