function unfold(elem){
    var description = elem.parentElement.getElementsByClassName("description")[0];
    if(description.classList.contains("fold")){
        description.classList.remove("fold")
        description.classList.add("unfold")

        elem.innerHTML = "Voir moins"

    }else if(description.classList.contains("unfold")){
        description.classList.remove("unfold")

        description.classList.add("fold")
        elem.innerHTML = "Voir plus"
    }
    refreshCards()

}
function refreshCards(){
 /*Refresh card position*/
 var $grid = $('.grid').isotope({
    itemSelector: '.card'
  })
  $grid.isotope();
}

window.onload = function () {
  
    var descriptions = document.getElementsByClassName("description");


    for (element of descriptions) {
        var lengh = element.innerText.length;
        if(lengh > 200  && !(lengh < 215)){
            element.classList.add("fold");
            element.parentElement.innerHTML += "\n <span class='read-more' onclick='unfold(this)'>Voir plus</span>";
        }
    }
    refreshCards()
}

