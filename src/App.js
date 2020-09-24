import React from "react";
import classes from "./App.module.css";
import CardList from "./Container/CardList/CardList";
import { Route, Switch, Redirect } from "react-router-dom";
import CardListItem from "./Container/CardListItem/CardListItem";
import NewFamilyMember from "./Components/NewFamilyMember/ NewFamilyMember";
import { Component } from "react";

class App extends Component {
  state = {
    name: "",
    sername: "",
    info: [],
    deskription: "",
    href: "",
    url: "",
    isValid: false,
  };
  onChangeName = ({ target }) => {
    let name = target.value;
    this.setState({ name });
    if (
      name.trim() !== "" &&
      this.state.sername.trim() !== "" &&
      this.state.deskription.trim() !== ""
    ) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  onChangeSername = ({ target }) => {
    let sername = target.value;
    this.setState({ sername });
    if (
      sername.trim() !== "" &&
      this.state.name.trim() !== "" &&
      this.state.deskription.trim() !== ""
    ) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };
  onChangeDeskription = ({ target }) => {
    const deskription = target.value;

    this.setState({ deskription });
    if (
      deskription.trim() !== "" &&
      this.state.name.trim() !== "" &&
      this.state.sername.trim() !== ""
    ) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };
  pasteHref = ({ target }) => {
    const href = target.value;
    this.setState({
      href,
    });
  };
  pasteUrl = ({ target }) => {
    const url = target.value;
    this.setState({
      url,
    });
  };
  onclickBtn = (history) => {
    history.push("/");
    const newArr = [...this.state.info];
    newArr.push({
      name: this.state.name,
      sername: this.state.sername,
      id: Math.random() + "",
      deskription: this.state.deskription,
      url: this.state.url,
      href: this.state.href,
      alt: "",
    });
    this.setState({
      info: newArr,
      isValid: false,
      name: "",
      sername: "",
      deskription: "",
      href: "",
      url: "",
    });
  };

  onClickBack = () => {
    this.setState({
      name: "",
      sername: "",
      info: [],
      deskription: "",
      href: "",
      url: "",
      isValid: false,
    });
  };
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route
            path="/CardListItem/:id"
            render={() => <CardListItem infoProfile={this.state.info} />}
          ></Route>
          <Route
            exact
            path="/"
            render={() => <CardList infoProfile={this.state.info} />}
          ></Route>

          <Route
            path="/NewFamilyMember"
            render={(props) => (
              <NewFamilyMember
                onChangeName={this.onChangeName}
                onChangeSername={this.onChangeSername}
                onChangeDeskription={this.onChangeDeskription}
                pasteHref={this.pasteHref}
                pasteUrl={this.pasteUrl}
                isValid={this.state.isValid}
                onclickBtn={() => this.onclickBtn(props.history)}
                onClickBack={this.onClickBack}
              />
            )}
          />

          <Redirect to={"/"} />
        </Switch>
      </div>
    );
  }
}

export default App;
