import React from 'react';

const Figure = props => {
  const classTitle = 'ds-fig';
  const className = props.className ? `${classTitle} ${props.className}` : classTitle;
  const cap = props.withCaption ? <figcaption className="ds-fig__caption">{props.caption}</figcaption> : null;
  const imgClass = props.small ? `${classTitle}__img--small` : null;
  return (
    <figure className={className}>
      <img className={`ds-fig__img ${imgClass}`} src={props.src} alt={props.caption}></img>
      {cap}
    </figure>
  )
}

export default Figure;
