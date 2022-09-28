
import { provide } from 'react-declarative';
import TYPES from "./types";

import PlayService from "./base/PlayService";
import RouterService from "./base/RouterService";
import SessionService from "./base/SessionService";
import WalletService from './base/WalletService';

provide(TYPES.routerService, () => new RouterService());
provide(TYPES.sessionService, () => new SessionService());
provide(TYPES.playService, () => new PlayService());
provide(TYPES.walletService, () => new WalletService());




