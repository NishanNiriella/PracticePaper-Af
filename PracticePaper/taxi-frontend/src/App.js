import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './components/navBar/navBar';
import CreateCategory from "./components/createCategory/createCategory";
import CreateVehicle from "./components/createVehicle/createVehicle";
import Categories from "./components/categories/categories";
import Vehicles from "./components/vehicles/vehicles";
import VehicleList from "./components/categories/vehicleList";
import TripCharges from "./components/tripCharges/tripCharges";
import SelectedTripCost from "./components/categories/selectedTripCost";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <section>
                <Switch>
                    <Route path="/" component={Categories} exact/>
                    <Route path="/vehicle/:id" component={VehicleList} exact/>
                    <Route path="/cost/:id/:cid" component={SelectedTripCost}/>
                    <Route path="/view-vehicles" component={Vehicles}/>
                    <Route path="/create-vehicle" component={CreateVehicle}/>
                    <Route path="/create-category" component={CreateCategory}/>
                    <Route path="/trip-charge" component={TripCharges}/>
                </Switch>
            </section>
        </Router>
    </div>
  );
}

export default App;
