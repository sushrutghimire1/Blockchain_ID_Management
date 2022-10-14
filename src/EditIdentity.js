import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { sha256 } from 'js-sha256';


export function EditIdentity({newIdentity, defaultData, onSubmitClick}){
 
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [currentAddr1, setcurrentAddr1] = useState('');
    const [currentAddr2, setcurrentAddr2] = useState('');
    const [currentAddr3, setcurrentAddr3] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [currentState, setCurrentState] = useState('');
    const [currentCountry, setCurrentCountry] = useState('');
    const [currentZipCode, setCurrentZipCode] = useState('');
    const [idType, setIDType] = useState('');
    const [idNumber, setIDNumber] = useState('');
    const [idIssuedCountry, setIDIssuedCountry] = useState('');
    const [idExpiryDate, setIDExpiryDate] = useState('');
    const [idIssueDate, setIDIssueDate] = useState('');
    const [isIdVerified, setIsIDVerified] = useState(false);
    const [idVerifiedBy, setIDVerifiedBy] = useState('');
    const [idVerifiedDate, setIDVerifiedDate] = useState('');
    const [IDFile, setIDFile] = useState('');
    const [hasSecondId, sethasSecondId] = useState(false);
    //id2
    const [idType2, setIDType2] = useState('Aadhar Card');
    const [idNumber2, setIDNumber2] = useState('');
    const [idIssuedCountry2, setIDIssuedCountry2] = useState('');
    const [idExpiryDate2, setIDExpiryDate2] = useState('');
    const [idIssueDate2, setIDIssueDate2] = useState('');
    const [isIdVerified2, setIsIDVerified2] = useState(false);
    const [idVerifiedBy2, setIDVerifiedBy2] = useState('');
    const [idVerifiedDate2, setIDVerifiedDate2] = useState('');
    const [IDFile2, setIDFile2] = useState('');
    const [resultId, setResultId] = useState('');

    const [hashError, setHashError] = useState(0);
    const [isUpdated, setIsUpdated] = useState(false);

  
    
 

    async function handleFileRead(event) {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        const hash = sha256(base64)
        setIDFile(hash)
        localStorage.setItem(hash, base64)
      }

      async function handleFileRead2(event) {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        const hash = sha256(base64)
        setIDFile2(hash)
        localStorage.setItem(hash, base64)
      }

     
    function convertBase64 (file) {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

      function checkHashDetails()
      {
        var x;
        
                    if(IDFile === '') {
                      //x= getUserByHashKey(0,IDFile2);
                    }
                    if(IDFile2 === ''){
                     // x=  getUserByHashKey(IDFile,0);
                    }

                    if(x.hash===IDFile || x.hash2 === IDFile2){
                      //display error
                    }

                    //hashError 1 or 2
      }
 
      function reconcileDefaultData(){
        if(defaultData && isUpdated===false){
        setFirstName(defaultData.firstName);
        setMiddleName(defaultData.middleName);
        setLastName(defaultData.lastName);
        setDateOfBirth(defaultData.dateOfBirth);
        setContactNumber(defaultData.contactNumber);
        setcurrentAddr1(defaultData.currentAddr1);
        setcurrentAddr2(defaultData.currentAddr2);
        setcurrentAddr3(defaultData.currentAddr3);
        setCurrentCity(defaultData.currentCity);
        setCurrentState(defaultData.currentState);
        setCurrentCountry(defaultData.currentCountry);
        setCurrentZipCode(defaultData.currentZipCode);
        setIDType(defaultData.idType);
        setIDNumber(defaultData.idNumber);
        setIDIssuedCountry(defaultData.idIssuedCountry);
        setIDExpiryDate(defaultData.idExpiryDate);
        setIDIssueDate(defaultData.idIssueDate);
        setIsIDVerified(defaultData.isIdVerified);
        setIDVerifiedBy(defaultData.idVerifiedBy);
        setIDVerifiedDate(defaultData.idVerifiedDate);
        setIDFile(defaultData.IDFile);
        sethasSecondId(defaultData.hasSecondId);
    //id2
        setIDType2(defaultData.idType2);
        setIDNumber2(defaultData.idNumber2);
        setIDIssuedCountry2(defaultData.idIssuedCountry2);
        setIDExpiryDate2(defaultData.idExpiryDate2);
        setIDIssueDate2(defaultData.idIssueDate2);
        setIsIDVerified2(defaultData.isIdVerified2);
        setIDVerifiedBy2(defaultData.idVerifiedBy2);
        setIDVerifiedDate2(defaultData.idVerifiedDate2);
        setIDFile2(defaultData.IDFile2);
        setIsUpdated(true);
        setResultId(defaultData.resultId)
        }
      }

    return(
        <div>
          {console.log(defaultData)}
         {reconcileDefaultData()}

        { newIdentity===3 &&
            <div style={{
                       display: 'block', width: 550, padding: 30, marginLeft: '25%', backgroundColor:'#CAF4F4',
                       marginTop: '20px'
                   }}>
                       <h5>Please Enter the User Details</h5>
                       <Form>
             <FormGroup>
               <Label for="firstName">
                 First Name
               </Label>
               <Input
                 id="firstName"
                 name="firstName"
                 placeholder="First Name"
                 type="text"
                 onChange={(e)=>{ setFirstName(e.target.value)}}
                 value={firstName}
               />
             </FormGroup>
             <FormGroup>
               <Label for="middleName">
               Middle Name
               </Label>
               <Input
                 id="middleName"
                 name="middleName"
                 placeholder="Middle Name"
                 type="text"
                 onChange={(e)=>{ setMiddleName(e.target.value)}}
                 value={middleName}
               />
             </FormGroup>
             <FormGroup>
               <Label for="lastName">
               Last Name
               </Label>
               <Input
                 id="lastName"
                 name="lastName"
                 placeholder="Last Name"
                 type="text"
                 onChange={(e)=>{ setLastName(e.target.value)}}
                 value={lastName}
               />
             </FormGroup>
             <FormGroup>
             <Label for="dateOfBirth">
             Date of Birth
             </Label>
             <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
             <input 
             placeholder="Select date" 
             type="date" 
             id="example" 
             class="form-control"
             onChange={(e)=>{ setDateOfBirth(e.target.value)}}
             value={dateOfBirth}
             />
             </div>
             </FormGroup>
           
             <FormGroup>
               <Label for="contactNumber">
               Contact Number (10 Digits)
               </Label>
               <Input
                 id="contactNumber"
                 name="contactNumber"
                 placeholder="Contact Number"
                 type="text"
                 onChange={(e)=>{ setContactNumber(e.target.value)}}
                 value={contactNumber}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="currentAddr1">
               Current Address Line 1
               </Label>
               <Input
                 id="currentAddr1"
                 name="text"
                 type="textarea"
                 onChange={(e)=>{ setcurrentAddr1(e.target.value)}}
                 value={currentAddr1}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="currentAddr2">
               Current Address Line 2
               </Label>
               <Input
                 id="currentAddr2"
                 name="text"
                 type="textarea"
                 onChange={(e)=>{ setcurrentAddr2(e.target.value)}}
                 value={currentAddr2}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="currentAddr1">
               Current Address Line 3
               </Label>
               <Input
                 id="currentAddr3"
                 name="text"
                 type="textarea"
                 onChange={(e)=>{ setcurrentAddr3(e.target.value)}}
                 value={currentAddr3}
               />
             </FormGroup>
           
           
             <FormGroup>
               <Label for="city">
                 Current Address City
               </Label>
               <Input
                 id="city"
                 name="city"
                 placeholder="Current Address City"
                 type="text"
                 onChange={(e)=>{ setCurrentCity(e.target.value)}}
                 value={currentCity}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="state">
                 Current Address State
               </Label>
               <Input
                 id="state"
                 name="state"
                 placeholder="Current Address State"
                 type="text"
                 onChange={(e)=>{ setCurrentState(e.target.value)}}
                 value={currentState}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="country">
                 Current Address Country
               </Label>
               <Input
                 id="country"
                 name="country"
                 placeholder="Current Address Country"
                 type="text"
                 onChange={(e)=>{ setCurrentCountry(e.target.value)}}
                 value={currentCountry}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="zip">
                 Current Address Zip Code
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="Current Address Zip Code"
                 type="text"
                 onChange={(e)=>{ setCurrentZipCode(e.target.value)}}
                 value={currentZipCode}
               />
             </FormGroup>
           
           
             <FormGroup>
               <Label for="exampleSelect">
                 Select ID Type
               </Label>
               <Input
                 id="exampleSelect"
                 name="select"
                 type="select"
                 onChange={(e)=>{ setIDType(e.target.value)}}
                 

               >
                 <option >
                   Aadhar Card
                 </option>
                 <option>
                   PAN Card
                 </option>
                 <option>
                   Others
                 </option>
               </Input>
             </FormGroup>
           
             <FormGroup>
               <Label for="zip">
                 ID Number
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="ID Number"
                 type="text"
                 onChange={(e)=>{ setIDNumber(e.target.value)}}
                 value={idNumber}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="zip">
                 ID Issued By Country
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="Country"
                 type="text"
                 onChange={(e)=>{ setIDIssuedCountry(e.target.value)}}
                 value={idIssuedCountry}
               />
             </FormGroup>
           
             <FormGroup>
             <Label for="dateOfBirth">
             ID Expiry Date
             </Label>
             <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
             <input 
             placeholder="Select date" 
             type="date" 
             id="example" 
             class="form-control"
             onChange={(e)=>{ setIDExpiryDate(e.target.value)}}
             value={idExpiryDate}
             />
             </div>
             </FormGroup>
           
             <FormGroup>
             <Label for="dateOfBirth">
             ID Issue Date
             </Label>
             <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
             <input 
             placeholder="Select date" 
             type="date" 
             id="example" 
             class="form-control"
             onChange={(e)=>{ setIDIssueDate(e.target.value)}}
             value={idIssueDate}
             />
             </div>
             </FormGroup>
           
             <FormGroup check>
              
               <Label for="zip"> <Input type="checkbox" 
                onChange={(e)=>{ console.log(e.target.checked); setIsIDVerified(e.target.checked)}}
                defaultChecked= {isIdVerified}
               /> ID is verified </Label>
               <Label check>
                
               </Label>
             </FormGroup>
           { isIdVerified === true &&
           <div>
             <FormGroup>
               <Label for="zip">
                 ID Verified By
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="ID Verified By"
                 type="text"
                 onChange={(e)=>{ setIDVerifiedBy(e.target.value)}}
                 value={idVerifiedBy}
               />
             </FormGroup>
           
             <FormGroup>
             <Label for="dateOfBirth">
             ID Verified Date
             </Label>
             <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
             <input 
             placeholder="Select date" 
             type="date" 
             id="example" 
             class="form-control"
             onChange={(e)=>{ setIDVerifiedDate(e.target.value)}}
             value={idVerifiedDate}
             />
             </div>
             </FormGroup>
             </div>
            }
            
             <FormGroup>
               <Label for="exampleFile">
                 Edit ID Card
               </Label>
               <Input
                 id="exampleFile"
                 name="file"
                 type="file"
                 label="Document"
                 inputProps={{ accept: 'image/*, .pdf' }}
                 onChange={e => handleFileRead(e)}
                 size="small"
                 variant="standard"
               />
             </FormGroup>
                
           
             
            
            
             <div>
             <FormGroup>
               <Label for="exampleSelect">
                 Select 2nd ID Type
               </Label>
               <Input
                 id="exampleSelect"
                 name="select"
                 type="select"
                 onChange={(e)=>{ setIDType2(e.target.value)}}
               >
                 <option>
                   Aadhar Card
                 </option>
                 <option>
                   PAN Card
                 </option>
                 <option>
                   Others
                 </option>
               </Input>
             </FormGroup>
           
             <FormGroup>
               <Label for="zip">
                 2nd ID Number
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="ID Number"
                 type="text"
                 onChange={(e)=>{ setIDNumber2(e.target.value)}}
                 value={idNumber2}
               />
             </FormGroup>
           
             <FormGroup>
               <Label for="zip">
                 2nd ID Issued By Country
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="Country"
                 type="text"
                 onChange={(e)=>{ setIDIssuedCountry2(e.target.value)}}
                 value={idIssuedCountry2}
               />
             </FormGroup>
           
             <FormGroup>
             <Label for="dateOfBirth">
             2nd ID Expiry Date
             </Label>
             <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
             <input 
             placeholder="Select date" 
             type="date" 
             id="example" 
             class="form-control"
             onChange={(e)=>{ setIDExpiryDate2(e.target.value)}}
             value={idExpiryDate2}
             />
             </div>
             </FormGroup>
           
             <FormGroup>
             <Label for="dateOfBirth">
            2nd ID Issue Date
             </Label>
             <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
             <input 
             placeholder="Select date" 
             type="date" 
             id="example" 
             class="form-control"
             onChange={(e)=>{ setIDIssueDate2(e.target.value); console.log(isIdVerified2)}}
             value={idIssueDate2}
             />
             </div>
             </FormGroup>
           
             <FormGroup check>
              
               <Label for="zip"> <Input type="checkbox" 
                onChange={(e)=>{ setIsIDVerified2(e.target.checked)}}
                defaultChecked={isIdVerified2}
               /> 2nd ID is verified </Label>
               <Label check>
                
               </Label>
             </FormGroup>
             
             { 
             isIdVerified2 === true &&
           <div>
             <FormGroup>
               <Label for="zip">
                2nd ID Verified By
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="ID Verified By"
                 type="text"
                 onChange={(e)=>{ setIDVerifiedBy2(e.target.value)}}
                 value={idVerifiedBy2}
               />
             </FormGroup>
           
             <FormGroup>
             <Label for="dateOfBirth">
            2nd ID Verified Date
             </Label>
             <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
             <input t
             placeholder="Select date" 
             type="date" 
             id="example" 
             class="form-control"
             onChange={(e)=>{ setIDVerifiedDate2(e.target.value)}}
             value={idVerifiedDate2}
             />
             </div>
             </FormGroup>
             </div>
          }
           
            
             <FormGroup>
               <Label for="exampleFile">
                 Edit 2nd ID Card
               </Label>
               <Input
                 id="exampleFile"
                 name="file"
                 type="file"
                 label="Document"
                 inputProps={{ accept: 'image/*, .pdf' }}
                 onChange={e => handleFileRead2(e)}
                 size="small"
                 variant="standard"
               />
             </FormGroup>
             </div>
            
           <br/>
           <br/>
           <br/>
          { hashError=== 1 &&
           <div class="alert alert-danger alert-dismissible fade show">
        <strong>Error!</strong> The document {hashError} already exists for other user.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
          }
             <Button style={{backgroundColor: 'orange'}} onClick={(e)=>{
                    const jsonResponse = {
                        firstName,
                        middleName,
                        lastName,
                        dateOfBirth,
                        contactNumber,
                        currentAddr1,
                        currentAddr2,
                        currentAddr3,
                        currentCity,
                        currentState,
                        currentCountry,
                        currentZipCode,
                        idType,
                        idNumber,
                        idIssuedCountry,
                        idExpiryDate,
                        idIssueDate,
                        isIdVerified,
                        idVerifiedBy,
                        idVerifiedDate,
                        IDFile,
                        idType2,
                        idNumber2,
                        idIssuedCountry2,
                        idExpiryDate2,
                        idIssueDate2,
                        isIdVerified2,
                        idVerifiedBy2,
                        idVerifiedDate2,
                        IDFile2
                    }
                    console.log(jsonResponse)
                   var temp= onSubmitClick(resultId, IDFile, IDFile2, JSON.stringify(jsonResponse),e);
                   console.log(temp)
                    //checkHashDetails(IDFile,IDFile2)
             }}>
               Submit
             </Button>
           </Form>
                   </div >
           }
           </div>
          
    );

    

}