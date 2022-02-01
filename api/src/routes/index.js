const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
// const {API_KEY} = process.env;
const apiKey = "585ed80f88a44717877443065a3c6ab2"
const { Videogame, Genre, Platform} = require('../db');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const getAPIinfo = async () => {
    var gets = [1, 2, 3, 4].map (async (e) => await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=25&page=${e}`))
    // await console.log('------------------------------------------> gets', gets)
    let allGets = await Promise.all(gets)
    // await console.log('------------------------------------------> allGets', allGets)
    let apiURL = allGets.reduce( (prev,curr) => {
            return prev.concat(curr.data.results);
        },[ ]
    );

    const apiDATA = apiURL.map(el =>{
            return {
                id: el.id,
                name: el.name,
                image: el.background_image,
                rating: el.rating,
                genres: el.genres.map( el => el.name), // para retornar cada elemento del arreglo de generos
                platforms: el.platforms.map( el => el.platform.name) // para retornar cada elemento del arreglo de generos
                
            }
        })

    // console.log('-----------------------------------------------------> apiDATA',apiDATA)





    // var response = {};
    // let promises = [1,2,3,4].map( async (e) => await axios.get(
    //     `https://api.rawg.io/api/games?key=${apiKey}&page_size=25&page=${e}`
    // ));
    // console.log('Axios: [OK] Full List recieved.');
    // // We process the 4 responses here 
    // response = await Promise.all(promises);
    // // We need to put them together in the same array, too.
    // response = response.reduce( 
    //     (prev,curr) => {
    //         return prev.concat(curr.data.results);
    //     },
    //     [] // initial value: empty array
    // );
    // await console.log('------------------------------------------> response', response)






        
    // const apiURL = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=25&page=`)
    // const apiDATA = await apiURL.data.results.map(el =>{
    //     return {
    //         id: el.id,
    //         name: el.name,
    //         image: el.background_image,
    //         rating: el.rating,
    //         genres: el.genres.map( el => el.name), // para retornar cada elemento del arreglo de generos
    //         platforms: el.platforms.map( el => el.platform.name) // para retornar cada elemento del arreglo de generos
            
    //     }
    // })
    // console.log('leeeeength------------------------------------------->',apiDATA.length)

    return apiDATA
}

const getDBinfo = async () => {
    return await Videogame.findAll({
        include: [{
            model: Genre,
            attributes: ['name'],
            through : {
                attributes: [],
            },
            
        }, {
            model: Platform,
            attributes: ['name'],
            through : {
                attributes: [],
            }
        }]
    })
}

const getAllGames = async () => {
    const APIinfo = await getAPIinfo();
    const DBinfo = await getDBinfo();
    const infoTotal = APIinfo.concat(DBinfo)
    return infoTotal
}

router.get('/videogames', async (req, res)=>{
    const {name} = req.query
    let allGames = await getAllGames();
    if(name){
        let foundGame = allGames.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        if(foundGame.length) {
            res.status(200).send(foundGame)
        } else {
            res.status(404).send('Sorry, game not found')
        }
    } else {
        res.status(200).send(allGames)
    }
})

router.get('/genres', async (req, res)=> {
    const apiURL2 = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`)
    const apiGenre= await apiURL2.data.results.map(el => el.name)

    apiGenre.forEach(el => {
        Genre.findOrCreate({
            where : {
                name: el
            }
        })
    });
    const allGenres = await Genre.findAll()
    res.status(200).send(allGenres)

})

router.get('/platforms', async (req, res)=> {
    const apiURL3 = await axios.get(`https://api.rawg.io/api/platforms?key=${apiKey}`)
    const apiPlatf = await apiURL3.data.results.map(el => el.name)
    apiPlatf.forEach( el => {
        Platform.findOrCreate({
            where : {
                name: el
            }
        })
    });
    const allPlatf = await Platform.findAll();
    res.status(200).send(allPlatf)
})

router.post('/videogame', async (req, res) => {
    const { name, description, released, rating, createdAtDb, genres, platforms, image} = req.body
    const vidGameCreated = await Videogame.create({
        name, description, released, rating, createdAtDb, image
    })
    let genreDB = await Genre.findAll({
        where: {
            name: genres
        }
    })
    
    vidGameCreated.addGenre(genreDB)

    let platformDB = await Platform.findAll({
        where: {
            name: platforms
        }
    })
    vidGameCreated.addPlatform(platformDB)
    res.send('Videogame created succesfully')
})

// router.get('/videogames/:idVideogame', async (req, res) => {
//     const {idVideogame} = req.params
//     const allGames = await getAllGames();
//     if(idVideogame) {
//         const gameFoundById =  await allGames.filter(el => el.id == idVideogame);
//         gameFoundById.length ? 
//         res.status(200).send(gameFoundById) :
//         res.status(404).send('Did not find game by Id')

//     }
// })

router.get('/videogame/:id', async (req, res)=> {
    const {id} = req.params
    if(!id.includes('-')) {
        const detail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
        const thisIsData = await detail.data
        let formated = [{
            id: thisIsData.id,
            name: thisIsData.name,
            description: thisIsData.description,
            image: thisIsData.background_image,
            released: thisIsData.released,
            rating: thisIsData.rating, 
            genres: thisIsData.genres.map( el => el.name),
            platforms: thisIsData.platforms.map( el => el.platform.name)
        }]
        formated.length ?
        res.status(200).json(formated) :
        res.status(404).send('Did not find game by Id')
    }
    else {
        const dataDB = await getDBinfo();
        const gameById =  await dataDB.filter(el => el.id == id)
        gameById.length ?
        res.status(200).send(gameById) :
        res.status(404).send('Did not find game by Id')
    }
})

module.exports = router;
