import React from 'react';
import s from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import { Title } from '../common/components/title/Title';

export function Contact() {
    return (
        <div className={s.fullBlock}>
            <div className={`${styleContainer.container} ${s.contactContainer}`}>
                <div> <Title title={"Contact me"} /></div>
                    <form className={s.form}>
                            <input type="text" placeholder={'first name'} className={s.inputClass}/>
                            <input type="text" placeholder={'last name'} className={s.inputClass}/>
                        <textarea  placeholder={'message'} className={s.textareaClass}/>
                        <button className={s.button}>Send</button>
                    </form>
                   </div>
        </div>
    );
}

