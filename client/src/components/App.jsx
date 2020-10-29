import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/surveys/new" component={SurveyNew} />
        <Route path="/surveys" component={Dashboard} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
};

export default App;
