import React from "react";
import classes from "../CardList/CardList.module.css";
import profile from "../../Components/Constant/Constant";
import { Link } from "react-router-dom";

const CardList = () => {
  const { info } = profile;
  return info.map((item, index) => {
    return (
      <div className={classes.CardList}>
        <div className={classes.Container}>
          <Link
            to={`/CardListItem/${item.id}`}
            className={classes.Link}
            key={index}
          >
            <h3 className={classes.TextInfo}>
              {item.name} {item.sername}
            </h3>
          </Link>
        </div>
      </div>
    );
  });
};

export default CardList;
