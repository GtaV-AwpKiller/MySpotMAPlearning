import "./App.css";
import SpotMap from "./components/map/SpotMap";
import Header from "./components/UI/header/Header";

import "leaflet/dist/leaflet.css";

function App() {
    return (
        <div className="App">
            <Header />
            <SpotMap />
        </div>
    );
}

export default App;
