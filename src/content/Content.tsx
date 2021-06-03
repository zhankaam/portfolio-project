import React from 'react';
import style from './Content.module.scss'
import {Project} from "./projects/Project";
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import socialImage from "../../src/common/styles/image/photo-1603458319957-8df73cb52511.jpg"
import todoListApp from "../../src/common/styles/image/photo-1558025137-0b406e9cc169.jpg"
import teamApp from "../../src/common/styles/image/photo-1511376777868-611b54f68947.jpg"
import calcApp from "../../src/common/styles/image/photo-1568502702280-348cf12c6d2c.jpg"

export const Content = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }

    const todoApp = {
        backgroundImage: `url(${todoListApp})`
    }

    const teamProject = {
        backgroundImage: `url(${teamApp})`
    }

    const calcProject = {
        backgroundImage: `url(${calcApp})`
    }

    return (
        <div id="projects" className={style.contentBlock}>
            <div className={`${styleContainer.container} ${style.contentContainer}`}>
                <Title title={"what I do"} />
                <div className={style.project}>
                    <Project style={socialNetwork}
                             href={"https://github.com/zhankaam/social-network"}
                             title={"social network"}
                             text={"Social media helps people establish better relationships with their family and friends.Social networks are important because they allow people to develop relationships with others with whom they might not otherwise be able to connect."} />
                    <Project style={todoApp} title={"to do list"}
                             href={"https://github.com/zhankaam/todolist-tsx"}
                             text={"One of the most important reasons for keeping a to-do list is the organization. Organizing your tasks with a list can make everything much more manageable and make you feel grounded."}/>
                    <Project style={teamProject} title={"cards project with team"}
                             href={"https://github.com/sergeykurilov/friday"}
                             text={"This project is being developed now by me and a team of talented creators. It will help to learn new things with the usage of cards, where, for instance, on the first side can be a word and on the other side -- a definition."}/>
                    <Project style={calcProject} title={"сurrency сonverter"}
                             href={"https://github.com/zhankaam/wednesday-nativka"}
                             text={"Conversion is the knowledge of the real value of one currency to be converted into another country's currency so that you can convert between the two currencies."}/>
                </div>
            </div>
        </div>
    )
}