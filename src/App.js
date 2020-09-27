import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importar paginas
import Home from './pages/Home';
import Programming from './pages/Programming';
import Mobile from './pages/Mobile';
import Cybersecurity from './pages/Cybersecurity';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route exact path="/dev" component={() => <Programming />}></Route>
        <Route exact path="/mobile" component={() => <Mobile />}></Route>
        <Route exact path="/ciber" component={() => <Cybersecurity />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
