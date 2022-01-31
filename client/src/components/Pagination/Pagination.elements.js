import styled from "styled-components";

export const CenterVSty = styled.ul`
display: flex;
padding-left: 18%;
margin-bottom: 1.2%;
list-style: none;
font-size: 18px;
`

export const LiSty = styled.li`
display: inline;

`

export const ButtonSty = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
outline: inherit;
font-size: 18px;
margin-left: 18px;
margin-right: 15 px;
color: #8E9097;
&:focus {
    color: #26ddF2;
    font-weight: bold;
}
&:hover {
        cursor: pointer;
        color: #26ddF2;
        font-weight: bold;
    }
` 