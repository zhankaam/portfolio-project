import React from 'react';
import style from './Nav.module.scss';
// @ts-ignore
import Fade from "react-reveal/Fade";

export function Nav() {
    return (
        <Fade top>
        <div className={style.nav}>
            <a href="" className={style.font}>Home</a>
            <a href="" className={style.font}>Skills</a>
            <a href="" className={style.font}>What I do</a>
            <a href="" className={style.font}>Contact</a>
            </div>
        </Fade>
    );
}

