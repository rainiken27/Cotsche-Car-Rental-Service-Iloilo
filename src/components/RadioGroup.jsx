import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const RadioGroup = ({ label, name, options, onChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-normal mb-2 text-black">{label}</h2>
      <div>
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center cursor-pointer mb-3 relative pl-3"
          >
            <Input
              type="radio"
              name={name}
              value={option.value}
              onChange={onChange}
              className="absolute opacity-0 cursor-pointer"
            />
            <span className="text-sm font-medium  text-gray-900">
              {option.title}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroup;