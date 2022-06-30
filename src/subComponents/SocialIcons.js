import React from "react"
import { NavLink } from "react-router-dom"
import { Github, LinkedIn, Facebook, Telegram } from "../components/AllSvgs"
import styled from "styled-components"
import {darkTheme} from '../components/Theme'
import { motion } from 'framer-motion'

const Icons = styled(motion.div)`
display:flex;
flex-direction:column;
align-items:center;

position:fixed;
bottom:0;
left:2rem;
z-index:3;

&>*: not(:last-child){
    margin:0.5rem 0;
}
`

const Line = styled(motion.span)`
width:2px;
height:3rem;
background-color:${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
`

const SocialIcons = (props) =>{
    return (
        <Icons>
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://github.com/Negaflaneur"}}>
                    <Github width={30} height = {30} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://t.me/Negaflaneur"}}>
                    <Telegram width={30} height = {30} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com/profile.php?id=100080368590470"}}>
                    <Facebook width={30} height = {30} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/alex-star"}}>
                    <LinkedIn width={30} height = {30} fill= { props.theme === "dark" ? darkTheme.text : darkTheme.body } />
                </NavLink>
            </motion.div>

            <Line color={props.theme} 
            initial ={{
                height:0
            }}
            animate={{
                height: '3rem'
            }}
            transition={{
                type:'spring', duration:1, delay:0.9
            }}
            />
        </Icons>
    )
}

export default SocialIcons