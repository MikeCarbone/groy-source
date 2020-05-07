import React from 'react';

const HeaderNav = props => (
    <nav className="ds-header__nav">
      <ul className="ds-header__nav-list">
        {props.children}
      </ul>
    </nav>
);

export default HeaderNav;
