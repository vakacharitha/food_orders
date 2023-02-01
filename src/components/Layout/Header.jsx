import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/food_image.webp";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
