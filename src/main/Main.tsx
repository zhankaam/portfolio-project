import React from 'react';
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Particles from 'react-particles-js';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Tilt from 'react-tilt'
import myPhoto from '../common/styles/image/myPhoto.jpg'


const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

export function Main() {
    return (
        <div className={s.mainBlock}>
            <Particles className={s.particles} params={particlesOptions}/>

            <div className={styleContainer.container}>
                <Fade left>
                    <div className={s.container}>
                        <h5 className={s.greeting}>hello,my name is</h5>
                        <h1 className={s.fullName}>Zhanat Lepesbayeva</h1>
                        <ReactTypingEffect className={s.body}
                            text={["I'm a Freelance Front-end Developer based in Minsk,BY"]}/>
                    </div>
                </Fade>
                <Fade right>
                    <Tilt className={s.tilt} options={{ max : 25 }}  >
                        <img src={myPhoto} className={s.photo} alt={"myPicture"}/>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
}

