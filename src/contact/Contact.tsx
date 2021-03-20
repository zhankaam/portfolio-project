import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";

export function Contact() {
    return (
        <div className={style.fullBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h3 className={style.title}>Contact</h3>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

