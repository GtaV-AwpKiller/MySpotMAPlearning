import React, { useRef, useState } from "react";
import osm from "./osm-provider";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import RoutingMachine from "./RoutMachine";
import { useGeolocated } from "react-geolocated";

import LocationMarker from "./LocationMarker";
import Search from "./search/Search";
import Markers from "./markers/Markers";

import styles from "./map.module.scss";

function SpotMap() {
    // const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 16;

    const myPos = new L.Icon({
        iconUrl: require("./svinota.jpg"),
        iconSize: [35, 45],
    });

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 10000,
        });

    const mapRef = useRef(null);
    // console.log(mapRef);

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
                    ref={mapRef}
                >
                    <TileLayer
                        zIndex={-4}
                        url={osm.maptiler.url}
                        attribution={osm.maptiler.attribution}
                    />

                    <Marker
                        position={[coords.latitude, coords.longitude]}
                        icon={myPos}
                    >
                        <Popup>Я убью тебя</Popup>
                    </Marker>

                    <Markers />

                    <Search />

                    <LocationMarker
                        lat={coords?.latitude}
                        lng={coords?.longitude}
                        mapRef={mapRef}
                    />

                    <RoutingMachine />
                </MapContainer>
            </div>
        </div>
    ) : (
        <div>lol</div>
    );
}

export default SpotMap;
