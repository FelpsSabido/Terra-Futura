/* =====================================
   TERRAFUTURA SHADER BACKGROUND
===================================== */

const canvas =
document.getElementById(
    "shader-canvas"
);

if(canvas){

const ctx =
canvas.getContext("2d");

function resize(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}

resize();

window.addEventListener(
    "resize",
    resize
);

const particles = [];

for(let i=0;i<80;i++){

    particles.push({

        x:
        Math.random() *
        canvas.width,

        y:
        Math.random() *
        canvas.height,

        radius:
        Math.random()*3+1,

        speed:
        Math.random()*0.5+0.1,

        opacity:
        Math.random()

    });

}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const gradient =
    ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
    );

    gradient.addColorStop(
        0,
        "#050816"
    );

    gradient.addColorStop(
        1,
        "#0b1024"
    );

    ctx.fillStyle =
    gradient;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p=>{

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        `rgba(
            74,
            222,
            128,
            ${p.opacity}
        )`;

        ctx.fill();

        p.y -= p.speed;

        if(p.y < -20){

            p.y =
            canvas.height+20;

            p.x =
            Math.random() *
            canvas.width;

        }

    });

    requestAnimationFrame(
        animate
    );

}

animate();

}