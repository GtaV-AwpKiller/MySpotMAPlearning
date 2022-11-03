import React from "react";
import styles from "./search.module.scss";
import { Spots } from "../Spots";
import { useState } from "react";

export default function Search() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    return (
        <div className={styles.search__wrapper}>
            <div className={styles.search__container}>
                <div className={styles.search__input}>
                    <div>
                        <input
                            placeholder="Гастрит"
                            onChange={(e) => setFrom(e.target.value)}
                            value={from}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/597/597663.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.search__input}>
                    <input
                        placeholder="Клятва"
                        onChange={(e) => setTo(e.target.value)}
                        value={to}
                    />
                    <img
                        onClick={""}
                        src="https://cdn-icons-png.flaticon.com/512/5616/5616461.png"
                        alt=""
                    />
                </div>
                <button className={styles.search__button}>ауе</button>
            </div>
        </div>
    );
}
