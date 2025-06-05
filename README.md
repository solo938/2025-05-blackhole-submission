This repository contains the submission for a Code4rena audit contest, identifying a high-severity vulnerability in RouterV2.sol. The vulnerability allows an attacker to transfer user-approved tokens to an arbitrary contract via the UNSAFE_swapExactTokensForTokens function.

## Submission Overview
- Contest: blackhole
- Author: Sam Sepiol
- Date: June 5, 2025, 03:50 PM IST
- Vulnerability: Arbitrary token transfer in UNSAFE_swapExactTokensForTokens
- Severity: High

## Vulnerability Details
The UNSAFE_swapExactTokensForTokens function in RouterV2.sol (lines 629–633) enables an attacker to transfer user-approved tokens to a malicious pair contract by manipulating the routes parameter. Specifically:
- Line 630: _safeTransferFrom transfers amounts[0] tokens to pairFor(routes[0].from, routes[0].to, routes[0].stable) without validating the pair against IBaseV1Factory.getPair.
- Line 631: _swap calls IBaseV1Pair.swap on the unverified pair, allowing a malicious contract to retain tokens.

The function lacks output amount checks, leading to potential token theft.

### Impact
- Attackers can drain user tokens by directing them to a malicious pair.
- Users lose funds without receiving expected output, risking significant financial loss.

### Proof of Concept
The test in test/UNSAFE.test.js demonstrates the exploit:
- Deploys tokenA, tokenB, and a malicious FakePair.
- Configures FakePair to mimic a legitimate pair.
- Calls UNSAFE_swapExactTokensForTokens to transfer 100 tokenA to FakePair.
- Verifies FakePair`’s `tokenA balance increases from 100 to 200.

Test Output: FakePair initial tokenA balance: 100.0
FakePair final tokenA balance: 200.0 1 passing

## Repository Structure
- test/: Directory containing test scripts.
  - UNSAFE.test.js: Test script demonstrating the exploit.
- contracts/: Directory containing contracts.
  - FakePair.sol: Malicious pair contract used in the test.
  - BaseV1FactoryMock.sol: Mock factory for pair validation.
  - interfaces/: Subdirectory for interfaces.
    - IPair.sol: Interface for pair interactions.
- submission_report.md: Detailed vulnerability report submitted to Code4rena.

## Setup and Running the Test
1. Clone the Repository:
   ```bash
   git clone https://github.com/solo938/2025-05-blackhole-submission.git
   cd 2025-05-blackhole-submission

   Install Dependencies:
npm install

Compile Contracts:
npx hardhat compile

Run Test:
npx hardhat test test/UNSAFE.test.js --network hardhat

Additional Notes
Fixed "IA" revert in sortTokens by using distinct tokens and proper pair setup.
Addressed compiler warning by setting totalSupply to pure in FakePair.sol.



