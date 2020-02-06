import React from "react";

import classes from "./styles.module.css";

const Todo = props => (
  <>
    <p className={props.isToogled ? classes.isToogled : null}>
      {props.id}. {props.description}
    </p>
    <label className={classes.toggle}>
      <input className={classes.toggle__input} type="checkbox" onClick={props.toogle} />
      <span className={classes.toggle__label}>
        <span className={classes.toggle__text}></span>
      </span>
    </label>
  </>
);

export default Todo;
