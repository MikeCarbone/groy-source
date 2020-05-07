import React from 'react';

import HeaderLink from './header-link';
import HeaderNav from './header-nav';
import Heading from './heading';
import Wrapper from './wrapper';

const Header = props => {
  const HeaderEl = () => (
    <header className="ds-header">
      <Heading size={2}>{props.title}</Heading>
      <HeaderNav>
        <HeaderLink to="#">About</HeaderLink>
        <HeaderLink to="#">Story</HeaderLink>
        <HeaderLink to="#">Team</HeaderLink>
        <HeaderLink to="#">Contact</HeaderLink>
      </HeaderNav>
    </header>
  );

  return props.fullWidth
    ? <HeaderEl />
    : (
        <Wrapper>
          <HeaderEl />
        </Wrapper>
      )
};

export default Header;
