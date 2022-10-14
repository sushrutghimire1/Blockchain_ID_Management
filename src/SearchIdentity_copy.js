import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';


export function SearchIdentity({newIdentity, blockData}){
    return(
        <div>
            {console.log(blockData)}
        {
            newIdentity===1 &&
            <div style={{marginTop: '30px'}}>
             <input type="text" placeholder="Search.." name="search"/>
                <button type="submit">Submit</button>
                <select name="types" id="types" style={{marginLeft:'9px'}}>
              <option value="firstName">First Name</option>
              <option value="middleName">Middle Name</option>
              <option value="lastName">Last Name</option>
              <option value="id">ID Number</option>
              <option value="Date Of Birth">Date Of Birth</option>
            </select>
          
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
                  <tr>
                      <td>Sushrut</td>
                      <td></td>
                      <td>Ghimire</td>
                      <td>1231829</td>
                      <td>23/10/1999</td>
                      <td><button>View Details</button></td>
                  </tr>
                  <tr class="active-row">
                      <td>Elon</td>
                      <td></td>
                      <td>Musk</td>
                      <td>2839712</td>
                      <td>02/02/1992</td>
                      <button>View Details</button>
                  </tr>
                
              </tbody>
          </table>
            
            </div>
          }
          </div>
    );
}