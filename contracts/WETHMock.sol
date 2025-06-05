// contracts/WETHMock.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract WETHMock {
  function deposit() external payable {}
  function transfer(address, uint256) external pure returns (bool) {
    return true;
  }
  function withdraw(uint256) external {}
}