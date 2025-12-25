let current_path = ["C:", "home", "aria"]

let file_system = {
    "C:" : {
        "home" : {
            "aria" : {
                "Documents" : {
                    "hello.txt" : "ervsdfwef"
                },
                "Pictures" : {

                },
                "Videos" : {
                    
                }
            }
        },
        ".data" : {

        },
    }
}

let files = {
    "ervsdfwef" : "Hello, World!"
}

const path_separators = ['/', '\\']

function split_path(path)
{
    var locations = []
    var last_split = 0
    for(var i = 0; i < path.length; i++)
    {
        if(path_separators.includes(path[i]))
        {
            locations.push(path.substring(last_split, i))
            last_split = i + 1
        }
    }
    locations.push(path.substring(last_split, path.length))
    return locations
}

function get_files(directory)
{
    var path = split_path(directory)

    var directory = file_system
    for(var i = 0; i < path.length; i++){
        directory = directory[path[i]]
    }


}

function delete_file(path)
{
    var directory = file_system
    for(var i = 0; i < path.length - 1; i++){
        directory = directory[path[i]]
    }
    
    delete files[directory[path[path.length - 1]]]
    delete directory[path[path.length - 1]]
}