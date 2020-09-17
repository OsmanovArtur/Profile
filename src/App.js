import React from "react";
import "./App.css";
import CardList from "./Container/CardList/CardList";
import { Route, Switch } from "react-router-dom";
import CardListItem from "./Container/CardListItem/CardListItem";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/CardListItem/:id" component={CardListItem}></Route>
        <Route path="/" component={CardList}></Route>
        <Route path="/button/" component={Button} />
      </Switch>
    </div>
  );
}

export default App;
