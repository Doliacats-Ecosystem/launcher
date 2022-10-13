import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getConfig from "./config.js";
import * as nearAPI from "near-api-js";
import run from './utils/run';

// Initializing contract
async function initContract() {
  const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

  // Initializing connection to the NEAR TestNet
  const near = await nearAPI.connect({
    deps: {
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    },
    ...nearConfig,
  });

  // Needed to access wallet
  const walletConnection = new nearAPI.WalletConnection(near);

  // Load in account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }

  // Initializing our contract APIs by contract name and configuration
  const contract = await new nearAPI.Contract(walletConnection.account(), nearConfig.contractName, {
    sender: walletConnection.getAccountId(),
  });

  return { contract, currentUser, nearConfig, walletConnection };
}

const wrappedApp = (
  <React.StrictMode >
    <App />
  </React.StrictMode >
);

(window as any).run = run;

ReactDOM.render(wrappedApp, document.getElementById('root'));

