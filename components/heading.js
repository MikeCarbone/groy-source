import React from 'react';

const Heading = props => {
    const classTitle = 'ds-heading';
    const className = props.className ? `${classTitle} ${props.className}` : classTitle;
    const size = props.size ? props.size : 1;
    switch (size.toString()) {
      case '1':
        return <h1 className={`${className} ${classTitle}--big`}>{props.children}</h1>
  
      case '2':
        return <h2 className={`${className} ${classTitle}--med`}>{props.children}</h2>
  
      case '3':
        return <h3 className={`${className} ${classTitle}--small`}>{props.children}</h3>
        
      default:
        return <h1 className={`${className} ${classTitle}--big`}>{props.children}</h1>
    }
}

export default Heading;
