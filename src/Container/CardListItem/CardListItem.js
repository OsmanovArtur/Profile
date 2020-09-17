import React from "react";
import classes from "../CardListItem/CardListItem.module.css";
import profile from "../../Components/Constant/Constant";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const CardListItem = (props) => {
  const info = profile.info;

  const renderInfo = info.find((item) => {
    if (item.id === props.match.params.id) {
      return item;
    }
    return false;
  });

  return (
    <div className={classes.CardListItem}>
      <div className={classes.content}>
        <a href={renderInfo.href}>
          <h1 className={classes.headerInfo}>
            {renderInfo.name + " " + renderInfo.sername}
          </h1>
        </a>

        <hr className={classes.horisontLine} />
        <h3 className={classes.deskriptionInfo}>{renderInfo.deskription}</h3>
        <div className={classes.imageContainer}>
          <img src={renderInfo.url} alt="" />
        </div>

        <Link to="/button/">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default CardListItem;
