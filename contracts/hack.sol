pragma solidity ^0.4.22;
import "hardhat/console.sol";
interface IERC223{
    function transfer(address to, uint256 value) public returns (bool success);
}
contract Hack {
    address public tokenContract;
    function setERC223Contract(address _actionsContract) public {
        tokenContract = _actionsContract;
    }
    function withdraw(uint256 amount) public {
        IERC223(tokenContract).transfer(msg.sender, amount);
    }
}