import React from 'react';
import style from './Content.module.scss'
import {Project} from "./projects/Project";
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import todoListApp from "./../assets/image/ed3b4d774abe.jpg"
import socialImage from "./../assets/image/todoApp.jpg"

export const Content = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }

    const todoApp = {
        backgroundImage: `url(${todoListApp})`
    }

    return (
        <div className={style.contentBlock}>
            <div className={`${styleContainer.container} ${style.contentContainer}`}>
                <Title title={"what I do"} />
                <div className={style.project}>
                    <Project style={socialNetwork}
                             title={"social network"}
                             text={"Social media helps people establish better relationships with their family and friends.Social networks are important because they allow people to develop relationships with others with whom they might not otherwise be able to connect."} />
                    <Project style={todoApp} title={"to do list"}
                             text={"One of the most important reasons for keeping a to-do list is the organization. Organizing your tasks with a list can make everything much more manageable and make you feel grounded."}/>
                </div>
            </div>
        </div>
    )
}