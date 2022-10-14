import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import UserDetails from './utils/UserDetails.json'
import Web3 from 'web3';
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
        this.state = { buffer: null, userDtls: null, account: '', contract:null, userImageName: null };
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

    getBLength = (event) => {
        event.preventDefault();
        const l = this.state.contract.getBlockLength().call();
        window.alert(l);
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
    //url: https://ipfs.infura.io/ipfs/hash

    async GetUserDetails()
    {
        const userDtls =  await this.state.contract.methods.getUser().call(); 
        this.setState({userDtls});
    }
    onSubmit = (event) => {
        event.preventDefault();
        //const userDtls = '/images/' + this.state.userImageName;
        // console.log('Submittig the form..', this.state.buffer);
        //console.log('Submittig the form..', userDtls);
        this.state.contract.methods.addUser(1232325, "{fname:'zyx', lname: 'auv'}").send({from: this.state.account}).then((r) =>{
            this.GetUserDetails();
        });
        //console.log('Submittig the form..', this.state.buffer);
        // ipfs.add(this.state.buffer, (error, result) => {

        //     if (!error) {
        //         console.log('Ipfs result:', result);
        //         const userImageHash = result[0].hash; 
        //         this.setState({ userImageHash });
        //     }
        //     else {
        //         console.error(error);
        //         return;
        //     }
        // });
    }
    // console.log("Contract" + web3Api.contract);
    render() {
        return (
            <div className="card text-center">
                <div className="card-header">Identity Management</div>
                <div className="card-body">
                {this.state.userDtls}
                    {/* <img src={`https://ipfs.infura.io/ipfs/${this.state.userDtls}`}></img> */}
                    {/* <img src={this.state.userDtls} className='App-logo' alt="Logo"></img> */}
                    <form onSubmit={this.onSubmit}>
                        <input type="file" onChange={this.captureFile} />
                        <input type="submit"></input>
                        {/* <button onClick={this.getBLength}>Get Block Length</button> */}
                    </form>
                   
                </div>
            </div>

        );
    }
}

export default App;