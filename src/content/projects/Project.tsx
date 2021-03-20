import React, {CSSProperties} from 'react';
import style from './Project.module.scss'

type PropsType = {
    title: string
    text: string
    style: CSSProperties | undefined
}

export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.photo} style={props.style}>
                <a className={style.viewButton}>more details</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectName}>{props.title}</h3>
                <p className={style.description}>{props.text}</p>
            </div>
        </div>
    )
}