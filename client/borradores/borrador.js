const array = [{
"id": 17822,
"name": "The Witcher: Enhanced Edition Director's Cut",
"image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
"rating": 4.06,
"genres": [
    "Action",
    "RPG"
],
"platforms": [
    "PC",
    "macOS"
]
},
{
"id": 4427,
"name": "BioShock 2",
"image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
"rating": 4.06,
"genres": [
    "Action",
    "Shooter"
],
"platforms": [
    "PlayStation 4",
    "Xbox One",
    "Nintendo Switch",
    "PC",
    "macOS",
    "Xbox 360",
    "PlayStation 3"
]
},
{
"id": 19710,
"name": "Half-Life 2: Episode One",
"image": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
"rating": 4.39,
"genres": [
    "Action",
    "Shooter"
],
"platforms": [
    "Linux",
    "PC",
    "Xbox 360",
    "Android",
    "macOS"
]
},
{
"id": "baea7b39-84a9-45b0-89d7-cd7880072c90",
"name": "Chrono Trigger: Crimson Echoes",
"description": "Best sequel ever",
"released": "1995-08-08",
"rating": "5.0",
"createdAtDb": true,
"image": "https://www.chronocompendium.com/images/wiki/1/16/CE_5.jpg",
"genres": [
    {
    "name": "RPG"
    },
    {
    "name": "Indie"
    }
],
"platforms": [
    {
    "name": "SNES"
    },
    {
    "name": "Nintendo 3DS"
    }
]
},
{
"id": "9e513c1a-d1d5-4f78-a73a-cf05786c46ce",
"name": "Chrono Trigger: Flames of Eternity",
"description": "Second best sequel ever",
"released": "1996-08-09",
"rating": "4.8",
"createdAtDb": true,
"image": "https://i.ytimg.com/vi/mk0Byh5lckQ/hqdefault.jpg",
"genres": [
    {
    "name": "RPG"
    }
],
"platforms": [
    {
    "name": "SNES"
    },
    {
    "name": "Nintendo 3DS"
    }
]
},
{
"id": "3706c0ef-d495-458e-9e13-46a69e648942",
"name": "Chrono Cross 2",
"description": "Best sequel ever",
"released": "1995-08-08",
"rating": "4.0",
"createdAtDb": true,
"image": "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/12/Chrono-Cross-Another-Eden-Crossover-Photo.jpg",
"genres": [
    {
    "name": "RPG"
    }
],
"platforms": [
    {
    "name": "PC"
    }
]
},
{
"id": "d0173fdd-3247-417c-80ca-0ed423e17765",
"name": "The Legend of Zelda: Sacred Paradox",
"description": "Fan made",
"released": "1996-08-09",
"rating": "5.0",
"createdAtDb": true,
"image": "https://i.pinimg.com/600x315/4c/4d/18/4c4d187bf557c55c1ed7bf49973e0843.jpg",
"genres": [
    {
    "name": "Platformer"
    }
],
"platforms": [
    {
    "name": "Nintendo Switch"
    }
]
}
]

const guardar = array.filter(el => el.genres.includes('Shooter'))
console.log(guardar)

const guardar2 = array.filter(el => el.genres[0].name === 'RPG' )
console.log(guardar2)

// el.genres.filter(el => el.name  === 'rpg')


const unite = guardar.concat(guardar2)
console.log(unite)





// const guardar3 = array.filter(el => (el.genres.map(el => el.name.includes('RPG'))) === true? el)







const genres =  [{ "name": "RPG"}, {"name": "Indie"}]

const marcosforeach = genres.filter(el => el.name === 'RPG')
console.log(marcosforeach)

const nuevo1 = marcosforeach.

console.log()
