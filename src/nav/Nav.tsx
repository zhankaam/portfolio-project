import React from 'react';
import style from './Nav.module.scss';

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="" className={style.font}>Home</a>
            <a href="" className={style.font}>Skills</a>
            <a href="" className={style.font}>What I do</a>
            <a href="" className={style.font}>Contact</a>
            </div>
    );
}

