import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import React, { useState, useEffect } from 'react';

export function SearchIdentity({newIdentity, blockData}){

    const [userDtls, setUserDtls] = useState([{
        uId:'1234',
        uJson:'{"firstName":"test","middleName":"sadas","lastName":"twts11","dateOfBirth":"2022-08-10","contactNumber":"","currentAddr1":"","currentAddr2":"","currentAddr3":"","currentCity":"","currentState":"","currentCountry":"","currentZipCode":"","idType":"Aadhar Card","idNumber":"123423","idIssuedCountry":"","idExpiryDate":"","idIssueDate":"","isIdVerified":false,"idVerifiedBy":"","idVerifiedDate":"","IDFile":"","idType2":"Aadhar Card","idNumber2":"","idIssuedCountry2":"","idExpiryDate2":"","idIssueDate2":"","isIdVerified2":false,"idVerifiedBy2":"","idVerifiedDate2":"","IDFile2":""}'
}]);

const [idDetail, setIdDetail] = useState(null);
const [searchFilter, setSearchFilter] = useState('firstName');
const [searchString, setSearchString] = useState('');

function displayUserDetails(element){
    setIdDetail(element);
}

function handleChange(event) {
  let value = event.target.value;
  setSearchFilter(value);
}


function checkId(element) {
    return element.uId === idDetail;
  }

function showUserTable(){
const result = JSON.parse(blockData.filter(checkId)[0].uJson);

return(
        
<table class="table table-striped" key={idDetail} style={{width:'40%', marginLeft:'30%', border: '2px solid black'}}>
    <thead>
        <th style={{ textAlign: 'left'}}>User ID: {idDetail} Block Details</th>
        <td><button>Edit</button></td>
    </thead>
  <tbody class="text-left">
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">First Name</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.firstName}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Middle Name</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.middleName}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Last Name</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.lastName}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Date Of Birth</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.dateOfBirth}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Contact Number</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.dateOfBirth}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Current Address Line 1</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.contactNumber}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Current Address Line 2</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.currentAddr2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Current Address Line 3</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.currentAddr3}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Current Address City</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.currentCity}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Current Address State</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.currentState}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Current Address Country</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.currentCountry}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">Current Address Zip Code</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.currentZipCode}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Type</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idType}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Number</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idNumber}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Issued By Country</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idIssuedCountry}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Issued Date</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idIssueDate}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Expiry Date</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idExpiryDate}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Verified?</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.isIdVerified}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Verified By</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idVerifiedBy}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 Verified Date</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idVerifiedDate}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 1 File</td>
      <td style={{ textAlign: 'left'}} class="text-left"><button>Download</button></td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 Type</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idType2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 Number</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idNumber2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 Issued By Country</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idIssuedCountry2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 Issued Date</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idIssueDate2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 Verified?</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.isIdVerified2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 Verified By</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idVerifiedBy2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 Verified Date</td>
      <td style={{ textAlign: 'left'}} class="text-left">{result.idVerifiedDate2}</td>
    </tr>
    <tr>
      <td style={{ textAlign: 'left'}} class="text-left">ID 2 File</td>
      <td style={{ textAlign: 'left'}} class="text-left"><button>Download</button></td>
    </tr>
    
  </tbody>
</table>
    );
}

function displayRegularTable() {
  let temp = blockData;
  if(searchString===''){
    return blockData.map(element => {
      var json = JSON.parse(element.uJson);
      return (
        <tr>
          <td style={{ textAlign: 'left' }} class="text-left">{json.firstName}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{json.middleName}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{json.lastName}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{element.uId}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{json.dateOfBirth}</td>
          <td style={{ textAlign: 'left' }} class="text-left"><button id={element.uId} onClick={() => displayUserDetails(element.uId)}>View</button></td>
        </tr>);
    });
  }
  else if (searchString!==''){
    return blockData.map(element => {
      var json = JSON.parse(element.uJson);
      let value = '';
      switch(searchFilter){
        case 'firstName':
          value= json.firstName;
          break;
        case 'middleName':
          value= json.middleName;
          break;
        case 'lastName':
          value= json.lastName;
          break;
        case 'idNumber':
          value= json.idNumber;
          break;
        case 'dateOfBirth':
          value= json.dateOfBirth;
          break;

      }
      console.log(searchString)
      console.log(value)

      if(value.includes(searchString))
      return (
        <tr>
          <td style={{ textAlign: 'left' }} class="text-left">{json.firstName}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{json.middleName}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{json.lastName}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{element.uId}</td>
          <td style={{ textAlign: 'left' }} class="text-left">{json.dateOfBirth}</td>
          <td style={{ textAlign: 'left' }} class="text-left"><button id={element.uId} onClick={() => displayUserDetails(element.uId)}>View</button></td>
        </tr>);
    });
  }
  
}

    return(
        <div>
        {
            newIdentity===1 && 
            <div style={{marginTop: '30px'}}>
                <div style={{marginLeft:'40%'}}>
             <input type="text" placeholder="Search.." name="search" onChange={(e)=>{setSearchString(e.target.value)}}/>
           <select name="types" id="types" style={{marginLeft:'9px'}} onChange={(e) => handleChange(e)}>
           
              <option value="firstName">First Name</option>
              <option value="middleName">Middle Name</option>
              <option value="lastName">Last Name</option>
              <option value="idNumber">ID Number</option>
              <option value="dateOfBirth">Date Of Birth</option>
            </select>
            </div>
                <table class="styled-table" style={{marginLeft: '35%'}}>
              <thead>
                  <tr>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Last Name</th>
                      <th> ID Number</th>
                      <th>Date of Birth</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                {
                
                displayRegularTable()
                }   
              </tbody>
          </table>
                <br/>
                <br/>
                <br/>
                {
                    idDetail !== null && showUserTable()
                }
            
            </div>
          }
          </div>
    );
    
}


