const heading = document.getElementById("mains")
heading.innerText = "Dog API is integrating"

const Dogimg = document.getElementById("dogimg")
const dogButton = document.getElementById("dogButton")
console.log("run first")

const getNewDog = () => {

     fetch("https://dog.ceo/api/breeds/image/random")
     .then(response => response.json())
     .then(json => {
        console.log(json.message)
        Dogimg.innerHTML = `<img src= "${json.message}" height=300 width=400/>`
})
}


dogButton.onclick = () => getNewDog()
console.log("Run Third")