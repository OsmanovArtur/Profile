import React from "react";
import classes from "../CardList/CardList.module.css";
import profile from "../../Components/Constant/Constant";
import { Link } from "react-router-dom";

const CardList = ({ infoProfile }) => {
  const { info } = profile;
  const fullFamilly = [...info, ...infoProfile];

  return (
    <>
      <div className={classes.Major}>
        {fullFamilly.map((item, index) => {
          return (
            <div className={classes.CardList} key={index}>
              <div className={classes.Container}>
                <Link to={`/CardListItem/${item.id}`} className={classes.Link}>
                  <h3 className={classes.TextInfo}>
                    {item.name} {item.sername}
                  </h3>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/NewFamilyMember">
        <button className={classes.Btn}>Добавить</button>
      </Link>
    </>
  );
};

export default CardList;
