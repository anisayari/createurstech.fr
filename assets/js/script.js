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
}

