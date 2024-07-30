import React from 'react';
import PropTypes from 'prop-types';
import VehicleInfo from './VehicleInfo';
import wheel from "../../assets/svg/wheel.svg";
import gear from "../../assets/svg/gear.svg";
import seat from "../../assets/svg/seat.svg";

const VehicleDetails = ({ transmission, capacity, drivetrain }) => {
  return (
    <div className="py-1">
        <div className="px-6 flex w-full justify-between text-gray mt-1.5 shadow-md bg-white pt-2 rounded-2xl">
          <VehicleInfo
            icon={wheel}
            label="Transmission"
            value={transmission}
          />
          <VehicleInfo
            icon={seat}
            label="Capacity"
            value={capacity}
          />
          <VehicleInfo
            icon={gear}
            label="Drivetrain"
            value={drivetrain}
          />
        </div>
      </div>

  );
};

VehicleDetails.propTypes = {
  transmission: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  drivetrain: PropTypes.string.isRequired,
};

export default VehicleDetails;