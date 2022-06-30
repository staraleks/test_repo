import React from "react"
import styled from "styled-components"
import { darkTheme } from "../components/Theme"

const Logo = styled.h1`
display:inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family: 'Pacifico', cursive ;

position:fixed;
left:2vw;
top: 2vh;
z-index: 3;

`

const LogoComponent = (props) =>{
    return (
        <Logo color={props.theme}>
            Negaflaneur
        </Logo>
    )
}

export default LogoComponent