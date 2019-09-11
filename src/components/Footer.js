import React from 'react';

import style from './Footer.module.css';

const LINKS = [
  {
    description: 'LinkedIn',
    font: 'fab fa-linkedin-in',
    href: 'https://www.linkedin.com/in/carloslsilva/',
    className: style.linkedin
  },
  {
    description: 'GitHub',
    font: 'fab fa-github',
    href: 'https://github.com/carloslsilva/',
    className: style.github
  },
  {
    description: 'freeCodeCamp',
    font: 'fab fa-free-code-camp',
    href: 'https://www.freecodecamp.org/carloslsilva',
    className: style.freecodecamp
  },
  {
    description: 'Twitter',
    font: 'fab fa-twitter',
    href: 'https://twitter.com/carloslsilva?lang=en',
    className: style.twitter
  },
  {
    description: 'YouTube',
    font: 'fab fa-youtube',
    href: 'https://www.youtube.com/channel/UCD0Spg-lYsdrP_nE7Qfca3w',
    className: style.youtube
  }
];

const Links = () => {
  return (
    <ul className={style.links}>
      {LINKS.map(e => (
        <li key={e.description}>
          <a className={e.className} href={e.href} target='_blank' rel='noopener noreferrer'>
            <i className={e.font} />
          </a>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.description}>by Carlos Silva</div>
      <Links />
    </footer>
  );
};

export default Footer;
