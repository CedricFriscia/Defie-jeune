import Card from "../../Components/Card/Card";
import React from "react";
import Nav from "../../Components/Nav/Nav";

// Import CSS
import "./styles.scss";

const Jeune = () => {
  return (
    <div className="jeune">
      <Nav />

      <div className="card__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Jeune;
