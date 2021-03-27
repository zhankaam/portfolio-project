import React from 'react';
import style from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

 type PropsType = {
     title: string
     context: string
     icon?: IconDefinition
 }

export function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            { props.icon &&
                <div className={style.icon}>
                    <FontAwesomeIcon icon={props.icon} />
                </div>
            }

            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.context}
            </span>
            </div>
    );
}

