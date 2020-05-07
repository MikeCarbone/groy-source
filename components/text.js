import React from 'react';

const Text = props => (
  <p className={`ds-text ${props.className || ''}`}>{props.children}</p>
);

export default Text;
