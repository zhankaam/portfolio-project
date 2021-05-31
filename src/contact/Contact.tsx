import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from '../common/components/title/Title';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import axios from "axios";

export function Contact() {

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const onNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onLastNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value)
    }

    const onMessageChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }


    const getDataRequest = async (name: string,lastName: string,message: string) => {
       await axios.post(`http://localhost:3000/sendMessage`,{name,lastName,message})
    }

    useEffect(() => {
        getDataRequest(name,lastName,message)
    },[name,lastName,message])

    return (
        <div id="contact" className={s.fullBlock}>
            <div className={`${styleContainer.container} ${s.contactContainer}`}>
                <div>
                    <Title title={"Contact me"}/>
                </div>
                <Fade right>
                    <form className={s.form}>
                        <input
                            type="text"
                            placeholder={'first name'}
                            className={s.inputClass}
                            value={name}
                            onChange={onNameChanged}
                        />
                        <input
                            type="text"
                            placeholder={'last name'}
                            className={s.inputClass}
                            value={lastName}
                            onChange={onLastNameChanged}
                        />
                        <textarea
                            placeholder={'message'}
                            className={s.textareaClass}
                            value={message}
                            onChange={onMessageChanged}
                        />
                        <button className={s.button}>Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

