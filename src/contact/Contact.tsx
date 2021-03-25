import React from 'react';
import style from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import { Title } from '../common/components/title/Title';

export function Contact() {
    return (
        <div className={style.fullBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
               <Title title={"Contact"} />
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

