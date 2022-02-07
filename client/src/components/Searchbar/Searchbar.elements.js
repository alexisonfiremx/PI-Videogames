import styled from "styled-components";

export const ParentElement = styled.div`
    width: 98.5%;
    height: 90px;
    white-space: nowrap;
    overflow-x: auto;
    display: flex;
    justify-content: left;
    margin-top: 1.8%;
    margin-left: 1.5%;
`

export const InitialsStyl = styled.div`
bottom: 10px;
font-size: 35px;
font-family: 'Bangers', sans-serif;
color: #26ddf2;
display: inline-block;
justify-content: left;
padding-right: 1.5%;
`

export const InputStyl = styled.input`
background-color: #152130;
font-size: 20px;
font-family: 'Space Grotesk', sans-serif;
font-weight: bold;
color: #fff;
display: inline-block;
justify-content: left;
width: 48%;
border: 2px;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
border-color: #26ddf2;
height: 40px;
margin-top: 0.8%;
margin-left: 1%;
padding-left: 1.5%;

&:focus {
    outline: none;
}

&:focus::placeholder{
    color: transparent;
}
`


export const ButtonSearchStyl = styled.button`
background-color: #152130;
font-size: 20px;
font-family: 'Space Grotesk', sans-serif;
font-weight: bold;
color: black;
width: 3%;
display: inline-block;
justify-content: left;
border: 2px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-color: #26ddf2;
height: 42px;
bottom: 10px;
margin-top: 0.8%;

&:hover{
    cursor:pointer;
}

&:focus {
    outline: none;
}

&:focus::placeholder{
    color: transparent;
}
`

export const ImageStyle = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
` 
