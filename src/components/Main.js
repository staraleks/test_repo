import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"
import SocialIcons from "../subComponents/SocialIcons"
import { YinYang } from "./AllSvgs"
import Intro from "./Intro"
import {motion} from 'framer-motion'

const MainContainer = styled(motion.div)`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position:relative;
h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`
const container = {
    hidden: {opacity: 0},
    show:{
        opacity: 1,
        transition:{
            type:'spring',
            duration: 3,
        }
    }
}


const Container = styled.div`
padding: 2rem;
`
const rotate = keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`

const Center = styled.button`
position:absolute;
top: ${props => props.click ? "85%" :"50%"};
left:${props => props.click ? "92%" :"50%"};
transform:translate(-50%, -50%);
border:none;
outline:none;
background-color:transparent;
cursor:pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block' };
    padding-top:1rem;
}
`

const CONTACT = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: 0;
transform: rotate(90deg) translate(-50%, 50%);
text-deocoration:none;
z-index:1;
`

const PROJECTS = styled(NavLink)`
color: ${props=>props.theme.text};
position: absolute;
top: 45%;
right: 1rem;
transform: rotate(270deg) translate(-50%, -50%);
text-deocoration:none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
text-deocoration:none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color:${props=>props.theme.text};
text-deocoration:none;
z-index:1;
`

const DarkDiv = styled.div`
background-color:#000;
position:absolute;
top:0;
bottom:0;
right:50%;
width:${props => props.click ? '100%' : '0%'};
height:${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () =>{

    const [click, setClick] = useState(false);

    const handleClick = ()=> setClick(!click);

    return (
        <MainContainer  variants={container} initial='hidden' animate='show'>
          <DarkDiv click={click} />
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? "dark" : "light" } />
            <SocialIcons theme={click ? "dark" : "light" } />

            <Center click={click}>
                <YinYang onClick={()=> handleClick()} width={click ? 120: 200} height={click ? 120: 200} fill='currentColor' />
                <span>Click me</span>
            </Center>
            <CONTACT to="/contact" click={click}>
                <motion.h2
                initial = {{
                    y:200,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale:0.9}}
                >
                    Contact me
                </motion.h2>
            </CONTACT>
            <PROJECTS to="/projects" >
                <motion.h2
                initial = {{
                    y:200,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale:0.9}}
                >
                    Projects
                </motion.h2>
            </PROJECTS>
            <BottomBar>
            <ABOUT to="/about" click={click}>
                <motion.h2
                initial = {{
                    y:200,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale:0.9}}
                >
                    About me
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills" click={click}>
                <motion.h2
                initial = {{
                    y:200,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration:1.5, delay: 0.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale:0.9}}
                >
                    My Skills
                </motion.h2>
            </SKILLS>
            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main