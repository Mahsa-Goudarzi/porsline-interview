import React from "react";

import classes from "./Key.module.css";

export default function Key({ value }) {
  return <div className={classes.key}>{value}</div>;
}
