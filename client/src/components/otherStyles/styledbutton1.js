import styled from "styled-components";

export const SecondaryButton = styled.button`
    background: linear-gradient(180deg, #26ddF2 10%, #152130 101%);
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    /* font-family: 'Space Grotesk', sans-serif; */
    font-size: 15px;
    text-transform: uppercase;
    color: white;
    margin-top: 2px;
    margin-bottom: 4px;
    height: 40px;
    width: 100%;
    margin-top: 2%;
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
    border: 1.5px solid #8E9097;
    }
`