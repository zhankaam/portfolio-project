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
                 <Skill title={"HTML5/CSS3"} context={"life is beautiful"}/>
                 <Skill title={"JavaScript"} context={"born to die"}/>
                 <Skill title={"React/Redux"} context={"Only my dream keeps me alive"}/>
             </div>
         </div>
        </div>
    )
}

