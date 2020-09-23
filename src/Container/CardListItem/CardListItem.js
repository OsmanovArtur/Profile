import React from "react";
import classes from "../CardListItem/CardListItem.module.css";
import profile from "../../Components/Constant/Constant";

import { Link, Route, withRouter } from "react-router-dom";

const CardListItem = ({ infoProfile, match }) => {
  const { info } = profile;

  const fullFamilly = [...info, ...infoProfile];

  const renderInfo = fullFamilly.find((item) => {
    debugger;
    return item.id === match.params.id ? item : false;
  });

  const backToHomePage = () => {
    return <Route path="/"></Route>;
  };

  return (
    <div className={classes.CardListItem}>
      {renderInfo === undefined ? (
        <h1 className={classes.Erorr}>User not found</h1>
      ) : (
        <div className={classes.Content}>
          <a href={renderInfo.url}>
            {" "}
            <h1 className={classes.HeaderInfo}>
              {renderInfo.name + " " + renderInfo.sername}
            </h1>
          </a>

          <h3 className={classes.DeskriptionInfo}>{renderInfo.deskription}</h3>
          <div className={classes.ImageContainer}>
            <img
              src={renderInfo.href}
              alt={renderInfo.alt}
              className={classes.Image}
            />
          </div>

          <div className={classes.ButtonArea}>
            <Link to="/">
              {" "}
              <button
                onClick={() => backToHomePage()}
                className={classes.Button}
              >
                {" "}
                Вернуться к списку{" "}
              </button>
            </Link>
          </div>
        </div>
      )}
      <Link to="/NewFamilyMember">
        <div className={classes.BtnArea}>
          <button className={classes.BtnNewFamilyMember}>New</button>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(CardListItem);
