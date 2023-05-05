import React from 'react';
import './Main.scss';

const space = require('../../images/space.png');
const station = require('../../images/station.png');
const constellation = require('../../images/constellation.png');

const Main = () => {
  return (
    <main>
      <section className="satellite-box box">
        <img src={space} alt="planets" />
      </section>
      <section className="planets-box box">
        <img src={station} alt="planets" />
      </section>
      <section className="medium-text-box box">
        <h1>Far far away</h1>
      </section>
      <section className="constellation-box box">
        <img src={constellation} alt="Constellation" />
      </section>
    </main>
  );
};

export default Main;
