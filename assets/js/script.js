const unfold = elem => {
    const description = elem.parentElement.getElementsByClassName("description")[0]
    if (description.classList.contains("fold")) {
        description.classList.remove("fold")
        description.classList.add("unfold")

        elem.innerHTML = "Voir moins"

    } else if (description.classList.contains("unfold")) {
        description.classList.remove("unfold")

        description.classList.add("fold")
        elem.innerHTML = "Voir plus"
    }
    refreshCards()
}

function refreshCards() {
    const $grid = $(".Grid").isotope({
        itemSelector: ".card"
    })
    $grid.isotope()
}

let randomCardDisplayed = false

function displayCard(card) {
    const display = document.getElementById("display-card-container")
    display.innerHTML = ""
    display.appendChild(card)
    card.style = ""
    card.id = "diplayed-card"
    display.hidden = false
    display.innerHTML += " <span class='close'>×</span>"
    document.body.classList.add("no-scroll")
    $(display).click(function(event) {
        if (!$(event.target).closest("#diplayed-card").length) {
            hideCard()
        }
    })
}

function hideCard() {
    const display = document.getElementById("display-card-container")
    display.innerHTML = ""
    display.hidden = true
    document.body.classList.remove("no-scroll")
    randomCardDisplayed = false
}

function shuffleCard() {
    if (!randomCardDisplayed) {
        const cards = document.getElementsByClassName("Card")
        const randIndex = Math.floor(Math.random() * cards.length)
        const card = cards[randIndex]
        const duplicateCard = card.cloneNode(true)
        displayCard(duplicateCard)
    } else {
        hideCard()
    }
    randomCardDisplayed = !randomCardDisplayed
}