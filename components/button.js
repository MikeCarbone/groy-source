import React from 'react';

const Button = props => {
  const classTitle = 'ds-button';
  const spaceClass = props.space ? `${classTitle}--spaced` : null;
  const className = props.className ? `${classTitle} ${props.className}` : `${classTitle} ${spaceClass}`;
  return (
    <a className={className} href={props.to}>{props.children}</a>
  );
}

export default Button;
