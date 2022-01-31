import styled from "styled-components";
import { Link } from "react-router-dom";


export const FrameSty = styled.div`
background-color: #152130;
display: flex;
flex-direction: column;
width: 350px;
align-content: center;
border: 2px;
border-radius: 10px;
height: 330px;
margin-left: 20px;
margin-bottom: 20px;
&:hover {
        transform: scale(1.03);
        transition: all .5s ease;
    }
`
export const H5Sty = styled.h5`
color: #8E9097;
margin-top: 10px;
margin-bottom: 0px;
` 
export const H5Sty2 = styled.h5`
color: #8E9097;
margin-top: 0px;
margin-bottom: 0px;
` 

export const H2Sty = styled.h2`
text-transform: uppercase;
margin-top: 6px;
margin-bottom: 6px;
margin-left: 10px;
margin-right: 10px;
`

export const LinkSty = styled(Link)`
text-decoration: none;
color: #ffffff;
box-shadow: inset 0 -3px 0 0 red;
box-shadow: none;
transition: all .3s ease;
&:hover {
        color: #26ddF2;
    }

`

export const ImageSty = styled.img`
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`

export const CenterSty = styled.div`
margin: 0;
position: relative;
top: 17%;
transform: translateY(-50%);
`
