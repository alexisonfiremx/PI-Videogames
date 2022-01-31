import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameDetail } from "../actions";

export default function Detail (props) {
    console.log(props)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGameDetail(props.match.params.id))
    }, [dispatch])

    const DetailFromState = useSelector(state => state.gameDetail)
    return (
        <div>
            <Link to='/home'>
                <button>Back</button>
            </Link>
            {  DetailFromState.length > 0?
                <div>
                    <h1>{DetailFromState[0].name}</h1>
                    <img src={DetailFromState[0].image} alt='Not found' width='700px' height='400px'/>
                    <h3>Description: </h3>
                    <h3>{DetailFromState[0].description.replace(/<\/?[^>]+>/gi, '').replace(/&#39;/g, "'")}</h3>
                    <h3>Released: </h3>
                    <h3>{DetailFromState[0].released}</h3>
                    <h3>Rating: </h3>
                    <h3>{DetailFromState[0].rating}</h3>
                    <h3>Genres: </h3>
                    <h3>{ DetailFromState[0].genres[0].name ?
                            DetailFromState[0].genres.map(el => el.name).join(', ') :
                            DetailFromState[0].genres.join(', ') }
                    </h3>
                    <h3>Platforms: </h3>
                    <h3>{ DetailFromState[0].platforms[0].name ?
                            DetailFromState[0].platforms.map(platforms => platforms.name).join(', ') :
                            DetailFromState[0].platforms.join(', ') }
                    </h3>

                </div> : <p>Loading...</p>
            }
        </div>
    )
}