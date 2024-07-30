import PropTypes from "prop-types";
import Card from "./Card";
import { vehicles } from "../../constants";

const VehicleGrid = ({ limit, searchQuery, transmission, capacity, brand,  home }) => {
  const displayedVehicles = limit ? vehicles.slice(0, limit) : vehicles;

  const filteredVehicles = displayedVehicles.filter((vehicle) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      vehicle.model.toLowerCase().includes(searchLower) ||
      vehicle.color.toLowerCase().includes(searchLower) ||
      vehicle.transmission.toLowerCase().includes(searchLower) ||
      vehicle.drivetrain.toLowerCase().includes(searchLower);

    return (
      matchesSearch &&
      (transmission ? vehicle.transmission === transmission : true)
      &&
      (capacity ? vehicle.capacity === capacity : true)
      &&
      (brand ? vehicle.brand === brand : true)
    );
  });

  return (
    <div
      className={`flex flex-wrap text- mx-auto ${
        home ? "justify-center" : "justify-left"
      }`}
    >
      {filteredVehicles.map((item) => (
        <Card home={home} key={item.id} item={item} />
      ))}
    </div>
  );
};

VehicleGrid.propTypes = {
  limit: PropTypes.number,
  searchQuery: PropTypes.string.isRequired,
  transmission: PropTypes.string,
};

export default VehicleGrid;
