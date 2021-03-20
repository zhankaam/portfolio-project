import React from 'react';

import style from './Skill.module.scss'
 type PropsType = {
     title: string
     context: string
 }

export function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.context}
            </span>
            </div>
    );
}

