import React from 'react';
import './Featured.scss';

const astronaut = require('../../images/littleGuy.jpg');

const Featured = () => {
  return (
    <section className="image-container">
      <img className="little-guy-box" src={astronaut} alt="Astronaut" />
    </section>
  );
};

export default Featured;
