import React from "react";
import { Emoji, TextError, ButtonError } from "./CardError.elements";


export default function CardError() {
    function handleClick (e) {
        e.preventDefault()
        window.location.reload()
    
}
    return (
        <div>
            <Emoji>(&gt;_&lt;)</Emoji>
            <TextError>Can't find any video games</TextError>
            <ButtonError onClick={ e => {handleClick(e)} }>Try Another Search</ButtonError>
        </div>
    )
}