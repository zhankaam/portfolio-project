import React from 'react';
import s from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { instagram } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.infoBox}>
                    <div className={s.form}>
                        <div className={s.icon}>icon</div>
                        <h5 className={s.mainText}>Address Line</h5>
                        <p className={s.paragraph}>Minsk city,Belarus</p>
                    </div>
                    <div className={s.form}>
                        <div className={s.icon}>icon</div>
                        <h5 className={s.mainText}>Mail</h5>
                        <p className={s.paragraph}>zhankaam@gmail.com</p>
                    </div>
                    <div className={s.form}>
                        <div className={s.icon}>icon</div>
                        <h5 className={s.mainText}>Phone</h5>
                        <p className={s.paragraph}>phone: +375-396-34-14</p>
                    </div>
                </div>
                <div className={s.socialMenu}>
                    <div className={s.icon}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <span className={s.copyWriter}>©2021, All Rights Reserved </span>
            </div>
        </div>
    );
}

