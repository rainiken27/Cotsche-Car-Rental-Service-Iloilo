import React from "react";
import TransmissionType from "./TransmissionType";
import CapacityType from "./CapacityType";
import Brand from "./Brand";

const SidebarFilter = ({ onTransmissionChange, onCapacityChange, onBrandChange }) => {
  return (
    <div className="hidden md:flex pl-4 pr-10">
      <div>

        <div className="pt-3">
          <TransmissionType onChange={onTransmissionChange}/>
          <CapacityType onChange={onCapacityChange}/>
          <Brand onChange={onBrandChange} />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;