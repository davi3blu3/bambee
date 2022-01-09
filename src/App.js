import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from 'react';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/todo">

        </Route>
        <Route path="*">
          
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
 
export default App;

export default App;
