import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames , filterGamesByGenre, filterCreatedOrExist, sortAlphabetically, sortByRating, getAllGenres} from '../../actions';
import { Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination';
import SearchBar from '../Searchbar/Searchbar';
import { SecondaryButton } from '../otherStyles/styledbutton1';
import { MenuDivSty, ContainerGral, ContainerCard, SelectorSty, OptionStyl, LabelStyl, H1Styl } from './Home.elements';


export default function Home( ) {
    const dispatch = useDispatch() // para despachar acciones y sustitute al mapDispatchToProps
    const allVideogamesfromState = useSelector(state => state.videogames) // almacena todo lo que se encuentra en el estado de 'Videogames'
    const allGenres = useSelector(state => state.genres)
    // useSelector sustituye a mapStateToProps.
    const [currentPage, setCurrentPage ] = useState(1);
    const [sort, setSort] = useState('') 
    const [vgPerPage, setVgPerPage] = useState(15)
    const indexOfLastVg = currentPage * vgPerPage //1 * 15 = 15
    const indexOfFirstVg = indexOfLastVg - vgPerPage // 15 - 15 = 0
    const currentVg = allVideogamesfromState.slice(indexOfFirstVg, indexOfLastVg)
    // Example for currentVg if position in page 2 = (60).slice((30-15),(2*15))
                                                //   (60).slice(15,30)
                                                // esto significa que mostrará los VG desde el 15 al 29
                                                // lo que resulta en un total de 15 videojuegos

    // Example for currentVg if position in page 1 = (60).slice((15-15),(1*15))
                                                //   (60).slice(0,15)
                                                // esto significa que mostrará los VG desde el 0 al 14
                                                // lo que resulta en un total de 15 videojuegos

    const pageNow = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //Para traernos los 'videogames' del 'state.videogames' cuando el componente 'Home' se carga, usamos useEffect.
    useEffect ( ()=> {
        dispatch(getAllGames());
    },[dispatch])
    
    //Para traernos los 'genres' del 'state.genres' cuando el componente 'Home' se carga, usamos useEffect.
    useEffect ( ()=> {
        dispatch(getAllGenres());
    },[dispatch])
    
    function handleClick (e) {
            e.preventDefault()
            window.location.reload()
        
    }
    
    function handleGenreFilter(e){
        dispatch(filterGamesByGenre(e.target.value))
        setCurrentPage(1);
    }
    
    function handlefilterCreatedOrExist(e){
        dispatch(filterCreatedOrExist(e.target.value))
        setCurrentPage(1);
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(sortAlphabetically(e.target.value))
        setCurrentPage(1);
        setSort(`Sorted by ${e.target.value}`) // se agrega estado local 'Sort' para que se pueda renderizar el ordenamiento desde la página 1
    }
    function handleSort2(e){
        e.preventDefault();
        dispatch(sortByRating(e.target.value))
        setCurrentPage(1);
        setSort(`Sorted by ${e.target.value}`) // se agrega estado local 'Sort' para que se pueda renderizar el ordenamiento desde la página 1
    }

    return (
        <div>
            
            <SearchBar></SearchBar>
            <H1Styl>Explore all the Games</H1Styl>
            <Pagination
                vgPerPage={vgPerPage}
                allVideogamesfromState={allVideogamesfromState.length}
                pageNow={pageNow}
            />
            <ContainerGral>
                <MenuDivSty>
                    
                    <p>
                        <LabelStyl>Sort by:</LabelStyl>
                        <SelectorSty onChange={e => handleSort2(e)}>
                            <OptionStyl hidden value='Select'> Rating </OptionStyl>
                            <OptionStyl value='des'> Higher to Lower </OptionStyl>
                            <OptionStyl value='asc'> Lower to Higher </OptionStyl>
                        </SelectorSty>

                        <SelectorSty onChange={e => handleSort(e)}>
                            <OptionStyl hidden value='Alphabetically'> Alphabetically </OptionStyl>
                            <OptionStyl value='a-z'> A to Z </OptionStyl>
                            <OptionStyl value='z-a'> Z to A </OptionStyl>
                        </SelectorSty>
                    </p>
                    <p>
                        <LabelStyl>Filter by: </LabelStyl>
                        <SelectorSty onChange={e => handleGenreFilter(e)}>
                            <OptionStyl hidden value='Genre'> Genre </OptionStyl>
                            <OptionStyl value='All'> All </OptionStyl>
                        { allGenres?.map(el => (
                            <OptionStyl key={el.id} value={el.name}>{el.name}</OptionStyl>
                            ))
                        }
                        </SelectorSty>

                        <SelectorSty onChange={e=> handlefilterCreatedOrExist(e)} >
                            <OptionStyl hidden value='Origin'> Origin </OptionStyl>
                            <OptionStyl value='All'> All </OptionStyl>
                            <OptionStyl value='created'> Created (DB) </OptionStyl>
                            <OptionStyl value='existent'> Existent (API) </OptionStyl>
                        </SelectorSty>
                    </p>
                    <p>
                        <LabelStyl>Other actions: </LabelStyl>
                        <SecondaryButton onClick={ e => {handleClick(e)} }>Reset Results</SecondaryButton>
                        <Link to='/videogame'>
                            <SecondaryButton>Create Videogame</SecondaryButton>
                        </Link>
                    </p>
                </MenuDivSty>


                <ContainerCard>
                    { currentVg?.map(el => {
                        return (
                            <div key={parseInt(el.id)}>
                                    <Card name={el.name} image={el.image} rating={el.rating} genres={el.genres} id={el.id} />
                                </div>
                            )
                        })
                        
                    }
                </ContainerCard>
            </ContainerGral>
        </div>
    )
}