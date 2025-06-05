// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract FakePair {
    address public token0;
    address public token1;
    uint112 public reserve0;
    uint112 public reserve1;
    uint32 public blockTimestampLast;

    event Swapped(address indexed caller, address indexed to, uint amount0Out, uint amount1Out);
    event Received(address indexed from, uint amount);

    constructor() {
        token0 = address(0);
        token1 = address(0);
        reserve0 = 1000 ether;
        reserve1 = 1000 ether;
        blockTimestampLast = uint32(block.timestamp);
    }

    function setToken0(address _token0) external {
        token0 = _token0;
    }

    function setToken1(address _token1) external {
        token1 = _token1;
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    function getReserves() external view returns (uint112, uint112, uint32) {
        return (reserve0, reserve1, blockTimestampLast);
    }

    function getAmountOut(uint amountIn, address) external pure returns (uint) {
        return amountIn; // 1:1 swap
    }

    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external {
        require(amount0Out > 0 || amount1Out > 0, "Insufficient output amount");
        emit Swapped(msg.sender, to, amount0Out, amount1Out);
        if (data.length > 0) {
            (bool success,) = to.call(data);
            require(success, "Call failed");
        }
    }

    function metadata() external view returns (uint dec0, uint dec1, uint r0, uint r1, bool st, address t0, address t1) {
        return (18, 18, reserve0, reserve1, false, token0, token1);
    }

    function totalSupply() external pure returns (uint) {
        return 1000 ether; // Hardcoded, so pure
    }
}