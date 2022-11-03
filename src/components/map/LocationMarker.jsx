import React from "react";

import styles from "./location.module.scss";

export default function LocationMarker({ lat, lng, mapRef }) {
    console.log(mapRef?.current);

    const showMyLoc = () => {
        mapRef.current.flyTo([lat, lng]);
    };

    // const [position, setPosition] = useState(null);
    // const map = useMapEvents({
    //     click() {
    //         map.locate();
    //     },
    //     locationfound(e) {
    //         setPosition(e.latlng);
    //         map.flyTo(e.latlng, map.getZoom());
    //     },
    // });

    // ------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------
    // const [location, setLocation] = useState({
    //     loaded: false,
    //     coord: { lat: "", lng: "" },
    // });

    // const onSuccess = (location) => {
    //     setLocation({
    //         loaded: true,
    //         coord: {
    //             lat: location.coords.latitude,
    //             lng: location.coords.longitude,
    //         },
    //     });
    // };

    // const onError = (error) => {
    //     setLocation({
    //         loaded: true,
    //         error,
    //     });
    // };

    // useEffect(() => {
    //     if (!("geolocation" in navigator)) {
    //         onError({
    //             code: 0,
    //             message: "geoloc is not supp",
    //         });
    //     }

    //     navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // }, []);
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------

    return (
        <div className={styles.MyPosWrapper} onClick={showMyLoc}>
            <div className={styles.MyPosition}>
                <img
                    style={{ cursor: "pointer", filter: "invert(100%)" }}
                    src="https://cdn-icons-png.flaticon.com/512/1812/1812247.png"
                    alt=""
                />
            </div>
            {/* {position === null ? null : <Marker position={position}></Marker>} */}
        </div>
    );
}
