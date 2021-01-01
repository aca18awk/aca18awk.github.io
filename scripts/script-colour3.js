// code by Franks Laboratory modified by Aleksandra Kulbaka
// https://www.youtube.com/watch?v=vDnsnsozSBo

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = 350;

// radius of the circle around the mouse
// particles are allowed to move
const edge = 60;

const mouse = {
    x: null,
    y: null
}

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y - 86.667;
    });

// call it many times to create 
// many randomized particles
class Root {
    constructor(x, y, color, centerX, centerY) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.speedX = 0;
            this.speedY = 0;
            this.centerX = centerX;
            this.centerY = centerY;
        }
        // calcuate current position of particles
        // and draw them on canvas
    draw() {
        // depending whether it is < or > 0 
        // particles move left or right
        this.speedX += (Math.random() - 0.5) / 2;
        this.speedY += (Math.random() - 0.5) / 2;
        this.x += this.speedX;
        this.y += this.speedY;

        // calculate distance which determines 
        // how large partices are based on 
        // the distance from the center

        const distanceX = this.x - this.centerX;
        const distanceY = this.y - this.centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        // current size of particle
        // try to replace (edge / 10) by 1 to have thin 
        // const radius = (-distance / edge + 1) * edge / 10;

        const radius = (-distance / edge + 1) * 0.2;

        if (radius > 0) {
            requestAnimationFrame(this.draw.bind(this));
            ctx.beginPath();
            ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            // to put golden frame around each par
            // ctx.strokeStyle = 'gold';
            // ctx.stroke();
        }
    }
}

var time = 0;

function branchOut() {

    // ctx.font = "30px simplificasimplifica";
    // ctx.fillStyle = "white";
    // ctx.textAlign = "center";
    // ctx.fillText("Here you can see some of my projects I'm the most proud of.", canvas.width / 2, canvas.height / 2);
    // ctx.fillText("To know more, click on the project you're interested in.", canvas.width / 2, canvas.height / 2 + 35);

    const centerX = mouse.x;
    const centerY = mouse.y;
    const colors = ['#d53a9d', '#ff75cd', '#9759ff', '#743ad5'];
    var par_color = '';
    // so we have 3 routes going out
    // from set of points
    // so all particles grow from the same center
    // that's why we need center
    if (time >= 16) {
        time = 0;
    }

    if (time < 4) {
        par_color = colors[0];
    } else if (time < 8) {
        par_color = colors[1];
    } else if (time < 12) {
        par_color = colors[2];
    } else if (time < 16) {
        par_color = colors[3];
    }

    for (let i = 0; i < 3; i++) {
        const root = new Root(mouse.x, mouse.y,
            par_color, centerX, centerY);
        root.draw();
    }
    time += 1;

}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
});

// to do mouse trail effect

window.addEventListener('mousemove', function() {
    // to clear canvas immediately 
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // to have shadow effect:
    // ctx.fillStyle = 'rgb(0, 0, 0, 0.03)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    // to have paint brush with not dissapearing lines

    branchOut();
})