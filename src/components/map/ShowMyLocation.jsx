import React from "react";
import styles from "./location.module.scss";
import LocationMarker from "./LocationMarker";

export default function ShowMyLocation({ click }) {
    return (
        <>
            <div className={styles.MyPosWrapper}>
                <div className={styles.MyPosition} onClick={click}>
                    <p>MyPos</p>
                </div>
            </div>
        </>
    );
}
