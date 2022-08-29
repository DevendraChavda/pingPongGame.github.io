const canvas = document.getElementById('playground');
var mydiv = document.getElementById('mydiv');
var game = document.getElementById('game');
var maintext = document.getElementById('maintext');
var checkgame = 'start';
const width = 900;
const height = 500;
let speed = 1;
let score1 = 0;
let score2 = 0;

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

class rode {
    constructor(x, y, px, py, color) {
        this.x = x;
        this.y = y;
        this.px = px;
        this.py = py;
        this.color = color;
    }

    drowrode() {

        ctx.fillStyle = this.color;
        ctx.fillRect(this.px, this.py, this.x, this.y);
    }

    updaterode(px) {
        ctx.fillStyle = this.color;
        this.px = px;
        ctx.fillRect(this.px, this.py, this.x, this.y);
    }
}

const rode1 = new rode(140, 20, 0, 0, 'rgb(255,0,0)');
const rode2 = new rode(140, 20, 0, 480, 'rgb(255,0,0)');

class ball {
    constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
    }

    drowball() {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

        ctx.fill();
    }

    updateball(r1x, r1px, r1py, r2x, r2px, r2py) {
        if ((this.x + this.dx) >= width || (this.x - this.dx) <= 0 || (this.x - this.dx) >= width || (this.x + this.dx) <= 0) {
            this.dx = -(this.dx);
        }

        // if((this.y + this.dy) >= height || (this.y - this.dy) <=0 || (this.y - this.dy) >= height || (this.y + this.dy) <=0){
        //     this.dy = -(this.dy);
        // }

        if ((this.y + this.dy <= r1py + 30) && (this.x >= r1px) && (this.x <= r1px + r1x)) {
            this.dy = -this.dy;
            score1++;
            if (this.dx > 0) {
                this.dx += 0.3;
            }
            else {
                this.dx -= 0.3;
            }
            if (this.dy > 0) {
                this.dy += 0.3;
            }
            else {
                this.dy -= 0.3;
            }
        }

        if ((this.y + this.dy >= r2py - 20) && (this.x >= r2px) && (this.x <= r2px + r2x)) {
            this.dy = -this.dy;
            score2++;
            if (this.dx > 0) {
                this.dx += 0.3;
            }
            else {
                this.dx -= 0.3;
            }
            if (this.dy > 0) {
                this.dy += 0.3;
            }
            else {
                this.dy -= 0.3;
            }
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "ArrowLeft":
            if (rode2.px >= 10) {
                for (let i = 0; i < 30; i++) {
                    rode2.px -= 1;
                    rode2.updaterode(rode2.px);
                }
            }
            break;
        case "ArrowRight":
            if (rode2.px <= width - rode2.x - 5) {
                for (let i = 0; i < 30; i++) {
                    rode2.px += 1;
                    rode2.updaterode(rode2.px);
                }
            }
            break;
    }
});


window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case "KeyA":
            if (rode1.px >= 10) {
                for (let i = 0; i < 30; i++) {
                    rode1.px -= 1;
                    rode1.updaterode(rode1.px);
                }
            }
            console.log('left2');
            break;
        case "KeyD":
            if (rode1.px <= width - rode1.x - 5) {
                for (let i = 0; i < 30; i++) {
                    rode1.px += 1;
                    rode1.updaterode(rode1.px);
                }
            }
            console.log('right2');
            break;
    }
});



game.addEventListener('click', function () {
    maintext.innerText = "Game started";
    if(checkgame === 'play'){
        return;
    }
    checkgame = 'play';

    const balls = [];

    while (balls.length < 50) {
        const ball1 = new ball(250, 100, 3, 3, 20, 'rgb(0,255,0)');

        balls.push(ball1);
    }

    rode1.drowrode();
    rode2.drowrode();
    score1 = 0;
    score2=0;

    var interval = setInterval(function () {

        ctx.fillStyle = 'rgba(0, 0, 0,0.3)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < 50; i++) {
            if ((balls[i].y + balls[i].dy) >= height || (balls[i].y - balls[i].dy) <= 0 || (balls[i].y - balls[i].dy) >= height || (balls[i].y + balls[i].dy) <= 0) {
                clearInterval(interval);
                if (balls[i].y > 580) {
                    alert('Player 1 is winner and score is : ' + score1);
                }
                else {
                    alert('Player 2 is winner and scoree is : ' + score2);
                }
                maintext.innerText = "Click here to Restart Game";
                checkgame = 'start';
                return;
            }
            rode1.updaterode(rode1.px);
            rode2.updaterode(rode2.px);
            balls[i].drowball();
            balls[i].updateball(rode1.x, rode1.px, rode1.py, rode2.x, rode2.px, rode2.py);
        }
    }, 20);
});



// function loop(){

//     ctx.fillStyle= 'rgba(0, 0, 0,0.2)';
//     ctx.fillRect(0,0,width,height);

//     for(let i=0; i<25; i++){
//         if((balls[i].y + balls[i].dy) >= height || (balls[i].y-balls[i].dy)<=0 || (balls[i].y - balls[i].dy) >= height || (balls[i].y+balls[i].dy) <=0){
//             clearInterval(interval);
//             if(balls[i].y>580){
//                 alert('player 1 is winner and score is : ' + score1);
//             }
//             else{
//                 alert('player 2 is winner and scoree is : ' + score2);
//             }
//             return;
//         }
//         rode1.updaterode(rode1.px);
//         rode2.updaterode(rode2.px);
//         balls[i].drowball();
//         balls[i].updateball(rode1.x,rode1.px, rode1.py, rode2.x, rode2.px, rode2.py);
//     }

//     requestAnimationFrame(loop);
// }