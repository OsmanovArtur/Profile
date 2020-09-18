import React from "react";
import "./App.css";
import CardList from "./Container/CardList/CardList";
import { Route, Switch, Redirect } from "react-router-dom";
import CardListItem from "./Container/CardListItem/CardListItem";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/CardListItem/:id" component={CardListItem}></Route>
        <Route path="/" exact component={CardList}></Route>

        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
