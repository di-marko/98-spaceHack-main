import React from 'react';
import './Header.scss';

const planet = require('../../images/planet.png');
const gun = require('../../images/gun.png');
const ship = require('../../images/ship.png');
const astronaut = require('../../images/astronaut.png');

const Header = () => {
  return (
    <header>
      <section className="big-box-text">Far away</section>
      <section className="planet-box">
        <img src={planet} alt="Planet" />
      </section>
      <section className="astro-box">
        <img src={astronaut} alt="Astronaut" />
      </section>
      <section className="gun-box">
        <img src={gun} alt="Gun" />
      </section>
      <section className="ship-box">
        <img src={ship} alt="Ship" />
      </section>
    </header>
  );
};

export default Header;
