import React from "react";
import classes from "../CardListItem/CardListItem.module.css";
import profile from "../../Components/Constant/Constant";

import { Link, Route } from "react-router-dom";

const CardListItem = ({ match }) => {
  const { info } = profile;

  const renderInfo = info.find((item) => {
    return item.id === match.params.id ? item : false;
  });
  const backToHomePage = () => {
    return <Route path="/"></Route>;
  };

  return (
    <div className={classes.CardListItem}>
      {renderInfo === undefined ? (
        <h1 className={classes.erorr}>User not found</h1>
      ) : (
        <div className={classes.content}>
          <a href={renderInfo.href}>
            {" "}
            <h1 className={classes.headerInfo}>
              {renderInfo.name + " " + renderInfo.sername}
            </h1>
          </a>

          <h3 className={classes.deskriptionInfo}>{renderInfo.deskription}</h3>
          <div className={classes.imageContainer}>
            <img
              src={renderInfo.url}
              alt={renderInfo.alt}
              className={classes.image}
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
    </div>
  );
};

export default CardListItem;
