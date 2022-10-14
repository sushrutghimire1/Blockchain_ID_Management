import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import UserDetails from './utils/UserDetails.json'
import Web3 from 'web3';

import { Header } from './Header'
import { NewIdentity } from './NewIdentity'
import { EditIdentity } from './EditIdentity'
import { SearchIdentity } from './SearchIdentity'
// import { create } from 'ipfs-http-client'
// //const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' })
// const ipfs = create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })
class App extends Component {

    async componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockChainData();
    }

    //Get the account
    //Get the netwrok
    //Get the Smart Contract    

    async loadBlockChainData() {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId();
        const netwrokData = UserDetails.networks[networkId];
        console.log(netwrokData)
        if (netwrokData) {
        const abi = UserDetails.abi;
        const address = netwrokData.address;
        const contract = new web3.eth.Contract(abi, address);
        this.setState({contract});
        const userDtls =  await contract.methods.getUser().call(); 
        this.setState({userDtls});
        
        }
        else {
            window.alert("Smart Contract not delpoyed to detected network");
        }
    }
    constructor(props) {
        super(props);
        this.state = { 
            buffer: null, 
            userDtls: null, 
            account: '', 
            contract:null, 
            userImageName: null,
            tabSelected : 0,
            blockData: {},
            defaultData: null
        };
    }

    changetabSelected(value){
        this.setState(
            {
                ...this.state,
                tabSelected : value

            }
        )
     }

     changeDefaultData(value){
        this.setState(
            {
              ...this.state,
                defaultData : value,
                tabSelected : 3

            }
        )
        console.log(this.state.defaultData)
     }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable();
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }
        else
            console.log("Please Install MetaMask!!")
    }

    
    captureFile = (event) => {
        event.preventDefault();
        const userImageName = event.target.files[0].name;
        this.setState({userImageName})
        // const reader = new window.FileReader();
        // reader.readAsArrayBuffer(userDetails);
        // reader.onloadend = () => {
        //     this.setState({ buffer: Buffer(reader.result) })
        //     // console.log(this.state.buffer);
        // }
    }

    // }
    // captureFile = (event) => {
    //     event.preventDefault();
    //     const userImageName = event.target.files[0].name;
    //     this.setState({userImageName})
    //     // const reader = new window.FileReader();
    //     // reader.readAsArrayBuffer(userDetails);
    //     // reader.onloadend = () => {
    //     //     this.setState({ buffer: Buffer(reader.result) })
    //     //     // console.log(/this.state.buffer);
    //     // }
    // }
    //url: https://ipfs.infura.io/ipfs/hash

    async GetUserDetails()
    {
        const userDtls =  await this.state.contract.methods.getUser().call(); 
        this.setState({userDtls});
    }
    onSubmit = (id, hash1, hash2, json, event) => {
        event.preventDefault();
        const d = new Date();
        id = id + '_' + d.getDate() + '_'+ d.getMonth()+ '_' + d.getFullYear() + '_' + d.getTime();
    

        //const userDtls = '/images/' + this.state.userImageName;
        // console.log('Submittig the form..', this.state.buffer);
        //console.log('Submittig the form..', userDtls);
        this.state.contract.methods.addUser(id, hash1, hash2, json).send({from: this.state.account}).then((r) =>{
            this.setState(
                {
                    ...this.state,
                    blockData : this.GetUserDetails()
    
                }
            )
        });
      }

      onUpdate = (id, hash1, hash2, json, event) => {
        event.preventDefault();
        
        
    

        //const userDtls = '/images/' + this.state.userImageName;
        // console.log('Submittig the form..', this.state.buffer);
        //console.log('Submittig the form..', userDtls);
        this.state.contract.methods.updateUser(id, hash1, hash2, json).send({from: this.state.account}).then((r) =>{
            this.setState(
                {
                    ...this.state,
                    blockData : this.GetUserDetails()
    
                }
            )
        });
      }

       async validateImageHash(hash1, hash2){
         const val = await this.state.contract.methods.getUserByHashKey(hash1, hash2).call();
         return val;
    }
    // console.log("Contract" + web3Api.contract);
    render() {
        return (
            
            <div>
                {console.log(this.state.userDtls)}
            <Header changeTabSelected={this.changetabSelected.bind(this)}></Header>
            <NewIdentity  newIdentity={this.state.tabSelected} onSubmitClick={this.onSubmit.bind(this)} validateHashes={this.validateImageHash.bind(this)}></NewIdentity>
            <EditIdentity  defaultData={this.state.defaultData} newIdentity={this.state.tabSelected} onSubmitClick={this.onUpdate.bind(this)} validateHashes={this.validateImageHash.bind(this)}></EditIdentity>
            <SearchIdentity setDefaultData={this.changeDefaultData.bind(this)} changeTabSelected={this.changetabSelected.bind(this)} newIdentity={this.state.tabSelected} blockData={this.state.userDtls}></SearchIdentity>
            </div>
        );
    }
}

export default App;