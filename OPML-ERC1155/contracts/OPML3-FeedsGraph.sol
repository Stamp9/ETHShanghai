// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract OPML3FeedsGraph is Ownable {
    mapping(address => uint256[]) public tokenToNFTIDs;

    constructor(){
    }

    function getOPML3IDs(address token) public view returns(uint256[] memory) {
        return tokenToNFTIDs[token];
    }

    function addOPML3ID(address token, uint256 id) external onlyOwner {
        tokenToNFTIDs[token].push(id);
    }

    function rmOPML3ID(address token, uint index) external onlyOwner {
        require(index < tokenToNFTIDs[token].length);
        tokenToNFTIDs[token][index] = tokenToNFTIDs[token][tokenToNFTIDs[token].length-1];
        tokenToNFTIDs[token].pop();
    }
}