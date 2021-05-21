import React from 'react';
import style from './Section.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";

export function Section() {
    return (
        <div className={style.section}>
            <div className={`${styleContainer.container} ${style.sectionContainer}`}>
                <Title title={"I am available for freelancer"}/>
                <button className={style.button}> Hire me </button>
            </div>
        </div>
    );
}

