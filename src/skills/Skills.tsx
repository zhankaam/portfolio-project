import  React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faCss3Alt, faHtml5, faJsSquare, faReact, faStripeS} from "@fortawesome/free-brands-svg-icons";
import {faCode, faServer, faSitemap} from "@fortawesome/free-solid-svg-icons";

 export function Skills() {
    return (
        <div className={style.skillsBlock}>
         <div className={`${styleContainer.container} ${style.skillsContainer}`} >
             <Title title={"Skills"} />
             <div className={style.skills}>
                 <Skill title={"HTML"} context={"Semantic HTML,Landing Pages,Forms"} icon={faHtml5}/>
                 <Skill title={"CSS"} context={"CSS3,Sass/Less,CSS-Modules,Grid,BEM,Material-UI,Ant-design"} icon={faCss3Alt}/>
                 <Skill title={"JS/TS"} context={`JS:SOLID,Async functions,Promise,Async-await,Event-Loop,This;
                  TS: Migrate projects from JS to TS...`} icon={faJsSquare}/>
                 <Skill title={"React"} context={"SPA,Functional/Class components,Hooks,React-router-dom,other libraries..."} icon={faReact}/>
                 <Skill title={"Redux"} context={"React-Redux,Redux-Form,Redux-thunk,Thunk-Creator,Reducer,Hooks,Hoc-connect,Selectors,Principles of Flux..."} icon={faSitemap}/>
                 <Skill title={"Rest API"} context={"Axios library,CRUD-operations..."} icon={faServer}/>
                 <Skill title={"Testing"} context={"tdd, JEST, unit test, snapshot"} icon={faCode}/>
                 <Skill title={"Storybook"} context={"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. "} icon={faStripeS}/>
             </div>
         </div>
        </div>
    )
}

