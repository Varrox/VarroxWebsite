let commands_list = {
    "cd" : change_directory,
    "mkdir" : make_directory,
    "ls" : list_directory,
    "open" : open,
    "cls" : clear,
    "clear" : clear,
    "echo" : print,
    "rm" : remove_location,
    "curl" : curl,
    "cat" : catenate
}

function change_directory(args){
    var path = args[0]
    var locations = split_path(path)

    if(locations[i].endsWith(":")){
        current_path = locations
    }
    else{

    }
}

function make_directory(args){

}

function list_directory(args){

}

function open(args){

}

function clear(args){

}

function remove_location(args){
    delete_file(split_path[args[0]])
}

function curl(args){

}

function catenate(args){ // Can only get files in current directory
    
}