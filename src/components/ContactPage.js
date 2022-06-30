import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled, { keyframes, ThemeProvider } from "styled-components"
import {darkTheme} from "./Theme"
import {motion} from 'framer-motion'
import { YinYang } from '../components/AllSvgs';

import SocialIcons from "../subComponents/SocialIcons"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"




const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow:hidden;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Main = styled(motion.div) `
border: 2px solid ${props => props.theme.text};
border-radius: 20px;
color: ${props => props.theme.text};
padding: 2vw;
margin-top: 3vh;
width: 50vw;
height: 70vh;
z-index: 3;
line-height: 1.5;

font-family: 'Ubuntu Mono', monospace;
font-size: calc(0.6rem + 1vw);
font-weight: 600;

display: flex;
justify-content: space-between;
flex-direction: column;
position: absolute;
left: 20%;
right:20%;
top: 10%;
`
const ContactForm = styled.form `
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
width:100%;
height: 100%;

&>*:nth-child(2){
    margin-top: 4vh;
}
&>*:nth-child(3){
    margin-top: 3vh;
}
`

const InputAreaName = styled.input.attrs({placeholder: 'Name'}) `
width: 100%;
height: 7vh;
padding: calc(1vw+ 2rem);

outline: none;
border: 1px solid ${props => props.theme.body};
border-radius: 5px;

&:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
}
`
const InputAreaEmail = styled.input.attrs({placeholder: 'Email'}) `
width: 100%;
height: 7vh;
padding: calc(1vw+ 2rem);

outline: none;
border: 1px solid ${props => props.theme.body};
border-radius: 5px;

&:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
}
`

const Message = styled.textarea.attrs({placeholder: 'Message'})`
max-width: 100%;
min-width: 100%;
width: 100%;
max-height: 40vh;
min-height: 40vh;
outline: none;
border: 1px solid ${props => props.theme.body};
border-radius: 5px;

&:focus {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
}
`

const MessageInput = styled.input.attrs({ type: 'submit' }) `
margin-top: 1rem;
cursor: pointer;
color: ${props => props.theme.body};
border:none;
background: ${props => props.theme.text};

width: 30%;
height:5vh;

position:absolute;
left:50%;
right:50%;
transform: translate(-50%, 0);
border: 2px solid ${props => props.theme.text};
border-radius: 10px;

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

const ResponseMessage = styled.div `
color: ${props => props.theme.text};
padding: 2vw;
width: 20vw;
height: 10vh;
z-index: 5;

font-family: 'Ubuntu Mono', monospace;
font-size: calc(1rem + 1vw);
font-weight: 600;

display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:50%;
bottom: 50%;
right:0;
`

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


const ContactPage = () => {

    const form = useRef();
    const [click, setClick] = useState(false);

    const handleClick = ()=> setClick(!click);

    const sendEmail = () => {

  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const Submit = (event) => {
        event.preventDefault();
        handleClick();
        sendEmail();
    }

  return (
    <ThemeProvider theme={darkTheme}>
        <Box variants={container} initial='hidden' animate='show'>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <Rotate><YinYang width={80} height={80} fill={darkTheme.text} /></Rotate>

        <Main click={click} variants={main} initial='hidden' animate='show'>
            <ContactForm ref={form} onSubmit={Submit}>
                <InputAreaName type="text" name="user_name" required />
                <InputAreaEmail type="email" name="user_email" required/>
                <Message name="message" required/>
                <MessageInput value="Send"/>

            </ContactForm>
            
        </Main>
        {click ? <ResponseMessage>Thank you for your message </ResponseMessage> : null}
    </Box>
    </ThemeProvider>
  )
}

export default ContactPage