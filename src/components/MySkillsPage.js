import React from "react"
import styled, { ThemeProvider } from "styled-components"
import {lightTheme} from "./Theme"
import { Unity, Py } from "./AllSvgs"
import {motion} from 'framer-motion'

import SocialIcons from "../subComponents/SocialIcons"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding:2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display:flex;
flex-direction:column;
justify-content: space-between;

&:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display:flex;
justify-content:center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem, 0;

strong{
    margin-bottom:1rem;
    text-transform:uppercase;
}
ul,p{
    margin-left: 2rem;
}

${Main}:hover &{
     color:${props => props.theme.body};
}
`

//framer motion
const container = {
    hidden: {opacity: 0},
    show:{
        opacity: 1,
        transition:{
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const main = {
    hidden: {scale: 0},
    show:{
        scale: 1,
        transition:{
            type: 'spring',
            duration: 1,
        }
    }
}

const MySkillsPage = () =>{

    return(
    <ThemeProvider theme={lightTheme}>
        <Box variants={container} initial='hidden' animate='show'>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />

        <Main  variants={main} initial='hidden' animate='show'>
            <Title>
                <Unity width={40} height={40} /> Game Designer
            </Title>
            <Description>
            I enjoy developing immersive 2D and 3D game projects
            </Description>
            <Description>
                <strong>I have experience in</strong>
                <ul>
                    <li>Desktop game development</li>
                    <li>Mobile game development</li>
                </ul>
            </Description>
            <Description>
                <strong>Skills</strong>
                <p>
                Unity
                C#
                Pixel Art design
                </p>
            </Description>
           </Main>

           <Main variants={main} initial='hidden' animate='show'>
           <Title>
                <Py width={40} height={40} /> Python Developer
            </Title>
            <Description>
            Currently contributing to the development of b2b telegram bot
            </Description>
            <Description>
                <strong>I have experience in</strong>
                <ul>
                    <li>Developing trading applications</li>
                    <li>Parsing and web scraping</li>
                    <li>Developing algorithms on Python</li>
                    <li>Writing scripts to automate my daily tasks</li>
                </ul>
            </Description>
            <Description>
                <strong>Skills</strong>
                <p>
                Python
                Numpy
                Pandas
                </p>
            </Description>
           </Main>
        </Box>
    </ThemeProvider>
    )
}

export default MySkillsPage