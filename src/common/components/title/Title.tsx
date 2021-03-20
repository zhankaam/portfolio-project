import React from 'react';
import s from './Title.module.scss'

type PropsType = {
    title: string
}
export const Title: React.FC<PropsType> = (props) => {
    return (
                <div className={s.contentTitle}>
                    <h2>{props.title}</h2>
                </div>
    )
}