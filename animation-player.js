const fps = 8;
const folder = "Assets/3D/Donut/";
const frames = 30;
const repeat = true;
const size_x = 64, size_y = 64;

let images;

async function get_images(){
    const promises = [];

    for(let i = 0; i <= frames; i++){
        const img = new Image();
        img.crossOrigin = "anonymous";

        const p = new Promise((resolve) => {
            img.onload = () => resolve(img);
            img.onerror = () => {
                console.error("Failed to load:", img.src);
                resolve(null); // Resolve anyway so we don't hang forever
            };
        });

        img.src = folder + '0'.repeat(4 - i.toString().length) + i + ".png";

        
        promises.push(p);
    }

    const loadedImgs = await Promise.all(promises);

    console.log("loaded images")
    return loadedImgs;
}

let frame = 0;
let play_id;

const canvas = document.getElementById("donut-ascii");

canvas.width = size_x;
canvas.height = size_y;

const ctx = canvas.getContext("2d");

function set_frame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[frame], 0, 0);

    create_ascii()

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

const ascii_chars = ".:-=+*$#%&@█"

function create_ascii() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    let b_ = "";

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3] / 255.0;

        var l = Math.min(Math.max(Math.floor((Math.sqrt(r * r + g * g + b * b) / 255.0) * (ascii_chars.length - 1)), 0), ascii_chars.length - 1);
        b_ += a > 0 ? (ascii_chars.substring(l, l + 1)) : " ";

        if((i / 4) % size_x == 0){
            b_ += '\n'
        }

        //const rgbColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    console.clear()
    //console.log(b_)
}

async function play_animation(){
    images = await get_images();
	play_id = setInterval(set_frame, (1.0 / fps) * 1000);
}