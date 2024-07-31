import Header from "../components/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Hero from "../components/Hero.jsx";
import VehicleGrid from "../components/vehicle/Vehicles.jsx";
import { HashLink as Link } from "react-router-hash-link";
import Heading from "../components/Heading";
import PageSection from "./PageSection.jsx";

const Home = () => {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <PageSection id="vehicles">
          <Heading title="Cotsche's Fleet!" className="pt-10" />
          <VehicleGrid limit={3} home={true} searchQuery="" />
          <div className="flex justify-center py-4">
            <Link
              to="/vehicle-list/#top"
              className="px-4 py-2 bg-red-600 text-white rounded border border-transparent hover:border-red-600 transition duration-300 hover:bg-white hover:text-red-600"
            >
              View All
            </Link>
          </div>
        </PageSection>
      </div>
      <ButtonGradient />
    </div>
  );
};

export default Home;