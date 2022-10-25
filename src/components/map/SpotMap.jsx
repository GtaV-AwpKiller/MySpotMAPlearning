import React, { useState } from "react";
import styles from "./map.module.scss";

import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvent,
} from "react-leaflet";
import osm from "./osm-provider";

import LocationMarker from "./LocationMarker";
import RoutingMachine from "./RoutMachine";
import ShowMyLocation from "./ShowMyLocation";

function SpotMap() {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 9;

    // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //     useGeolocated({
    //         positionOptions: {
    //             enableHighAccuracy: false,
    //         },
    //         userDecisionTimeout: 10000,
    //     });

    return (
        <div className={styles.map__wrapper}>
            <div className={styles.map__content}>
                <MapContainer
                    center={[50.4, 50.3]}
                    zoom={ZOOM_LEVEL}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        zIndex={-4}
                        url={osm.maptiler.url}
                        attribution={osm.maptiler.attribution}
                        // ref={mapRef}
                    />
                    {/* {console.log(coords.latitude, coords.longitude)} */}
                    {/* <Marker position={[coords.latitude, coords.longitude]}>
                        <Popup>Я ЗНАЮ ГДЕ ТЫ</Popup>
                    </Marker> */}
                    {/* <ShowMyLocation /> */}

                    <LocationMarker />
                    <RoutingMachine />
                </MapContainer>
            </div>
        </div>
    );
}

export default SpotMap;
