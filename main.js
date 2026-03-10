window.onload = function(){main()}

function main(){
    apply_links()
    add_ascii(star_01, "star_01")
    add_ascii(star_02, "star_02")
    apply_info()
    apply_shake()
    apply_confetti()
}

function apply_info() {
    var names = document.getElementsByClassName("name")
    var name = info.name
    for(var i = 0; i < names.length; i++){
        names[i].innerText = name
    }

    var ages = document.getElementsByClassName("age")
    var age = info.age
    for(var i = 0; i < ages.length; i++){
        ages[i].innerText = age
    }

    var pronounses = document.getElementsByClassName("pronouns")
    var pronouns = info.pronouns
    for(var i = 0; i < pronounses.length; i++){
        pronounses[i].innerText = pronouns
    }
}