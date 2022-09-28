

import { ISwitchItem } from 'react-declarative';
import MainPage from './pages/MainPage/MainPage';
import PlayPage from './pages/PlayPage';

export const routes: ISwitchItem[] = [
    {
      path: '/',
      element: MainPage,
    },
    {
      path: '/play',
      element: PlayPage,
    },
  ];
  
  export default routes;