import React, { useState } from "react";
import styles from "./map.module.scss";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import osm from "./osm-provider";

import { useGeolocated } from "react-geolocated";

function SpotMap() {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
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
                        // ref={mapRef}
                    />
                    <Marker position={[coords.latitude, coords.longitude]}>
                        <Popup>Я ЗНАЮ ГДЕ ТЫ ШЛЮХА</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}

export default SpotMap;
