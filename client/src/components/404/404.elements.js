import styled from 'styled-components'

export const H1 = styled.div`
display: inline;
font-size: 300px;
font-weight: bold;
text-align: center;
justify-content: center;
margin-bottom: 1%;
/* margin-left: 10%;
width: 15%; */
`

export const TextError = styled.div`
font-size: 25px;
text-align: center;
justify-content: center;
/* margin-top: 5%;
margin-left: 30%; */
`

export const Header = styled.div`
margin-top: 10%;
`

export const ButtonError = styled.button`
    justify-content: center;
    background: #0D141E;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    /* font-family: 'Space Grotesk', sans-serif; */
    font-size: 15px;
    text-transform: uppercase;
    color: white;
    margin-top: 2px;
    height: 40px;
    width: 10%;
    margin-top: 2%;
    margin-bottom: 5%;
    border: 1.5px solid #8E9097;
    border-radius: 5px;
    
    &:hover {
    cursor: pointer;
    background: linear-gradient(rgb(255, 28, 247) 25%, rgb(178, 73, 248) 100%);
    transition: all .6s linear;
    color: white;
    border: none;
    
    }
`