import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import skate from "./skate.png";
import { Spots } from "../Spots";

export default function Markers() {
    const spotIcon = new L.Icon({
        iconUrl: require("./skate.png"),
        iconSize: [35, 45],
    });

    return (
        <>
            {Spots.map((item) => (
                <Marker
                    key={item.namePlace}
                    position={[item.lat, item.lng]}
                    icon={spotIcon}
                >
                    <Popup>
                        говно ебаное леафлет понос с конченой документацией
                        уёбища ебливые твари суки бляди
                    </Popup>
                </Marker>
            ))}
        </>
    );
}
