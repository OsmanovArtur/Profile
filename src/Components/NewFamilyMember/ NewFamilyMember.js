import React from "react";
import classes from "../NewFamilyMember/NewFamilyMember.module.css";
import { Link } from "react-router-dom";

const NewFamilyMember = ({
  onChangeDeskription,
  onclickBtn,
  isValid,
  onChangeName,
  onChangeSername,
  pasteHref,
  pasteUrl,
}) => {
  return (
    <div className={classes.Container}>
      <h1 className={classes.Header1}>Создайте нового члена семьи</h1>
      <h3 className={classes.Header3}>Имя</h3>
      <input className={classes.Input} onChange={onChangeName}></input>

      <h3 className={classes.Header3}>Фамилия</h3>
      <input className={classes.Input} onChange={onChangeSername}></input>

      <h3 className={classes.Header3}>Изображение</h3>
      <input className={classes.Input} onChange={pasteHref}></input>
      <h3 className={classes.Header3}>Социальные сети</h3>
      <input className={classes.Input} onChange={pasteUrl}></input>
      <h3 className={classes.Header3}>Описание</h3>
      <textarea
        className={classes.TextAreaDeskription}
        onChange={onChangeDeskription}
      ></textarea>
      <div className={classes.ButtonArea}>
        <button
          onClick={onclickBtn}
          disabled={!isValid}
          className={classes.Button}
        >
          Добавить
        </button>
        <Link to="/">
          <button className={classes.Button}>Назад</button>
        </Link>
      </div>
    </div>
  );
};

export default NewFamilyMember;
