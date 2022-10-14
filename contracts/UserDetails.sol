// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract UserDetails
{
  struct UserHash {
        string uId;
        string hashKey1;
        string hashKey2;
     }

    struct UserData {
        string uId;
        string uJson;
     }
    
    UserData[] _data;
    UserHash[] _hashkeys;

    function addUser(string memory _uid, string memory _hashKey1, string memory _hashKey2, string memory _uJson) public{
      UserData memory ud = UserData (_uid, _uJson);
      _data.push(ud);

      UserHash memory uh = UserHash (_uid, _hashKey1, _hashKey2);
      _hashkeys.push(uh);
    }

    function updateUser(string memory _uid, string memory _hashKey1, string memory _hashKey2, string memory _uJson) 
    public returns(bool)
    { 
      for(uint i=0; i< _hashkeys.length; i++)
      {
        if (keccak256(abi.encodePacked(_hashkeys[i].uId)) == keccak256(abi.encodePacked(_uid))){
           _hashkeys[i].hashKey1 = _hashKey1;
           _hashkeys[i].hashKey2 = _hashKey2;
           _data[i].uJson = _uJson;
          return true;
          }
      }
       return false; 
    }

    function getUser() public view returns(UserData[] memory)
    {
      return _data;
    } 

    function getUserById(string memory _uid) public view returns(string memory)
    {
      string memory _uData;
      for(uint i=0; i< _hashkeys.length; i++)
      {
        if (keccak256(abi.encodePacked(_hashkeys[i].uId)) == keccak256(abi.encodePacked(_uid))){
            _uData = _data[i].uJson;
            break;
          }
      }
      return _uData;
    }

     function getUserByHashKey(string  memory _hashKey1, string  memory _hashKey2) public view returns(bool)
    {
      if(_hashkeys.length > 0){
      for(uint i=0; i< _hashkeys.length; i++)
      {
       if (keccak256(abi.encodePacked(_hashkeys[i].hashKey1)) == keccak256(abi.encodePacked(_hashKey1)) ||
           keccak256(abi.encodePacked(_hashkeys[i].hashKey1)) == keccak256(abi.encodePacked(_hashKey2)) ||
           keccak256(abi.encodePacked(_hashkeys[i].hashKey2)) == keccak256(abi.encodePacked(_hashKey1)) ||
           keccak256(abi.encodePacked(_hashkeys[i].hashKey2)) == keccak256(abi.encodePacked(_hashKey2))
        ) {
          return true;
          }
      }
      }
      return false;
    } 
}