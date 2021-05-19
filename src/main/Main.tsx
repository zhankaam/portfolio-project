import React from 'react';
import s from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.Container}`}>
                <div className={s.container}>
                    <h5 className={s.greeting}>hello,my name is</h5>
                    <h2 className={s.fullName}>Zhanat Lepesbayeva</h2>
                    <span className={s.body}>I'm a Freelance Front end Developer based in Minsk,BY</span>
                </div>
                <div className={s.containerPhoto}>
                    <div className={s.photo}>
                    </div>
                </div>
            </div>
        </div>
    );
}

