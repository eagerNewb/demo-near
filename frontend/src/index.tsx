import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import getConfig from './config.js';
// import {Near} from './components/connector/connector';
import * as nearAPI from "near-api-js";


// Initializing contract
async function initContract() {
  // get network configuration values from config.js
  // based on the network ID we pass to getConfig()
  // const nearConfig = getConfig(process.env.NEAR_ENV || 'testnet');
  const nearConfig = {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    contractName: 'dev-1643474469513-99630285886186',
    walletUrl: 'https://wallet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    headers: {}
  };

  // Initializing connection to the NEAR testnet
  const near = await nearAPI.connect(nearConfig);

  // Initialize wallet connection
  const walletConnection = new nearAPI.WalletConnection(near,"klk");

  // Load in user's account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      // Gets the accountId as a string
      accountId: walletConnection.getAccountId(),
      // Gets the user's token balance
      balance: (await walletConnection.account().state()).amount,
    };
  }
  // Initializing our contract APIs by contract name and configuration
  const contract = new nearAPI.Contract(
    // User's accountId as a string
    walletConnection.account(),
    // accountId of the contract we will be loading
    // NOTE: All contracts on NEAR are deployed to an account and
    // accounts can only have one contract deployed to them.
    nearConfig.contractName,
    {
      // View methods are read-only – they don't modify the state, but usually return some value
      viewMethods: ['getRooms'],
      // Change methods can modify the state, but you don't receive the returned value when called
      changeMethods: ['initRoom'],
      // Sender is the account ID to initialize transactions.
      // getAccountId() will return empty string if user is still unauthorized
      // sender: walletConnection.getAccountId(),
    }
  );

  return { contract, currentUser, nearConfig, walletConnection};
}

initContract().then(
  ({ contract, currentUser, nearConfig, walletConnection }) => {
      ReactDOM.render(
        <React.StrictMode>
          <App 
            contract={contract}
            currentUser={currentUser}
            nearConfig={nearConfig}
            walletConnection={walletConnection}  
          />
        </React.StrictMode>,
        document.getElementById('root')
      );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
