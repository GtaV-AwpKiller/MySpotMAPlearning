import "./App.css";
import SpotMap from "./components/map/SpotMap";
import Header from "./components/UI/header/Header";

import "leaflet/dist/leaflet.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
    return (
        <div className="App">
            <CustomCursor />
            <Header />
            <SpotMap />
        </div>
    );
}

export default App;
