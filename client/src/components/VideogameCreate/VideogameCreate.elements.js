import styled from "styled-components";
import { Link } from "react-router-dom";
import img from '../../img/CONTROL1.jpg'
import img2 from '../../img/magnifying-glass.png'

export const BackStyl = styled.button`
margin-top: 2%;
margin-left: 2%;
background: none;
border: none;
padding: 0;
outline: inherit;
font-size: 37px;
font-family: 'Space Grotesk', sans-serif;
font-weight: bold;
color: white;
width: 3%;
display: flex;
position: absolute;
top: 2%;
justify-content: left;
height: 42px;

    &:hover{
        cursor:pointer;
        color: #26ddf2;
        transition: all .6s ease
    }
    &:focus {
        outline: none;
    }
`
export const LinkBack = styled(Link)`
color: white;
display: flex;
justify-content: left;
margin-left: 5%;
margin-top: 2%;
    &:hover{
            cursor:pointer;
            color: #26ddf2;
            transition: all .6s ease
        }
`

export const Header = styled.div`
margin-top: 10%;
display: inline;
`

export const Header1 = styled.h1`
font-size: 50px;
font-family: 'Space Grotesk', sans-serif;
font-weight: bold;
justify-content: center;
margin-top: 15%;
margin-bottom: 0%;
display: inline;
`

export const Form = styled.form`
border-top: solid #26ddf2;  
border-width: 3px;
border-top-left-radius: 0px;
border-top-right-radius: 0px;
background-color: #152130;
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 30%;
align-content: center;
display: inline-block;
position: fixed;
left: 33%;
margin-top: 1%;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
padding-bottom: 3%;
padding-top: 1.5%;
padding-left: 1.5%;
padding-right: 1.5%;
/* border: 2px;
border: 2px solid lightgray; */
`

export const LabelStyle = styled.label`
display: flex;
font-size: 14px;
left: 4%;
color: #8E9097;
margin-top: 2%;
`
export const InputForm = styled.input`
background-color: #1a2433;
font-family: 'Roboto Condensed', sans-serif;
font-size: 15px;
color: #ffffff;
border: 1px solid #8E9097;
border-radius: 2px;
height: 30px;
width: 98%;
padding-left: 2%;
margin-top: 2%;
margin-bottom: 0.5%;
cursor: inherit;
line-height: inherit;
outline: none;
text-align: left;
vertical-align: top;

`

export const InputDesc = styled.input`
background-color: #1a2433;
font-family: 'Roboto Condensed', sans-serif;
font-size: 15px;
color: #ffffff;
border: 1px solid #8E9097;
border-radius: 2px;
height: 30px;
width: 98%;
padding-left: 2%;
margin-top: 2%;
margin-bottom: 0.5%;
cursor: inherit;
line-height: inherit;
outline: none;
text-align: justify;
vertical-align: top;

`

export const SelectorForm = styled.select`
background-color: #1a2433;
font-family: 'Roboto Condensed', sans-serif;

color: #ffffff;
border: 1px solid #8E9097;
border-radius: 5px;
height: 30px;
width: 100%;
padding-left: 2%;
margin-top: 2%;
margin-bottom: 1%;
line-height: inherit;
outline: none;
text-align: left;
font-size: 15px;
`


export const InputShort = styled.input`
background-color: #1a2433;
font-family: 'Roboto Condensed', sans-serif;
font-size: 15px;
color: #ffffff;
border: 1px solid #8E9097;
border-radius: 2px;
height: 30px;
width: 90%;
padding-left: 2%;
margin-top: 2%;
margin-bottom: 2%;
cursor: inherit;
line-height: inherit;
outline: none;
text-align: justify;
vertical-align: top;
display: flex;
`

export const ContainerofTwo = styled.div`
display: flex;
flex-direction: row;
width: 98%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray; */
border-radius: 10px;

`
export const ContainerofOne = styled.div`
display: flex;
flex-direction: column;
width: 60%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray; */
border-radius: 10px;
margin-top: 2%;

`
export const Container3 = styled.div`
display: flex;
flex-direction: row;
width: 98%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray; */
border-radius: 10px;

`
export const Container4 = styled.div`
display: flex;
flex-direction: column;
height: 60%;
width: 33.5%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray; */
border-radius: 10px;
margin-top: 1%;
margin-bottom: 1%;

`

export const SecondaryButton = styled.button`
    background: linear-gradient(180deg, #26ddF2 10%, #152130 101%);
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    color: white;
    height: 40px;
    width: 100%;
    margin-top: 2.5%;
    margin-bottom: 5%;
    padding-left: 3%;
    padding-right: 3%;
    border-color: none;
    border-radius: 5px;
    border: none;
    &:hover {
    cursor: pointer;
    background: #0D141E;
    transition: all .6s linear;
    color: white;
    border: 0.1px solid #8E9097;
    }
    &:disabled{
        pointer-events: none;
        cursor: none;
        background: lightgray;
    }
`

export const Container5 = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 98%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray; */
border-radius: 10px;
justify-content: left;
margin-top: 3%;
`
export const Container6 = styled.div`
display: flex;
flex-direction: row;
/* background: #0D141E; */
height: 60%;
align-content: center;
/* border: 2px;
border: 2px #0D141E; */
border-radius: 10px;
margin-top: 2%;
margin-bottom: 2%;
margin-left: 2%;
margin-right: 2%;
font-size: 13px;
`

export const MiniButton = styled.button`
    background: linear-gradient(180deg, #26ddF2 10%, #152130 101%);
    font-family: 'Arial', sans-serif;
    justify-content: center;
    font-weight: bold;
    height: 20px;
    width: 20px;
    color: white;
    border-color: none;
    border: none;
    margin-left: 5%;
    margin-right: 10%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
    cursor: pointer;
    background: #0D141E;
    transition: all .6s linear;
    color: white;
    border: 1.5px solid #8E9097;
    }
`

export const AlertStyl =  styled.div`
margin-top: 0.5%;
display: flex;
flex-wrap: nowrap;
text-align: left;
color: red;
font-size: 14px;
`

export const BackgroundImg = styled.div`
/* border: 2px;
border: 2px solid lightgray; */
display: flex ;
position: fixed;
left: 66%;
top: 48%; 
background-image: url(${img});
background-size: cover;
height: 400px;
width: 600px;

`