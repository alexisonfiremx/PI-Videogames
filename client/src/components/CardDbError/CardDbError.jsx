import React from "react";
import { Link } from 'react-router-dom';
import { Emoji, TextError, ButtonError } from "./CardDbError.elements";


export default function CardDbError() {

    return (
        <div>
            <Emoji>( ͠° ͟ʖ ͡°)</Emoji>  
            <TextError>No video games created yet</TextError>
            <Link to='/videogame'>
            <ButtonError >Create One</ButtonError>
            </Link>
        </div>
    )
}