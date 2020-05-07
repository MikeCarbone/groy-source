import React from 'react';

import Button from './button';
import CenterFlex from './center-flex';
import Text from './text';

const CTA = props => (
  <Section around>
    <CenterFlex>
      <Text className="ds-cta__text">{props.text}</Text>
      <Button to="#" space>{props.btnText}</Button>
    </CenterFlex>
  </Section>
);

export default CTA;
