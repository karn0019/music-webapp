import axios from "axios";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { UnauthenticatedApp } from "./Pages/UnauthenticatedApp";



function App() {
  
  return (
    <div>
     {/* <Dashboard/> */}
     <UnauthenticatedApp/>
    </div>
  );
}

export default App;
