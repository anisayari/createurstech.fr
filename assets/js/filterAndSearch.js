var $grid = $(".Grid").isotope({
  itemSelector: ".Card",
  percentPosition: true,
  layoutMode: "masonry",
  masonry: {
    columnWidth: ".Grid__sizer"
  }
})
$grid.isotope("shuffle")

let params = new URLSearchParams(window.location.search)
const searchForm = document.querySelector("form")
const searchNameInput = document.querySelector("input[name=\"creator_name\"]")
const formElements = searchForm.elements

const creators = document.querySelectorAll(".Card")

const init = () => {
  Array.from(formElements).map(element => {
    if (element.getAttribute("value") === params.get("platform") && !element.checked) {
      element.checked = true
      element.focus()
    }
    if (element.getAttribute("value") === params.get("category") && !element.checked) {
      element.checked = true
      element.focus()
    }
    if (element.getAttribute("name") === "creator_name" && null !== params.get("creator_name")) {
      const oldValue = element.getAttribute("value")
      searchNameInput.setAttribute("value", params.get("creator_name"))
      oldValue !== params.get("creator_name") && element.focus()
    }
  })

  filterCreators()
}

const filterCreators = () => {
  Array.from(creators).map(creator => {
    const creatorName = creator.querySelector(".CreatorName")

    if (
      params.get("platform") && !creator.classList.contains(params.get("platform"))
      || params.get("category") && !creator.classList.contains(decodeURIComponent(params.get("category").toLowerCase()).split(" ").join("_"))
      || params.get("creator_name") && !creatorName.innerHTML.toString().toLowerCase().includes(params.get("creator_name").toLowerCase())
    ) {
      creator.style.display = "none"
    } else {
      creator.style.display = "grid"
    }
  })

  refreshCards()
}

init()

const updateParams = () => {
  if (params.get("creator_name")) {
    searchNameInput.setAttribute("value", params.get("creator_name"))
  }

  const data = new FormData(searchForm)

  for (let [name, value] of data) {
    params.set(name, encodeURIComponent(value))
  }

  window.history.pushState(
    {},
    "",
    decodeURIComponent(`${window.location.pathname}?${params}`)
  )

  filterCreators()
}

window.addEventListener("popstate", () => {
  params = new URLSearchParams(window.location.search)
  init()
})
searchNameInput.addEventListener("oninput", updateParams)
searchForm.addEventListener("change", updateParams)
searchForm.addEventListener("submit", () => false)
