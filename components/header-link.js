import React from 'react';

import HeaderListItem from './header-list-item';

const HeaderLink = props => (
  <HeaderListItem>
    <a href={props.to} className={`ds-header__nav-link ${props.className || ''}`}>{props.children}</a>
  </HeaderListItem>
);

export default HeaderLink;
