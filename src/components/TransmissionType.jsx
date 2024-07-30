import React from 'react';
import RadioGroup from './RadioGroup';
import { transmissionOptions } from '../constants';

const TransmissionType = ({ onChange }) => {

  return (
    <RadioGroup
      label="Transmission"
      name="transmission"
      options={transmissionOptions}
      onChange={onChange}
    />
  );
};

export default TransmissionType;