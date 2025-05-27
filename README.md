
# Audit 507 audit details
- Total Prize Pool: $28,000 in USDC
  - HM awards: up to $19,950 in USDC
    - If no valid Highs or Mediums are found, the HM pool is $0 
  - QA awards: $800 in USDC
  - Judge awards: $2,500 in USDC
  - Scout awards: $500 in USDC
  - Mitigation Review: $4,250 in USDC
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts May 28, 2025 20:00 UTC 
- Ends June 9, 2025 20:00 UTC 

**Note re: risk level upgrades/downgrades**

Two important notes about judging phase risk adjustments: 
- High- or Medium-risk submissions downgraded to Low-risk (QA) will be ineligible for awards.
- Upgrading a Low-risk finding from a QA report to a Medium- or High-risk finding is not supported.

As such, wardens are encouraged to select the appropriate risk level carefully during the submission phase.

## Automated Findings / Publicly Known Issues

The 4naly3er report can be found [here](https://github.com/code-423n4/2025-05-audit-507/blob/main/4naly3er-report.md).



_Note for C4 wardens: Anything included in this `Automated Findings / Publicly Known Issues` section is considered a publicly known issue and is ineligible for awards._

No known issues

✅ SCOUTS: Please format the response above 👆 so its not a wall of text and its readable.

# Overview

[ ⭐️ SPONSORS: add info here ]

## Links

- **Previous audits:**  https://drive.google.com/file/d/1e-ePA3ZofuJ4rjwoADkaBqvqK3Pnyi49/view
  - ✅ SCOUTS: If there are multiple report links, please format them in a list.
- **Documentation:** https://docs.google.com/document/d/1SOG2RGIin-EmAKZtnIXppRX9GmHWBC5ucEodeLG8kzU/edit?tab=t.0
  - Contract Diff for Audits here: https://docs.google.com/document/d/1rw7sW0yc7PqPV2MtMX6zpKIvsT9PCPyCoSec1zYuP_s/edit?tab=t.m41e7w3joszr
- **Website:** 🐺 EM: add a link to the sponsor's website
- **X/Twitter:** 🐺 EM: add a link to the sponsor's Twitter

---

# Scope

*See [scope.txt](https://github.com/code-423n4/2025-05-audit-507/blob/main/scope.txt)*

### Files in scope


| File   | Logic Contracts | Interfaces | nSLOC | Purpose | Libraries used |
| ------ | --------------- | ---------- | ----- | -----   | ------------ |
| /contracts/APIHelper/AlgebraPoolAPI.sol | 1| **** | 288 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraPool.sol<br>@cryptoalgebra/integral-periphery/contracts/interfaces/INonfungiblePositionManager.sol|
| /contracts/APIHelper/AlgebraPoolAPIStorage.sol | 1| **** | 43 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraPool.sol<br>@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/APIHelper/BlackholePairAPIV2.sol | 1| **** | 600 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>@cryptoalgebra/integral-periphery/contracts/interfaces/IQuoterV2.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraPool.sol<br>hardhat/console.sol|
| /contracts/APIHelper/GenesisPoolAPI.sol | 1| **** | 171 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/APIHelper/RewardAPI.sol | 1| **** | 109 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>hardhat/console.sol|
| /contracts/APIHelper/TokenAPI.sol | 1| **** | 51 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/APIHelper/TradeHelper.sol | 1| **** | 124 | ||
| /contracts/APIHelper/veNFTAPI.sol | 1| 1 | 319 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>hardhat/console.sol|
| /contracts/APIHelper/veNFTAPIV1.sol | 1| 1 | 367 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>hardhat/console.sol|
| /contracts/AVM/AutoVotingEscrow.sol | 1| **** | 94 | ||
| /contracts/AVM/AutoVotingEscrowManager.sol | 1| **** | 157 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol|
| /contracts/AVM/interfaces/IAutoVotingEscrow.sol | ****| 1 | 7 | ||
| /contracts/AVM/interfaces/IAutoVotingEscrowManager.sol | ****| 1 | 4 | ||
| /contracts/AlgebraCLVe33/GaugeCL.sol | 1| **** | 232 | |@openzeppelin/contracts/security/ReentrancyGuard.sol<br>@openzeppelin/contracts/access/Ownable.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraPool.sol<br>@cryptoalgebra/integral-periphery/contracts/interfaces/INonfungiblePositionManager.sol<br>@cryptoalgebra/integral-farming/contracts/interfaces/IAlgebraEternalFarming.sol<br>@cryptoalgebra/integral-farming/contracts/interfaces/IAlgebraEternalVirtualPool.sol<br>@cryptoalgebra/integral-farming/contracts/interfaces/IFarmingCenter.sol<br>@cryptoalgebra/integral-farming/contracts/base/IncentiveKey.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IERC20Minimal.sol<br>@cryptoalgebra/integral-farming/contracts/libraries/IncentiveId.sol|
| /contracts/AlgebraCLVe33/GaugeFactoryCL.sol | 1| 1 | 104 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol<br>@cryptoalgebra/integral-farming/contracts/interfaces/IAlgebraEternalFarming.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraPool.sol<br>@cryptoalgebra/integral-farming/contracts/base/IncentiveKey.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts/token/ERC20/IERC20.sol|
| /contracts/Black.sol | 1| **** | 81 | ||
| /contracts/BlackClaims.sol | 1| **** | 145 | ||
| /contracts/BlackGovernor.sol | 1| **** | 78 | |@openzeppelin/contracts/governance/IGovernor.sol|
| /contracts/Bribes.sol | 1| **** | 270 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts/security/ReentrancyGuard.sol<br>@openzeppelin/contracts/utils/math/Math.sol|
| /contracts/CustomPoolDeployer.sol | 1| **** | 154 | |@cryptoalgebra/integral-periphery/contracts/interfaces/IAlgebraCustomPoolEntryPoint.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraPool.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/vault/IAlgebraCommunityVault.sol<br>@openzeppelin/contracts/access/Ownable.sol|
| /contracts/CustomToken.sol | 1| **** | 20 | |@openzeppelin/contracts/token/ERC20/ERC20.sol<br>@openzeppelin/contracts/access/Ownable.sol|
| /contracts/Fan.sol | 1| **** | 15 | |@openzeppelin/contracts/token/ERC20/ERC20.sol<br>@openzeppelin/contracts/access/Ownable.sol|
| /contracts/FixedAuction.sol | 1| **** | 28 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/GaugeExtraRewarder.sol | 1| 2 | 128 | |@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/access/Ownable.sol|
| /contracts/GaugeManager.sol | 1| **** | 418 | |@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraPool.sol<br>@cryptoalgebra/integral-core/contracts/interfaces/vault/IAlgebraCommunityVault.sol<br>@cryptoalgebra/integral-farming/contracts/interfaces/IAlgebraEternalFarming.sol<br>@cryptoalgebra/integral-farming/contracts/base/IncentiveKey.sol|
| /contracts/GaugeV2.sol | 1| 1 | 287 | |@openzeppelin/contracts/security/ReentrancyGuard.sol<br>@openzeppelin/contracts/access/Ownable.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts/token/ERC20/IERC20.sol|
| /contracts/GenesisPool.sol | 1| **** | 328 | |@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol|
| /contracts/GenesisPoolManager.sol | 1| 1 | 244 | |@openzeppelin/contracts/access/Ownable.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol|
| /contracts/GlobalRouter.sol | 2| 7 | 144 | |@openzeppelin/contracts/utils/math/SafeMath.sol<br>@openzeppelin/contracts/security/ReentrancyGuard.sol<br>@openzeppelin/contracts/access/Ownable.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts/token/ERC20/IERC20.sol|
| /contracts/MinterUpgradeable.sol | 1| **** | 168 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/Pair.sol | 1| **** | 453 | ||
| /contracts/PairFees.sol | 1| **** | 46 | ||
| /contracts/PairGenerator.sol | 1| **** | 16 | ||
| /contracts/PermissionsRegistry.sol | 1| **** | 151 | ||
| /contracts/RewardsDistributor.sol | 1| **** | 215 | ||
| /contracts/RouterV2.sol | 2| 5 | 520 | |@cryptoalgebra/integral-periphery/contracts/interfaces/IQuoterV2.sol<br>@cryptoalgebra/integral-periphery/contracts/interfaces/ISwapRouter.sol|
| /contracts/SetterTopNPoolsStrategy.sol | 1| **** | 60 | |@openzeppelin/contracts/access/Ownable.sol|
| /contracts/SetterVoteWeightStrategy.sol | 1| **** | 57 | |@openzeppelin/contracts/access/Ownable.sol|
| /contracts/Thenian.sol | 1| **** | 113 | |@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts/access/Ownable.sol<br>@openzeppelin/contracts/utils/math/SafeMath.sol<br>@openzeppelin/contracts/utils/cryptography/MerkleProof.sol|
| /contracts/TokenHandler.sol | 1| **** | 150 | ||
| /contracts/VeArtProxyUpgradeable.sol | 1| **** | 38 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/VoterV3.sol | 1| **** | 185 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol|
| /contracts/VotingEscrow.sol | 1| **** | 803 | |@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol<br>@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol|
| /contracts/WAVAX.sol | 1| **** | 56 | ||
| /contracts/chainlink/AutomationBase.sol | 1| **** | 13 | ||
| /contracts/chainlink/AutomationCompatible.sol | 1| **** | 4 | ||
| /contracts/chainlink/AutomationCompatibleInterface.sol | ****| 1 | 3 | ||
| /contracts/chainlink/EpochController.sol | 1| **** | 68 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol<br>@openzeppelin/contracts/utils/Strings.sol|
| /contracts/factories/AuctionFactory.sol | 1| **** | 50 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/factories/BribeFactoryV3.sol | 1| 1 | 133 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/factories/GaugeFactory.sol | 1| 1 | 83 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/factories/GenesisPoolFactory.sol | 1| **** | 65 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/factories/PairFactory.sol | 1| **** | 129 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/governance/Governor.sol | 4| **** | 349 | |@openzeppelin/contracts/utils/math/SafeCast.sol<br>@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol<br>@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol<br>@openzeppelin/contracts/utils/cryptography/ECDSA.sol<br>@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol<br>@openzeppelin/contracts/utils/introspection/ERC165.sol<br>@openzeppelin/contracts/utils/structs/DoubleEndedQueue.sol<br>@openzeppelin/contracts/utils/Address.sol<br>@openzeppelin/contracts/utils/Context.sol<br>@openzeppelin/contracts/utils/Timers.sol<br>@openzeppelin/contracts/governance/IGovernor.sol|
| /contracts/governance/L2Governor.sol | 1| **** | 254 | |@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol<br>@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol<br>@openzeppelin/contracts/utils/cryptography/ECDSA.sol<br>@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol<br>@openzeppelin/contracts/utils/introspection/ERC165.sol<br>@openzeppelin/contracts/utils/math/SafeCast.sol<br>@openzeppelin/contracts/utils/structs/DoubleEndedQueue.sol<br>@openzeppelin/contracts/utils/Address.sol<br>@openzeppelin/contracts/utils/Context.sol<br>@openzeppelin/contracts/utils/Timers.sol<br>@openzeppelin/contracts/governance/IGovernor.sol|
| /contracts/governance/L2GovernorCountingSimple.sol | 1| **** | 52 | |contracts/governance/L2Governor.sol|
| /contracts/governance/L2GovernorVotes.sol | 1| **** | 12 | |@openzeppelin/contracts/governance/utils/IVotes.sol<br>contracts/governance/L2Governor.sol|
| /contracts/governance/L2GovernorVotesQuorumFraction.sol | 1| **** | 30 | |contracts/governance/L2GovernorVotes.sol|
| /contracts/interfaces/IAlgebraCLFactory.sol | ****| 1 | 4 | |@cryptoalgebra/integral-core/contracts/interfaces/IAlgebraFactory.sol|
| /contracts/interfaces/IAlgebraCustomCommunityVault.sol | ****| 1 | 4 | |@cryptoalgebra/integral-core/contracts/interfaces/vault/IAlgebraCommunityVault.sol|
| /contracts/interfaces/IAlgebraCustomVaultPoolEntryPoint.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IAlgebraEternalFarmingCustom.sol | ****| 1 | 5 | |@cryptoalgebra/integral-farming/contracts/base/IncentiveKey.sol<br>@cryptoalgebra/integral-farming/contracts/interfaces/IAlgebraEternalFarming.sol|
| /contracts/interfaces/IAlgebraFarmingProxyPluginFactory.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IAlgebraPoolAPIStorage.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IAuction.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IAuctionFactory.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IAutomatedVotingManager.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IBlack.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IBlackClaims.sol | ****| 1 | 9 | ||
| /contracts/interfaces/IBlackGovernor.sol | ****| 1 | 13 | ||
| /contracts/interfaces/IBlackHoleVotes.sol | ****| 1 | 4 | |@openzeppelin/contracts/governance/utils/IVotes.sol|
| /contracts/interfaces/IBlackholePairApiV2.sol | ****| 1 | 43 | ||
| /contracts/interfaces/IBribe.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IBribeAPI.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IBribeDistribution.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IBribeFactory.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IBribeFull.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IDibs.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IERC20.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IGauge.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IGaugeAPI.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IGaugeCL.sol | ****| 1 | 4 | |@cryptoalgebra/integral-farming/contracts/base/IncentiveKey.sol|
| /contracts/interfaces/IGaugeDistribution.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IGaugeFactory.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IGaugeFactoryCL.sol | ****| 1 | 4 | ||
| /contracts/interfaces/IGaugeManager.sol | ****| 1 | 8 | ||
| /contracts/interfaces/IGenesisPool.sol | ****| 1 | 4 | ||
| /contracts/interfaces/IGenesisPoolBase.sol | ****| 1 | 42 | ||
| /contracts/interfaces/IGenesisPoolFactory.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IGenesisPoolManager.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IMinter.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IPair.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IPairCallee.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IPairFactory.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IPairGenerator.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IPairInfo.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IPermissionsRegistry.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IRewardsDistributor.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IRouter.sol | ****| 1 | 8 | ||
| /contracts/interfaces/ITokenHandler.sol | ****| 1 | 3 | ||
| /contracts/interfaces/ITopNPoolsStrategy.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IUniswapRouterETH.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IUniswapV2Pair.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IVeArtProxy.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IVoteWeightStrategy.sol | ****| 1 | 4 | ||
| /contracts/interfaces/IVoter.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IVotingEscrow.sol | ****| 1 | 18 | ||
| /contracts/interfaces/IWETH.sol | ****| 1 | 3 | ||
| /contracts/interfaces/IWrappedBribeFactory.sol | ****| 1 | 3 | ||
| /contracts/libraries/Base64.sol | 1| **** | 41 | ||
| /contracts/libraries/BlackTimeLibrary.sol | 1| **** | 52 | ||
| /contracts/libraries/Math.sol | 1| **** | 33 | ||
| /contracts/libraries/PoolsAndRewardsLibrary.sol | 1| **** | 10 | ||
| /contracts/libraries/SignedSafeMath.sol | 1| **** | 33 | ||
| /contracts/libraries/VoterFactoryLib.sol | 1| **** | 63 | ||
| /contracts/libraries/VotingBalanceLogic.sol | 1| **** | 178 | ||
| /contracts/libraries/VotingDelegationLib.sol | 1| **** | 174 | ||
| **Totals** | **68** | **75** | **10152** | | |

### Files out of scope

*See [out_of_scope.txt](https://github.com/code-423n4/2025-05-audit-507/blob/main/out_of_scope.txt)*

| File         |
| ------------ |
| ./envFiles/devnet/BlackTimeLibrary.sol |
| ./envFiles/qanet/BlackTimeLibrary.sol |
| ./envFiles/testnet/BlackTimeLibrary.sol |
| Totals: 3 |

## Miscellaneous
Employees of Audit 507 and employees' family members are ineligible to participate in this audit.

Code4rena's rules cannot be overridden by the contents of this README. In case of doubt, please check with C4 staff.
