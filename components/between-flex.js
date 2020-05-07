import React from 'react';

const BetweenFlex = props => (
  <div className={`ds-flex--between ${props.className || ''}`}>{props.children}</div>
);

export default BetweenFlex;
