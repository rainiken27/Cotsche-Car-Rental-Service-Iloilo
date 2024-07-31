import React from 'react';
import PropTypes from 'prop-types';

const VehicleInfo = ({ icon, label, value }) => (
  <div className="flex flex-col justify-center items-center gap-2">
    <img src={icon} width={20} height={20} alt={label} />
    <p className="text-[14px] text-black">{value}</p>
  </div>
);

VehicleInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default VehicleInfo;