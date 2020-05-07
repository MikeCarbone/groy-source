import React from 'react';

const SecondaryButton = props => {
  const classTitle = 'ds-button-two';
  const spaceClass = props.space ? `${classTitle}--spaced` : null;
  const className = props.className ? `${classTitle} ${props.className}` : `${classTitle} ${spaceClass}`;
  return (
    <a className={className} href={props.to}>{props.children}</a>
  );
}

export default SecondaryButton;
