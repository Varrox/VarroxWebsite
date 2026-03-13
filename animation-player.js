const fps = 8;
const folder = "Assets/3D/Donut/";
const frames = 30;
const repeat = true;

const images = get_images();

let loaded_images = 0;

function get_images(){
    var imgs = []
    for(var i = 0; i <= frames; i++){
        var img = new Image();
        img.addEventListener("load", () => {loaded_images++;});
        img.src = folder + '0'.repeat(4 - i.toString().length) + i + ".png";
        console.log(img.src);
        imgs.push(img);
    }
    return imgs;
}

let frame = 0;
let play_id;

const canvas = document.getElementById("donut-ascii");
const ctx = canvas.getContext("2d");

function set_frame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[frame], 0, 0);
    frame++;

    if(frame > frames){
        if(repeat){
            frame %= frames;
        }
        else{
            clearInterval(play_id);
        }
    }
}

function play_animation(){
	play_id = setInterval(set_frame, (1.0 / fps) * 1000);
}