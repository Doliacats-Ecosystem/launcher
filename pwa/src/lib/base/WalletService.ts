import { makeAutoObservable } from "mobx";
import Web3 from 'web3'

let web3 = new Web3('ws://localhost:3000');

export class WalletService {

  
    test: string  = 'hehehe'

    constructor() {
      makeAutoObservable(this);
    }

    connectWallet = async () => {
      if (window.ethereum) {
        console.log('test2')  
        console.log(web3)  

        await window.ethereum.enable();
      // if (web3) {
      //   web3 = new Web3(window.ethereum);
       
      //   const walletAccounts = await web3.eth.getAccounts();         
      //   }
      // }
      
      
    } else {
      throw new Error('MetaMask unawailable')
    }
    }


}
export default WalletService;