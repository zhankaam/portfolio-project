import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faCss3Alt, faHtml5, faJsSquare, faReact, faStripeS} from "@fortawesome/free-brands-svg-icons";
import {faCode, faServer, faSitemap} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import Fade from 'react-reveal/Fade';

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <Fade left>
                <div className={style.skills}>
                    <Skill title={"HTML"} context={"Semantic HTML,Landing Pages,Forms"} icon={faHtml5}/>
                    <Skill title={"CSS"} context={"CSS3,Sass/Less,CSS-Modules,Material-UI,Ant-design"} icon={faCss3Alt}/>
                    <Skill title={"JS/TS"} context={`JS:,SOLID,Async functions,Promise,Async-await,Event-Loop,This;
                    
                 TypeScript: Migrate projects from JS to TS...`} icon={faJsSquare}/>
                    <Skill title={"React"}
                           context={"SPA,Functional/Class components,Hooks,React-router-dom,other libraries..."}
                           icon={faReact}/>
                    <Skill title={"Redux"} context={"React-Redux,Redux-thunk,HOC,Selectors,Principles of Flux..."}
                           icon={faSitemap}/>
                    <Skill title={"Rest API"} context={"Axios library,CRUD-operations..."} icon={faServer}/>
                    <Skill title={"Testing"} context={"tdd, JEST, unit test, snapshot"} icon={faCode}/>
                    <Skill title={"Storybook"}
                           context={"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. "}
                           icon={faStripeS}/>
                </div>
                </Fade>
            </div>
        </div>
    )
}

