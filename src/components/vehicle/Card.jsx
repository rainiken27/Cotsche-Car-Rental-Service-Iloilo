import PropTypes from "prop-types";
import VehicleInfoTab from "./VehicleInfoTab";

const Card = ({ item, home }) => {
  return (
    <div
      className={`relative m-3 p-0.5 bg-no-repeat bg-[length:100%_100%] min-w-[27.5rem] max-w-[29rem]
        rounded-2xl ${
        home ? "" : "bg-neutral-100"
      }`}
      style={{ backgroundImage: home ? `url(${item.backgroundUrl})` : "" }}
    >
      <div className="relative flex flex-col min-h-[22rem] p-[2.4rem]">
        <h5 className="text-2xl text-center text-black ">{item.model}</h5>
        <h1 className="text-sm text-center mb-2 text-zinc-900">{item.color}</h1>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <div className="h-[18rem] overflow-hidden border-4 border-transparent hover:border-red-500 transition-colors duration-500 transform rounded-2xl">
            <img
              className="w-full transition-transform duration-200 hover:scale-105"
              src={item.backgroundImg}
              alt={`${item.model} image`}
            />
          </div>
        </div>
        <VehicleInfoTab
          transmission={item.transmission}
          capacity={item.capacity}
          drivetrain={item.drivetrain}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  home: PropTypes.bool,
};

export default Card;
