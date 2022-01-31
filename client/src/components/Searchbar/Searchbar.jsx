import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { getGamesByName } from "../../actions";
import { InputStyl, ButtonSearchStyl, ImageStyle, InitialsStyl, ParentElement } from "./Searchbar.elements";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    
    function handleInputOnChange(e) {
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
        
    }

    function handleOnSubmit (e){
        e.preventDefault();
        dispatch(getGamesByName(name)) 
        setName('')
    }

    function handleOnKeyPress(e){
        if(e.key === 'Enter'){
            handleOnSubmit(e)
        }
    }

    return (
        <ParentElement >
            <InitialsStyl>M. GAMES</InitialsStyl>
            <InputStyl value={name} type='text' placeholder='Search games by name...' onChange={e =>  handleInputOnChange(e)} onKeyPress={ e=>handleOnKeyPress(e)} />
            <ButtonSearchStyl type='sumbit' onClick={e => handleOnSubmit(e)} ><ImageStyle src={require("../../img/magnifying-glass.png")}/></ButtonSearchStyl>
        </ParentElement>
    )
}