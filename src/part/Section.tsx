import React from 'react';
import style from './Section.module.css';
import styleContainer from "../common/styles/Container.module.css";

export function Section() {
    return (
        <div className={style.section}>
            <div className={`${styleContainer.container} ${style.sectionContainer}`}>
                <h2 className={style.title}>{'I am available for freelancer'}</h2>
                <button className={style.button}> Hire me </button>
            </div>
        </div>
    );
}

