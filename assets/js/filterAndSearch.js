let qsRegex
let buttonFilter


const $grid = $(".Grid").isotope({
  itemSelector: ".Card",
  percentPosition: true,
  layoutMode: "masonry",
  masonry: {
    columnWidth: ".Grid__sizer"
  },
  filter: function() {
    $this = $(this)
    var searchResult = qsRegex ? $this.text().match(qsRegex) : true
    var buttonResult = buttonFilter ? $this.is(buttonFilter) : true
    return searchResult && buttonResult
  }
})
$grid.isotope("shuffle")

const filters = {}

$.when($('.filters').find('button')).then(function(button) {
  const $button = $(button)
  const $buttonGroup = $button.parents(".button-group")
  const filterGroup = $buttonGroup.attr("data-filter-group")
  filters[filterGroup] = $button.attr("data-filter").replace(/ /g, "_").toLowerCase().toLowerCase().replace(/[!"#$%&'()+,\/:;<=>?@[\\\]^`{|}~]/g, "\\\$&")
  buttonFilter = concatValues(filters)
  $grid.isotope()
})

$(".button-group").each(function(i, el) {
  const $buttonGroup = $(el)
  $.when($buttonGroup.find('button')).then(function(button) {
    const $button = $(button)
    $button.click(function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked")
      let isChecked = $(this).hasClass('is-checked')
      if(!isChecked) {
        $(this).addClass("is-checked")
      }
    })
  })
})


// flatten object by contacting values
function concatValues(obj) {
  var value = ""
  for (var prop in obj) {
    value += obj[prop]
  }
  return value
}

// use value of search field to filter
const $quickSearch = $(".quicksearch").keyup(debounce(function() {
  qsRegex = new RegExp($quickSearch.val(), "gi")
  $grid.isotope()
}, 200))

// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
  let timeout
  threshold = threshold || 100
  return function debounced() {
    clearTimeout(timeout)
    const args = arguments
    const self = this

    function delayed() {
      fn.apply(self, args)
    }

    timeout = setTimeout(delayed, threshold)
  }
}

$.fn.hasClass = function(className) {
  const classNames = $(this).attr("class").split(" ")
  return classNames.includes(className)
}