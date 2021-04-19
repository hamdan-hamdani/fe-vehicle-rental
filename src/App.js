import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Reset from "./pages/reset/Reset";

import "./App.css";
import Home from "./pages/home/Home";
import DetailCategory from "./pages/detailCategory/DetailCategory";

class App extends Component {
  state = {
    name: "Hello Hamdan",
    username: "username",
    password: "password",
  };

  handleState = () => {
    this.setState({
      name: "Bapak Ganteng",
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/reset" exact>
            <Reset />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/" exact>
            <DetailCategory />
          </Route>
          {/* <Route path="/" exact>
            <Login className="input" username={this.state.username} password={this.state.password} />
          </Route> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
