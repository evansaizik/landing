import React from "react";
import Card from "./UI/Card";
import classes from './Subheader.module.css';

const Subheader = () => {
  return (
    <Card className={classes.subheader}>
      <h2>what we offer?</h2>
      <section className={classes.container}>
        <div>
          <img src="./assets/public-transport.png" alt="transport" />
          <h4>Transport</h4>
          <p>"Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div>
          <img src="./assets/support.png" alt="transport" />
          <h4>Guided Tour</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </div>
        <div>
          <img src="./assets/wine.png" alt="transport" />
          <h4>Wine Tasting</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </section>
    </Card>
  )
};

export default Subheader;