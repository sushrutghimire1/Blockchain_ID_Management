import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React, { useState } from 'react';
import { sha256 } from 'js-sha256';



export function NewIdentity({newIdentity, onSubmitClick, validateHashes}){

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
    const [idType, setIDType] = useState('Aadhar Card');
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

    const [hashError, setHashError] = useState(0);

    async function handleFileRead(event) {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        var hashOfFile = sha256(base64)
        localStorage.setItem(hashOfFile,base64)
        setIDFile(hashOfFile)
      }

      async function handleFileRead2(event) {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        var hashOfFile = sha256(base64)
        localStorage.setItem(hashOfFile,base64)
        setIDFile2(hashOfFile)
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

    async function checkHashDetails()
      {
        var x;
         if(IDFile2 === '' && IDFile === '') {
          x= await validateHashes('blank','blank');
       }
          else if(IDFile === '') {
           x= await validateHashes('blank',IDFile2);
          }
         else if(IDFile2 === '') {
           x=  await validateHashes(IDFile,'blank');
          }
          else{
           x= await validateHashes(IDFile,IDFile2);
          }

          if(x === true)
          {
            setHashError(x);
          }

          return x;
        //  if(x.hash===IDFile){
        //   setHashError(1)
        //  } 
        //  if(x.hash2 === IDFile2){
        //   setHashError(2)
        //  }

      }
 

    return(
        <div>
        { newIdentity===0 &&
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
                 ID Number
               </Label>
               <Input
                 id="zip"
                 name="zip"
                 placeholder="ID Number"
                 type="text"
                 onChange={(e)=>{ setIDNumber(e.target.value)}}
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
             />
             </div>
             </FormGroup>
           
             <FormGroup check>
              
               <Label for="zip"> <Input type="checkbox" 
                onChange={(e)=>{ setIsIDVerified(e.target.checked)}}
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
             />
             </div>
             </FormGroup>
           </div>
           }
            
             <FormGroup>
               <Label for="exampleFile">
                 Upload a scanned copy of ID Card
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
                
            {!hasSecondId &&
             <button type="button" class="btn btn-light" style={{align:'left'}}
             onClick={()=>{ sethasSecondId(true)}}>
            Add Another ID</button>
            }
            
            { hasSecondId &&
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
             onChange={(e)=>{ setIDIssueDate2(e.target.value)}}
             />
             </div>
             </FormGroup>
           
             <FormGroup check>
              
               <Label for="zip"> <Input type="checkbox" 
                onChange={(e)=>{ setIsIDVerified2(e.target.checked)}}
               /> 2nd ID is verified </Label>
               <Label check>
                
               </Label>
             </FormGroup>
           { isIdVerified2 === true &&
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
             />
             </div>
             </FormGroup>
             </div>
          }
            
             <FormGroup>
               <Label for="exampleFile">
                 Upload a scanned copy of 2nd ID Card
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
            }
           <br/>
           <br/>
           <br/>

           { hashError=== true &&
           <div class="alert alert-danger alert-dismissible fade show">
            <strong>Error!</strong> The document already exists for other user.
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
                    
                    checkHashDetails().then( (x)=>{
                      console.log(x);
                    if(x === false)
                    {
                      onSubmitClick(Math.floor(Math.random()*90000) + 10000, IDFile, IDFile2, JSON.stringify(jsonResponse),e)
                   }
                  })
             }}>
               Submit
             </Button>
           </Form>
                   </div >
           }
           </div>
          
    );

    

}