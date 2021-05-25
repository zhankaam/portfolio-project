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
            <a href="" >Home</a>
            <a href="#skills" >Skills</a>
            <a href="#projects" >What I do</a>
            <a href="#contact" >Contact</a>
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

