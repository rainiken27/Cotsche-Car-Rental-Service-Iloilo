import { Route, Routes } from "react-router-dom"
import Home  from "./components/Home.jsx"
import VehicleList from "./components/vehicle/VehicleList.jsx"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicle-list" element={<VehicleList />} />
    </Routes>
  );
};

export default App;