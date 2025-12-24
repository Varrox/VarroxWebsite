const birthday = "March 11, 2010"

function get_age() {
    var ageDifMs = Date.now() - Date.parse(birthday);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function apply_age(){
    var ages = document.getElementsByClassName("age")
    var age = get_age()
    for(var i = 0; i < ages.length; i++){
        ages[i].innerText = age
    }
}