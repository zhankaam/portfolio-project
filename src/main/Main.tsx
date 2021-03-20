import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi there</span>
                    <h1 className={style.font}>I am Zhanat Lepesbayeva</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}

