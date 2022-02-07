import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { getGamesByName, clearStateVideogames } from "../../actions";
import { InputStyl, ButtonSearchStyl, ImageStyle, InitialsStyl, ParentElement, BackgroundImg } from "./Searchbar.elements";
import Logo from '../../img/INFINITE_mini.png'

export default function SearchBar({setCurrentPage, setHeader}){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    
    function handleInputOnChange(e) {
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
        
    }

    function handleOnSubmit (e){
        e.preventDefault();
        dispatch(clearStateVideogames()) 
        dispatch(getGamesByName(name)) 
        setName('');
        setHeader(`Search Results for “${e.target.value}”`)
        setCurrentPage(1)
    }

    function handleOnKeyPress(e){
        if(e.key === 'Enter'){
            handleOnSubmit(e)
        }
    }

    return (
        <ParentElement >
            {/* <InitialsStyl>M. GAMES</InitialsStyl> */}
            <img src={Logo} alt="Logo" height='80px' width='220px' />
            <InputStyl value={name} type='text' placeholder='Search games by name...' onChange={e =>  handleInputOnChange(e)} onKeyPress={ e=>handleOnKeyPress(e)} />
            <ButtonSearchStyl type='sumbit' onClick={e => handleOnSubmit(e)} ><ImageStyle src={require("../../img/magnifying-glass.png")}/></ButtonSearchStyl>
        </ParentElement>
    )
}