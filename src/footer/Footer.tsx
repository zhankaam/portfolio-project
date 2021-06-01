import React from 'react';
import s from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faInstagramSquare, faLinkedin, faTelegram, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import {faMailBulk, faMapMarkedAlt, faMobile} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import Fade from 'react-reveal/Fade';


export function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.infoBox}>
                    <div className={s.form}>
                        <div className={s.iconBlock}>
                            <FontAwesomeIcon icon={faMapMarkedAlt} className={s.infoIcons}/>
                        </div>
                        <h5 className={s.mainText}>Address Line</h5>
                        <p className={s.paragraph}>Minsk city,Belarus</p>
                    </div>
                    <div className={s.form}>
                        <div className={s.iconBlock}>
                            <FontAwesomeIcon icon={faMailBulk} className={s.infoIcons}/>
                        </div>
                        <h5 className={s.mainText}>Mail</h5>
                        <p className={s.paragraph}>zhankaam@gmail.com</p>
                    </div>
                    <div className={s.form}>
                        <div className={s.iconBlock}>
                            <FontAwesomeIcon icon={faMobile} className={s.infoIcons} />
                        </div>
                        <h5 className={s.mainText}>Phone</h5>
                        <p className={s.paragraph}>phone: +375-44-744-27-95</p>
                    </div>
                </div>
                <Fade bottom>
                <div className={s.wrapper}>
                    <div className={s.socialMenu}>
                        <div className={s.icon}>
                            <FontAwesomeIcon icon={faTelegram} href={"https://web.telegram.org/#/im"} className={s.iconStyle}/>
                        </div>
                        <div className={s.icon}>
                            <FontAwesomeIcon icon={faWhatsappSquare} href={"https://www.whatsapp.com/?lang=ru"} className={s.iconStyle}/>
                        </div>
                        <div className={s.icon}>
                            <FontAwesomeIcon icon={faLinkedin} href={"https://www.linkedin.com/in/zhanat-lepesbayeva-937a06201/"} className={s.iconStyle}/>
                        </div>
                        <div className={s.icon}>
                            <FontAwesomeIcon icon={faGithub} href={"https://github.com/zhankaam"} className={s.iconStyle}/>
                        </div>
                        <div className={s.icon}>
                            <FontAwesomeIcon icon={faInstagramSquare} href={"https://www.instagram.com/?hl=ru"} className={s.iconStyle}/>
                        </div>
                    </div>
                    <span className={s.copyWriter}>©2021, All Rights Reserved </span>
                </div>
                </Fade>
            </div>
        </div>
    );
}

