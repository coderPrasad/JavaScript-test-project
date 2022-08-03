const SUPERHERO_TOKEN = "1209600679581634"
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHeroButton = document.getElementById("newImageButton")
const heroImageDiv = document.getElementById("heroImage")
const searchButton = document.getElementById("searchButton")
const searchInput = document.getElementById("searchInput")
const superHeroName = document.getElementById("displayName")
const powerStats = document.getElementById("powerStat")

const statToEmoji = {
    intelligence: "👀",
    strength: "💪",
    speed: "🚲",
    durability: "🎫",
    power: "🎰",
    combat: "🎿"

}

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
     .then(response => response.json())
     .then(json => {
        console.log(json.powerstats)
        const superHero = json
        showHeroInfo(superHero)
     })
}

const showHeroInfo = (character) => {

    const name = `${character.name}`
    const img = `<img src= "${character.image.url}" height=300 width= 300/>`
    
    
    const stats = Object.keys(character.powerstats).map(stat =>{
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join("")

    superHeroName.innerText = `${name}`
     heroImageDiv.innerHTML = `${img}`
     const showStat =`<p>${stats}</p>`
     powerStats.innerHTML =`${showStat}`

}

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
     .then(json => {
        const hero = json.results[0]
        showHeroInfo(hero)
     })
         
}

const randomHero = () => {
    const numberOfHero = 731
    return Math.floor(Math.random() * numberOfHero) +1
}

newHeroButton.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)


