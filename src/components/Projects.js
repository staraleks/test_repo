import React, { useEffect, useRef } from "react"
import styled, {keyframes, ThemeProvider } from "styled-components"
import {darkTheme} from "./Theme"
import { Github, YinYang } from '../components/AllSvgs';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';
import {Work} from "../data/WorkData"

import SocialIcons from "../subComponents/SocialIcons"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"

//swiper
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const Container = styled(motion.div)`
background-color: ${props => props.theme.body};
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding-left:5vw;

pagination{
    padding-top: 5vw;
}
`

const Card = styled(motion.div) `
width: 15vw;
height: 40vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 2vh 2.5vw;
margin-right: 8vw;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
`

const Title = styled.h2`
font-size: 1.5vw;
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla', sans-serif;
font-weight: 500;
`

const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5vw;
display: flex;
flex-wrap: wrap;
${Card}: hover &{
    border-top: 2px solid ${props => props.theme.text};  
}
`

const Tag = styled.span `
margin-right: 1vw;
font-size: 1vw;
`

const Footer = styled.footer `
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink) `
background-color:${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5vw 3vw;
border-radius: 0 0 0 50px;
font-size: 1.5vw;

${Card}: hover &{
    background-color:${props => props.theme.text};
    color:${props => props.theme.body};
}
` 
const Git = styled(NavLink) `
color: inherit;
text-decoration: none;

${Card}: hover &{
    &>*{
        fill: ${props => props.theme.text};
    }
}
`
const rotate = keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`
const Rotate = styled.span `
display: block;
position: fixed;
right: 2vw;
bottom: 2vh;
width: 80px;
height: 80px;
z-index: 1;
animation: ${rotate} infinite 1.5s linear;
`
const WORK = styled.h1 `
font-family: 'Karla', sans-serif;
font-size: calc(1rem + 15vw);
color:${props => props.theme.text};
position: fixed;
right:0;
top: 0;
padding: 2vh 2.5vw;
margin-right: 2vw;
display:flex;
z-index: 0;
opacity:0.1;
`
//framer-motion
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

const card = {
    hidden: {scale: 0},
    show:{
        scale: 1,
        transition:{
            type: 'spring',
            duration: 0.5,
        }
    }
}

const Projects = () =>{
    return(
    <ThemeProvider theme={darkTheme}>
        <Container variants={container} initial='hidden' animate='show'>
        <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">

        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />

        <Rotate><YinYang width={80} height={80} fill={darkTheme.text} /></Rotate>

        <WORK>WORK</WORK>

            {
                Work.map(item => {
                    return (
                        <SwiperSlide>
                        <Card key={item.id} variants={card} initial='hidden' animate='show'>
                        <Title>{item.name}</Title>
                    <Description>{item.description}</Description>
                    <Tags>
                        {
                            item.tags.map((t, id) => {
                                return <Tag key={id}>#{t}</Tag>
                            })
                        }
                    </Tags>
                    <Footer>
                        <Link to={{pathname: `${item.github}`}} target="_blank" >
                            Check
                        </Link>
                        <Git to={{pathname: `${item.github}`}} target="_blank" >
                            <Github width={30} height={30}/>
                        </Git>
                    </Footer>
                    </Card>
                    </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </Container>
    </ThemeProvider>
    )
}

export default Projects