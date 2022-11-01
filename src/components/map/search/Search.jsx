import React from "react";
import styles from "./search.module.scss";

export default function Search() {
    return (
        <div className={styles.search__wrapper}>
            <div className={styles.search__container}>
                <div className={styles.search__input}>
                    <input placeholder="Гастрит" />
                </div>
                <div className={styles.search__input}>
                    <input placeholder="Клятва" />
                </div>
                <button className={styles.search__button}>ауе</button>
            </div>
        </div>
    );
}
