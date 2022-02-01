import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackStyl = styled.button`
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
padding-top: 4%;
    &:hover{
            cursor:pointer;
            color: #26ddf2;
            transition: all .6s ease
        }
`

export const DivBackH1 = styled.div`
display: flex;
flex-direction: row;
width: 98%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray;
border-radius: 10px; */
`

export const Header1 = styled.h1`
font-size: 50px;
font-family: 'Space Grotesk', sans-serif;
font-weight: bold;
display: flex;
justify-content: center;
margin-top: 1%;
margin-left: 5%;
margin-bottom: 1%;
`

export const SplitScreen = styled.div`
display: flex;
flex-direction: row;
height: 60%;
/* width: 33.5%; */
align-content: center;
/* border: 2px;
border: 2px solid lightgray;
border-radius: 10px; */
margin-left: 0%;
margin-top: 0%;
margin-bottom: 1%;
`
export const LeftContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 100%;
align-content: left;
/* border: 2px;
border: 2px solid red; */
border-radius: 10px;
margin-left: 5%;
`

export const Image = styled.img`
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
export const CardLeft = styled.div`
/* border-top: solid #26ddf2;  
border-width: 3px; */
border-top-left-radius: 0px;
border-top-right-radius: 0px;
background-color: #152130;
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 95%;
align-content: left;
display: inline-block;
text-align: left;
padding-left: 5%;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`

export const CardRight = styled.div`
border-top-left-radius: 0px;
border-top-right-radius: 0px;
background-color: #152130;
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 60%;
align-content: left;
display: inline-block;
text-align: left;
padding-left: 2.5%;
padding-right: 2.5%;
padding-top: 1.5%;
margin-left: 2%;
margin-right: 2%;
border-radius: 10px;
`

export const Subtitles = styled.div`
display: flex;
font-size: 18px;
left: 4%;
color: #8E9097;
margin-top: 2%;
text-align: justify;
`

export const Titles = styled.div`
display: flex;
font-size: 19px;
font-weight: bold;
left: 4%;
color: #ffffff;

`

export const SplitCard = styled.div`
display: flex;
flex-direction: row;
/* width: 33.5%; */
justify-content: left;
/* border: 2px;
border: 2px solid lightgray;
border-radius: 10px; */
margin-left: 0%;
margin-top: 2%;
margin-bottom: 2%;
`

export const MiniLeft = styled.div`
display: flex;
flex-direction: column;
/* border: 2px;
border: 2px solid lightgray;
border-radius: 10px; */
margin-right: 25%;
margin-bottom: 1%;
`

export const MiniRight = styled.div`
display: flex;
width: 50%;
flex-direction: column;
/* border: 2px;
border: 2px solid lightgray;
border-radius: 10px; */
margin-right: 5%;
margin-bottom: 1%;
`