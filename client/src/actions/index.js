import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const FILTER_GAMES_BY_GENRE = 'FILTER_GAMES_BY_GENRE';
export const FILTER_CREATED_OR_EXIST = 'FILTER_CREATED_OR_EXIST';
export const SORT_ALPHABETICALLY = 'SORT_ALPHABETICALLY';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_ALL_PLATFORMS = 'GET_ALL_PLATFORMS';
export const GET_GAME_DETAIL = 'GET_GAME_DETAIL';
export const POST_GAME = 'POST_GAME';

export function getAllGames() {
    try {
        return async function (dispatch) {
            var json = await axios.get('http://localhost:3001/videogames');
            return dispatch({
                type: GET_ALL_GAMES,
                payload: json.data
            })
        }
    } catch (error) {
        console.log(error)
    }
} 

export function getGamesByName(name) {
    try {
        return async function(dispatch) {
            var json = await axios(`http://localhost:3001/videogames?name=${name}`)
            return dispatch ({
                type: GET_GAMES_BY_NAME,
                payload: json.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function getGameDetail(id) {
    try {
        return async function(dispatch) {
            var json = await axios(`http://localhost:3001/videogame/${id}`)
            return dispatch ({
                type: GET_GAME_DETAIL,
                payload: json.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function getAllGenres () {
    try {
        return async function(dispatch) {
            var json = await axios(`http://localhost:3001/genres`)
            console.log(json)
            return dispatch ({
                type: GET_ALL_GENRES,
                payload: json.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function getAllPlatforms() {
    try {
        return async function(dispatch) {
            var json = await axios(`http://localhost:3001/platforms`)
            console.log(json)
            return dispatch ({
                type: GET_ALL_PLATFORMS,
                payload: json.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export function postNewGame (payload) {
    return async function(dispatch) {
        var json = await axios.post(`http://localhost:3001/videogame`, payload)
        console.log(json)
        return json
    }
}

export function filterGamesByGenre(payload) {
    console.log(payload)
    return {
        type: FILTER_GAMES_BY_GENRE,
        payload
    }
}

export function filterCreatedOrExist(payload) {
    return {
        type: FILTER_CREATED_OR_EXIST,
        payload
    }
}

export function sortAlphabetically(payload) {
    return {
        type: SORT_ALPHABETICALLY,
        payload
    }
}
export function sortByRating(payload) {
    return {
        type: SORT_BY_RATING,
        payload
    }
}
