import React from 'react';

import Heading from './heading';
import Wrapper from './wrapper';

const Header = props => {
  const HeaderEl = () => (
    <header className="ds-header">
      <Heading size={2}>{props.title}</Heading>
      {props.children}
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
