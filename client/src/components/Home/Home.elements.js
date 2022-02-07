import styled from "styled-components";

export const MenuDivSty = styled.div`
background-color: #152130;
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 13%;
align-content: center;
display: inline-block;
border: 2px;
border-radius: 10px;
height: 500px;
padding-top: 1.5%;
padding-left: 1.5%;
padding-right: 1.5%;

`

export const ContainerGral = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 98%;
align-content: center;
/* border: 2px;
border: 2px solid lightgray; */
border-radius: 10px;
margin-left: 20px;
margin-bottom: 20px;
`

export const ContainerCard = styled.div`
position: absolute;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: flex-start;
left: 16%;
height: 100%;
width: 80%;
/* border: 2px;
border: 2px solid lightgray;
border-radius: 10px; */
margin-left: 20px;
margin-bottom: 20px;
`

export const ContainerLoader = styled.div`
width: 90%;
margin-top: 7%;
`

export const SelectorSty = styled.select`
background-color: #1a2433;
font-family: 'Roboto Condensed', sans-serif;
font-size: 15px;
font-weight: bold;
text-transform: uppercase;
color: #ffffff;
border: 1px solid #8E9097;
border-radius: 5px;
height: 35px;
width: 100%;
padding-left: 4%;
margin-top: 2%;
margin-bottom: 5%;
cursor: inherit;
line-height: inherit;
outline: none;
text-align: left;
vertical-align: top;
&:hover {
    cursor: pointer;
    }
`

export const OptionStyl = styled.option`
font-family: 'Roboto Condensed', sans-serif;
font-size: 15px;
font-weight: bold;
text-transform: uppercase;
background: #1a2433;
`

export const LabelStyl = styled.label`
position: relative;
display: flex;
font-size: 14px;
font-weight: bold;
bottom: 10%;
left: 4%;
color: #8E9097;
`

export const H1Styl = styled.h1`
font-size: 60px;
font-family: 'Space Grotesk', sans-serif;
font-weight: bold;
display: flex;
justify-content: left;
padding-left: 18%;
margin-top: 1%;
margin-bottom: 0.5%;
`