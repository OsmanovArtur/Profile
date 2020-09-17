import React from "react";
import classes from "../CardList/CardList.module.css";
import profile from "../../Components/Constant/Constant";
import { Link } from "react-router-dom";

const CardList = () => {
  const info = profile.info;
  return info.map((item) => {
    return (
      <div className={classes.CardList}>
        <div className={classes.container}>
          <Link to={"/CardListItem/" + item.id} className={classes.Link}>
            <h3 className={classes.textInfo}>
              {item.name} {item.sername}
            </h3>
          </Link>
        </div>
      </div>
    );
  });
};

export default CardList;
