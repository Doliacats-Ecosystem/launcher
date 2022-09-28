import React from 'react';
import { observer } from "mobx-react";
import './App.css';
import { Switch } from 'react-declarative';
import routes from './routes';
import ioc from './lib/ioc';
import Scaffold from './components/Scaffold';


const App = observer(() => {
  return (
    <Scaffold>
      <Switch
        history={ioc.routerService}
        items={routes}
      />
    </Scaffold>
  );
})

export default App as React.FC;
