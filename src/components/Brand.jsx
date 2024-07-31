import React from 'react';
import RadioGroup from './RadioGroup';
import { brandOptions } from '../constants';

const Brand = ({ onChange }) => {

  return (
    <RadioGroup
      label="Brand"
      name="brand"
      options={brandOptions}
      onChange={onChange}
    />
  );
};

export default Brand;