
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Options } from './Options';
import Sidebar from './components/Sidebar';
import Sidemenu from './components/Sidemenu';

const workflow = () => <div>You're on workflow tab</div>;
const timeline = () => <div>You're on the timeline Tab</div>;
const packs = () => <div>You're on the packs Tab</div>;
const designs = () => <div>You're on the design Tab</div>;
const trackers = () => <div>You're on the trackers Tab</div>;


function App() {
  
  return (
      <React.Fragment>
      <Router>
        <Sidebar />
        
        <Switch>
          <Route path="/workflow" component={workflow} />
          <Route path="/timelines" component={timeline} />
          <Route path="/packs" component={packs} />
          <Route path="/options" component={Options} />
          <Route path="/designs" component={designs} />
          <Route path="/trackers" component={trackers} />
        </Switch>

        <Sidemenu />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/nomatch"component={NoMatch} />
        </Switch>
      </Router>
      </React.Fragment>
  );
}

export default App;
