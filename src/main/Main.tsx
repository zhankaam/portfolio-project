import React from 'react';
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.container}>
                    <h5 className={s.greeting}>hello,my name is</h5>
                    <h1 className={s.fullName}>Zhanat Lepesbayeva</h1>
                    <span className={s.body}>I'm a Freelance Front-end Developer based in Minsk,BY</span>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}

