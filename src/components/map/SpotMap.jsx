import React, { useState } from "react";
import osm from "./osm-provider";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvent,
} from "react-leaflet";
import RoutingMachine from "./RoutMachine";
import { useGeolocated } from "react-geolocated";

import LocationMarker from "./LocationMarker";
import Search from "./search/Search";

import styles from "./map.module.scss";
import { Icon } from "leaflet";

function SpotMap() {
    // const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 9;

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 10000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div className={styles.map__wrapper}>
            <div className={styles.map__content}>
                <MapContainer
                    center={[coords.latitude, coords.longitude]}
                    zoom={ZOOM_LEVEL}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        zIndex={-4}
                        url={osm.maptiler.url}
                        attribution={osm.maptiler.attribution}
                    />
                    <Marker position={[coords.latitude, coords.longitude]}>
                        <Popup>Я убью тебя</Popup>
                    </Marker>

                    <Search />
                    <LocationMarker />
                    {/* <RoutingMachine /> */}
                </MapContainer>
            </div>
        </div>
    ) : (
        <div>lol</div>
    );
}

export default SpotMap;
