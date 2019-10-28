import React from 'react'
import Colors from './components/Colors'
import WebColors from './components/WebColors'
import WikiColors from './components/WikiColors'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    return (
    <Router>
        <nav>      
            <Link to="/">Websafe</Link>            
            <Link to="/local">Crayola</Link>
            <Link to="/fetch">Wiki Colors</Link>                      
        </nav>
        <main>
         {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/local">
              <Colors />
            </Route>
            <Route path="/fetch">
              <WikiColors />
            </Route>
            <Route path="/">
              <WebColors />
            </Route>
        </Switch>
        </main>
    </Router>
    )
}   

export default App;
