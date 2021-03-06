import styled from 'styled-components'

export const Emoji = styled.div`
font-size: 200px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
text-align: center;
justify-content: center;
margin-left: 60%;
width: 100%;
`

export const TextError = styled.div`
position: absolute;
display: flex;
font-size: 25px;
text-align: center;
justify-content: center;
margin-top: 5%;
margin-left: 30%;
`

export const ButtonError = styled.button`
    display: block;
    position: fixed;
    background: linear-gradient(180deg, #26ddF2 10%, #152130 101%);
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    /* font-family: 'Space Grotesk', sans-serif; */
    font-size: 15px;
    text-transform: uppercase;
    color: white;
    margin-top: 2px;
    margin-bottom: 4px;
    margin-left: 27%;
    height: 40px;
    width: 10%;
    margin-top: 7%;
    margin-bottom: 5%;
    border-color: none;
    border-radius: 5px;
    border: none;
       
    &:hover {
    cursor: pointer;
    background: #0D141E;
    transition: all .6s linear;
    color: white;
    border: 1.5px solid #8E9097;
    }
`