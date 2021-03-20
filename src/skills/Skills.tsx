import  React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

 export function Skills() {
    return (
        <div className={style.skillsBlock}>
         <div className={`${styleContainer.container} ${style.skillsContainer}`} >
             <Title title={"Skills"} />
             <div className={style.skills}>
                 <Skill title={"Storybook"} context={"life is beautiful"}/>
                 <Skill title={"Rest API"} context={"life is beautiful"}/>
                 <Skill title={"Redux"} context={"life is beautiful"}/>
                 <Skill title={"TypeScript"} context={"life is beautiful"}/>
                 <Skill title={"React"} context={"Only my dream keeps me alive"}/>
                 <Skill title={"JavaScript"} context={"born to die"}/>
                 <Skill title={"CSS"} context={"life is beautiful"}/>
                 <Skill title={"HTML"} context={"life is beautiful"}/>
             </div>
         </div>
        </div>
    )
}

