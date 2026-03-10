function get_age(day) {
    var ageDifMs = Date.now() - Date.parse(day);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function get_years(day){
    var ageDifMs = Date.now() - Date.parse(day);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var y = Math.abs((ageDate.getUTCFullYear() + ageDate.getUTCMonth() / 12.0) - 1970);
    return y.toFixed(1);
}