import React from 'react';
import { footer } from '../../data/Data';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h1>
      <ul>
        {footer.map((footer) => (
          <li>
            <h4>{footer.title}</h4>
            <a href="#">{footer.service1}</a>
            <a href="#">{footer.service2}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
