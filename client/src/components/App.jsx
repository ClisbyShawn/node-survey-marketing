import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, actions)(App);
