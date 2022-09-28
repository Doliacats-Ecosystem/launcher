import "./config"
import { inject } from 'react-declarative';

import TYPES from "./types";

import RouterService from "./base/RouterService";
import SessionService from "./base/SessionService";
import PlayService from "./base/PlayService";
import WalletService from "./base/WalletService";



export const ioc = {
    routerService: inject<RouterService>(TYPES.routerService),
    sessionService: inject<SessionService>(TYPES.sessionService),
    playService: inject<PlayService>(TYPES.playService), 
    walletService: inject<WalletService>(TYPES.walletService), 

};

(window as any).ioc = ioc;

export default ioc;
