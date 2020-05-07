import React from 'react';

import BetweenFlex from './between-flex';
import HeaderLink from './header-link';
import HeaderNav from './header-nav';
import Heading from './heading';
import Section from './section';

const Footer = props => (
  <footer className="ds-footer">
    <Section>
      <BetweenFlex>
        <Heading className="ds-footer__title" size={3}>{props.title}</Heading>
        <HeaderNav>
          <HeaderLink className="ds-footer__link" to="#">About</HeaderLink>
          <HeaderLink className="ds-footer__link" to="#">Story</HeaderLink>
          <HeaderLink className="ds-footer__link" to="#">Team</HeaderLink>
          <HeaderLink className="ds-footer__link" to="#">Contact</HeaderLink>
        </HeaderNav>
      </BetweenFlex>
    </Section>
  </footer>
);

export default Footer;
