import React from 'react';

import Figure from './figure';
import Heading from './heading';
import SecondaryButton from './secondary-button';
import SubText from './subtext';

const SmallArticle = props => (
  <div className="ds-small-article">
    <Figure className="ds-small-article__img" small src={props.imgSrc} caption={props.imgCaption}/>
    <Heading size={2}>{props.title}</Heading>
    <SubText>{props.subText}</SubText>
    <SecondaryButton className="ds-small-article__button" to={props.btnTo}>{props.btnText}</SecondaryButton>
  </div>
);

export default SmallArticle;
