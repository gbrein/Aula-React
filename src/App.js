import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './views/Inicio'
import Header from './views/Header'
import Perfil from './views/Perfil';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/perfil" component={Perfil} />
      </Switch>
    </Router>
  );
}

export default App;
