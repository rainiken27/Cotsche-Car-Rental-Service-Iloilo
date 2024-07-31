import React from 'react';
import RadioGroup from './RadioGroup';
import { capacityOptions } from '../constants';

const CapacityType = ({ onChange }) => {

  return (
    <RadioGroup
      label="Capacity"
      name="capacity"
      options={capacityOptions}
      onChange={onChange}
    />
  );
};

export default CapacityType;