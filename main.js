window.onload = function(){main()}

function main(){
    apply_links()
    add_ascii(star_01)
    add_ascii(star_02)
    apply_age()
}

function apply_age() {
    var ages = document.getElementsByClassName("age")
    var age = info.age
    for(var i = 0; i < ages.length; i++){
        ages[i].innerText = age
    }
}