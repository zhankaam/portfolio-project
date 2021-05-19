import React from 'react';
import s from './Title.module.scss'

type PropsType = {
    title: string
}
export const Title: React.FC<PropsType> = (props) => {
    return (
        <h2 className={s.contentTitle}>{props.title}</h2>
    )
}