import React from 'react';

import BetweenFlex from './between-flex';
import Button from './button';
import Figure from './figure';
import Heading from './heading';
import SubText from './subtext';

const BigArticle = props => {
  const info = (
    <div className="ds-big-article__info">
        <Heading>{props.title}</Heading>
        <SubText>{props.subText}</SubText>
        <Button to={props.btnTo} className="ds-big-article__button">{props.btnText}</Button>
      </div>
  );

  const img = (
    <Figure src={props.imgSrc} caption={props.imgCaption}/>
  )

  const present = props.left
    ? <div>{info}{img}</div>
    : <div>{img}{info}</div>

  return(
    <BetweenFlex className="ds-big-article">
      {present}
    </BetweenFlex>
  );
};

export default BigArticle;
