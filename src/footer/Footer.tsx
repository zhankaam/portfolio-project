import React from 'react';
import s from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";

export function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Zhanat Lepesbayeva</h3>
                <div className={s.socialMenu}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <span className={s.copyWriter}>©2021, All Rights Reserved </span>
            </div>
        </div>
    );
}

