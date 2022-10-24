import React from "react";
import styles from "./header.module.scss";

function Header() {
    const headerItem = [
        { title: "ABOUT", url: "about", type: "link", testid: "main-about" },
        { title: "HELP", url: "help", type: "link", testid: "help-link" },
    ];
    return (
        <header className={styles.header} style={{ zIndex: 1 }}>
            <div className={styles.header__background}>
                <div
                    className={`main__wrapper ${styles.header__content_wrapper}`}
                >
                    <a to="/" className={styles.header_logo}>
                        LOGO
                    </a>
                    <ul className={styles.header__menu_nav}>
                        {headerItem.map((item) => (
                            <li className={styles.menu__item}>
                                <a
                                    data-testid={item.testid}
                                    to={`/${item.url}`}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.header__theme}> theme </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
