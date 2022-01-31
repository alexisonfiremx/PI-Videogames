import styled from "styled-components";
import { Link } from "react-router-dom";
import img from '../../img/LANDING011.jpg'
import img2 from '../../img/example.jfif'

export const ButtStyl = styled.button`
background: linear-gradient(180deg, #26ddF2 10%, #152130 101%);
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    color: white;
    height: 50px;
    width: 35%;
    margin-top: 8%;
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
`

export const H1Styl = styled.h1`
font-size: 500%;
font-family: 'Space Grotesk', sans-serif;
font-weight: bold;
display: flex;
text-align: left;
justify-content: left;
padding-left: 3%;
margin-top: 1%;
margin-bottom: 0.5%;
`

export const H3Styl = styled.h3`
font-size: 200%;
font-weight: lighter;
font-family: 'Space Grotesk', sans-serif;
display: flex;
padding-left: 3%;
text-align: left;
justify-content: left;
margin-top: 1%;
margin-bottom: 0.5%;
`

export const LinkHome = styled(Link)`
padding-left: 3%; 
display: flex;
&:visited{
    text-decoration: none;
}
&:link{
    text-decoration: none;
}

`

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 33%;
height: 100%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray; */
border-radius: 10px;
margin-top: 10%;
margin-left: 3%;
margin-bottom: 12%;

`

export const Background = styled.div`
border: 1px solid #000;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;


`

