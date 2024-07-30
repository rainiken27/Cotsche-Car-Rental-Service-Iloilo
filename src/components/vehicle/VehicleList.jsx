import React, { useState } from "react";
import PageSection from "../PageSection";
import Header from "../Header";
import VehicleGrid from "./Vehicles";
import SidebarFilter from "../SidebarFilter";
import ButtonGradient from "../../assets/svg/ButtonGradient";
const VehicleList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [transmission, setTransmission] = useState("");
  const [capacity, setCapacity] = useState("");
  const [brand, setBrand] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTransmissionChange = (e) => {
    setTransmission(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  return (
    <div className="bg-white min-h-dvh">
      <Header />
      <PageSection id="top">
        <div class="max-w-[16rem] mt-10 ml-3">
          <div class="relative flex items-center w-full h-10 rounded-md focus-within:shadow-lg bg-gray-950 overflow-hidden">
            <div class="grid place-items-center w-12 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search vehicles..."
              className="my-auto mb-4 peer h-full w-full outline-none text-sm text-white pr-2 bg-gray-950"
            />
          </div>
        </div>
        <div className="flex mt-5">
          <SidebarFilter
            onTransmissionChange={handleTransmissionChange}
            onCapacityChange={handleCapacityChange}
            onBrandChange={handleBrandChange}
            className="w-1/8"
          />
          <div className="w-full">
            <div className="w-full z-2">
              <VehicleGrid
                searchQuery={searchQuery}
                transmission={transmission}
                capacity={capacity}
                brand={brand}
              />
            </div>
          </div>
        </div>
      </PageSection>

      <ButtonGradient />
    </div>
  );
};

export default VehicleList;
