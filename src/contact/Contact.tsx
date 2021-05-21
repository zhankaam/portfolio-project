import React from 'react';
import s from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import { Title } from '../common/components/title/Title';
// @ts-ignore
import Fade from 'react-reveal/Fade';

export function Contact() {
    return (
        <div className={s.fullBlock}>
            <div className={`${styleContainer.container} ${s.contactContainer}`}>
                <div>
                    <Title title={"Contact me"} />
                </div>
                <Fade right>
                    <form className={s.form}>
                            <input type="text" placeholder={'first name'} className={s.inputClass}/>
                            <input type="text" placeholder={'last name'} className={s.inputClass}/>
                        <textarea  placeholder={'message'} className={s.textareaClass}/>
                        <button className={s.button}>Send</button>
                    </form>
                </Fade>
                   </div>
        </div>
    );
}

