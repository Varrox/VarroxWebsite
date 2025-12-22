const links = {
    "godot" : "https://godotengine.org",
    "youtube" : "https://youtube.com/@Varrox",
    "github" : "https://github.com/varrox",
    "bluesky" : "https://bsky.app/profile/varrox.bsky.social",
    "twitter" : "https://x.com/_Varrox",
    "Non-Existence" : "https://realbucketofchicken.github.io/nonexistance/",
    "femtanyl" : "https://soundcloud.com/femtanyl"
}

const class_name = "quicklink"

function apply_links()
{
    var elements = document.getElementsByClassName(class_name)
    for(var i = 0; i < elements.length; i++){
        change_to_link(elements[i])
        i--
    }
}

function change_to_link(element){
    var link = ""
    var classes = element.classList;
    for(var i = 0; i < classes.length; i++){
        if(classes[i] != class_name && Object.keys(links).includes(classes[i])){
            link = classes[i]
            break;
        }
    }
    
    var a = document.createElement("a")
    a.href = links[link]
    a.target = "_blank"
    a.innerText = link
    element.replaceWith(a)
}