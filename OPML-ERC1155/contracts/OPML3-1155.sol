// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract OPML3 is ERC1155PresetMinterPauser, Ownable {
    // struct OPMLSubscription{
    //     string text;
    //     string title;
    //     string description;
    //     string rssType;
    //     string version;
    //     string htmlUrl;
    //     string xmlUrl;
    // }

    mapping(uint256 => string[]) public idToSubscriptions;

    constructor() ERC1155PresetMinterPauser( "https://dev288.github.io/OPML-ERC1155/token/{id}.json") {
        // _mint(msg.sender, Token_1, 2, "");
    }

    function getSubscriptions(uint256 tokenID) public view returns(string[] memory) {
        return idToSubscriptions[tokenID];
    }

    function addSubscription(uint256 tokenID, string memory s) external onlyOwner {
        idToSubscriptions[tokenID].push(s);
    }

    function rmSubscription(uint256 tokenID, uint index) external onlyOwner {
        require(index < idToSubscriptions[tokenID].length);
        idToSubscriptions[tokenID][index] = idToSubscriptions[tokenID][idToSubscriptions[tokenID].length-1];
        idToSubscriptions[tokenID].pop();
    }
}