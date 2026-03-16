const mojDivVJs = document.getElementById("mojDivVJs")

fetch("https://boozeapi.com/api/v1/cocktails")
.then((odpoved_raw)=>{
    return odpoved_raw.json()
})
    .then((odpoved)=>{

    console.log(odpoved.data)

    odpoved.data.forEach((drink)=>{

        const card = document.createElement("div")
        card.className = "drinkCard"

        const drinkImg = document.createElement("img")
        drinkImg.src = drink.image

        const drinkName = document.createElement("div")
        drinkName.className = "drinkName"
        drinkName.textContent = drink.name

        card.appendChild(drinkImg)
        card.appendChild(drinkName)

        mojDivVJs.appendChild(card)
    })
})
