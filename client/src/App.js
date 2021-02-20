import logo from './logo.svg';
import React from "react";
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/demo/demo.css";

import Home from "./views/Home/index.js"
import LoginPage from "./views/Login";
class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    user: "user"
  }

  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
              { /* Each Route below shows a different component depending on the exact path in the URL  */ }
              <Route exact path='/' render={() =>
                  (<Home appState={this.state}/>)}
              />
            <Route
                path="/login"
                render={(props) => <LoginPage {...props} />}
            />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
