import React from "react";
import Subheader from "./Subheader";
import classes from './Header.module.css';
import Footer from "./Footer";
import Card from "./UI/Card";


const Header = () => {
  return(
    <Card>
      <Card className={classes.header}>
        <h1>Naturely</h1>
        <h2>Visit Exquisite Places Around The World</h2>
        <button type="submit">I want to visit</button>
      </Card>
      <Subheader />
      <Footer />
    </Card>
  )
};

export default Header;