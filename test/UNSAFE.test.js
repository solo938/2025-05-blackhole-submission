// test/UNSAFE.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UNSAFE_swapExactTokensForTokens", function () {
  it("should transfer tokens to an arbitrary contract", async function () {
    const [user] = await ethers.getSigners();

    // Deploy ERC20Mock tokens
    const TokenA = await ethers.getContractFactory("ERC20Mock");
    const tokenA = await TokenA.deploy("TestA", "TSTA", user.address, ethers.utils.parseEther("1000"));
    await tokenA.deployed();
    console.log("ERC20Mock (tokenA):", tokenA.address);

    const TokenB = await ethers.getContractFactory("ERC20Mock");
    const tokenB = await TokenB.deploy("TestB", "TSTB", user.address, ethers.utils.parseEther("1000"));
    await tokenB.deployed();
    console.log("ERC20Mock (tokenB):", tokenB.address);

    // Deploy FakePair
    const FakePair = await ethers.getContractFactory("FakePair");
    const fakePair = await FakePair.deploy();
    await fakePair.deployed();
    await fakePair.setToken0(tokenA.address);
    await fakePair.setToken1(tokenB.address);
    await tokenA.transfer(fakePair.address, ethers.utils.parseEther("100"));
    await tokenB.transfer(fakePair.address, ethers.utils.parseEther("100"));
    console.log("FakePair:", fakePair.address);
    console.log("FakePair tokenA balance:", ethers.utils.formatEther(await tokenA.balanceOf(fakePair.address)));
    console.log("FakePair tokenB balance:", ethers.utils.formatEther(await tokenB.balanceOf(fakePair.address)));

    // Deploy BaseV1FactoryMock
    const Factory = await ethers.getContractFactory("BaseV1FactoryMock");
    const factory = await Factory.deploy();
    await factory.deployed();
    await factory.setPair(fakePair.address);
    console.log("BaseV1FactoryMock:", factory.address);

    // Deploy WETHMock
    const WETH = await ethers.getContractFactory("WETHMock");
    const weth = await WETH.deploy();
    await weth.deployed();
    console.log("WETHMock:", weth.address);

    // Deploy RouterV2
    const Router = await ethers.getContractFactory("RouterV2");
    const router = await Router.deploy(
      factory.address,
      weth.address,
      ethers.constants.AddressZero,
      ethers.constants.AddressZero,
      ethers.constants.AddressZero,
      ethers.constants.AddressZero
    );
    await router.deployed();
    console.log("RouterV2:", router.address);

    // Approve tokenA
    await tokenA.approve(router.address, ethers.utils.parseEther("100"));
    console.log("Approved 100 tokenA, allowance:", ethers.utils.formatEther(await tokenA.allowance(user.address, router.address)));

    // Setup swap parameters
    const amounts = [ethers.utils.parseEther("100"), ethers.utils.parseEther("100")]; // Input + output
    const routes = [{
      pair: fakePair.address,
      from: tokenA.address,
      to: tokenB.address,
      stable: false,
      concentrated: false,
      receiver: user.address
    }];

    // Log initial state
    console.log("User tokenA balance:", ethers.utils.formatEther(await tokenA.balanceOf(user.address)));
    console.log("User tokenB balance:", ethers.utils.formatEther(await tokenB.balanceOf(user.address)));
    console.log("FakePair tokenA balance:", ethers.utils.formatEther(await tokenA.balanceOf(fakePair.address)));
    console.log("FakePair tokenB balance:", ethers.utils.formatEther(await tokenB.balanceOf(fakePair.address)));
    const [reserve0, reserve1, blockTimestampLast] = await fakePair.getReserves();
    console.log("FakePair reserves:", {
      reserve0: ethers.utils.formatEther(reserve0),
      reserve1: ethers.utils.formatEther(reserve1),
      blockTimestampLast
    });

    // Execute swap
    console.log("Executing UNSAFE_swapExactTokensForTokens with amounts:", amounts.map(ethers.utils.formatEther));
    try {
      const tx = await router.UNSAFE_swapExactTokensForTokens(
        amounts,
        routes,
        user.address,
        Math.floor(Date.now() / 1000) + 1000
      );
      await tx.wait();
      console.log("Swap executed successfully");
    } catch (error) {
      console.log("Swap failed with error:", error.message);
      throw error;
    }

    // Verify balances
    const finalTokenABalance = await tokenA.balanceOf(fakePair.address);
    const finalTokenBBalance = await tokenB.balanceOf(fakePair.address);
    console.log("FakePair final tokenA balance:", ethers.utils.formatEther(finalTokenABalance));
    console.log("FakePair final tokenB balance:", ethers.utils.formatEther(finalTokenBBalance));
    expect(finalTokenABalance).to.equal(ethers.utils.parseEther("200")); // Initial 100 + swapped 100
  });
});