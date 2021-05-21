import React from 'react';
import style from './Nav.module.scss';
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

export function Nav() {
    return (
        <Fade top>
        <div className={style.nav}>
            <a href="" className={style.font}>Home</a>
            <a href="#skills" className={style.font}>Skills</a>
            <a href="#projects" className={style.font}>What I do</a>
            <a href="#contact" className={style.font}>Contact</a>
            {/*<Link*/}
            {/*    activeClass={style.active}*/}
            {/*    to="section1"*/}
            {/*    spy={true}*/}
            {/*    smooth={true}*/}
            {/*    offset={-70}*/}
            {/*    duration={500}*/}
            {/*>Contact</Link>*/}
            </div>
        </Fade>
    );
}

