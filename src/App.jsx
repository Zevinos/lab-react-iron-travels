import logo from "./assets/logo.png";
import "./App.css";
import TravelList from './components/TravelList.jsx';
import travelPlansData from "./assets/travel-plans.json";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <TravelList travelPlansData={travelPlansData}/>
      
    </>
  );
}

export default App;