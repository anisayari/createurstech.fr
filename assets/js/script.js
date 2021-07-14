function refreshCards() {
  /*Refresh card position*/
  var $grid = $(".Grid").isotope({
    itemSelector: ".Card"
  })
  $grid.isotope()
}

window.onload = function() {
  refreshCards()
}

for (element of document.getElementsByClassName("follower-counter")) {
  nFormatter(element)
}

function nFormatter(elm) {
  num = elm.innerText
  digits = 1
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value
  })
  elm.innerText = item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0"
}

var randomCardDiplayed = false

function displayCard(card) {
  var display = document.getElementById("display-card-container")
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
  var display = document.getElementById("display-card-container")
  display.innerHTML = ""
  display.hidden = true
  document.body.classList.remove("no-scroll")
  randomCardDiplayed = false
}

function shuffleCard() {
  if (!randomCardDiplayed) {
    var cards = document.getElementsByClassName("Card")
    var randIndex = Math.floor(Math.random() * cards.length)
    var card = cards[randIndex]
    var duplicateCard = card.cloneNode(true)
    displayCard(duplicateCard)
  } else {
    hideCard()
  }
  randomCardDiplayed = !randomCardDiplayed
}
