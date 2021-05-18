import React, {lazy, Suspense} from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { login } from "./constants/Routes";


const Login = lazy( ()=> import('./pages/Login'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>} >
        <Switch>
          <Route path = {login}>
            <Login />
          </Route>
        </Switch>
      </Suspense>
    </Router>
    
  );
}

export default App;

