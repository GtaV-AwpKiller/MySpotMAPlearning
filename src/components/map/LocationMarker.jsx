import React, { useRef } from "react";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

import styles from "./location.module.scss";

export default function LocationMarker() {
    const [position, setPosition] = useState(null);
    const myPos = useRef(null);

    const [map, setMap] = useState(null);

    // setMap(() => {
    //     useMapEvents({
    //         click() {
    //             setMap.locate();
    //         },
    //         locationfound(e) {
    //             setPosition(e.latlng);
    //             setMap.flyTo(e.latlng, setMap.getZoom());
    //         },
    //     });
    // });

    // const map = useMapEvents({
    //     click() {
    //         map.locate();
    //     },
    //     locationfound(e) {
    //         setPosition(e.latlng);
    //         map.flyTo(e.latlng, map.getZoom());
    //     },
    // });

    return (
        <div className={styles.MyPosWrapper}>
            <div className={styles.MyPosition} ref={myPos}>
                <img
                    style={{ cursor: "pointer", filter: "invert(100%)" }}
                    src="https://cdn-icons-png.flaticon.com/512/1812/1812247.png"
                    alt=""
                />
            </div>
            {/* <Marker position={position}></Marker> */}
        </div>
    );
}
