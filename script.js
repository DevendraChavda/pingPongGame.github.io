let rode1 = document.getElementById('rode1');
let rode2 = document.getElementById('rode2');
let ball = document.getElementById('ball');
rode1.style.marginLeft=0;
rode2.style.marginLeft=0;
ball.style.marginLeft=0;
ball.style.marginTop=20;
let topbordar = 20
let bottumbordar = 560;


ball.addEventListener('click',function(){
    console.log(1);
    playgame();
});

function playgame(){
    let interval1 = setInterval(function(){
        let currantPositionTop = parseInt(ball.style.marginTop);
        let currantPositionLeft = parseInt(ball.style.marginLeft);
        let checklp = true;
        let checktp = true;
        if(currantPositionTop < topbordar){
            clearInterval(interval1);
            alert('game over player 2 is winner');
            return;
        }
        if(currantPositionTop > bottumbordar){
            clearInterval(interval1);
            alert('game over player 1 is winner');
            return;
        }
        if(currantPositionLeft<0){
            checklp = false;
        }
        if(currantPositionLeft > 780){
            checklp = true;
        }

        if(checklp){
            currantPositionLeft+=10;
        }
        else{
            currantPositionLeft-=10;
        }
    
        ball.style.marginLeft = currantPositionLeft + 'px';
        // if(currantPositionTop >)
        console.log(1);
    },100000);
}





window.addEventListener('keydown', function(event) {
    switch(event.key){
        case "ArrowLeft" :
            if(parseInt(rode1.style.marginLeft)>=2){
                rode1.style.marginLeft  = parseInt(rode1.style.marginLeft) - 2 + '%';
            }
            console.log('left');
            break;
        case "ArrowRight" :
            if(parseInt(rode1.style.marginLeft)<80){
                rode1.style.marginLeft  = parseInt(rode1.style.marginLeft) + 2 + '%';
            }
            console.log('right');
            break;
    }
});


window.addEventListener('keydown', function(event) {
    switch(event.code){
        case "KeyA" :
            if(parseInt(rode2.style.marginLeft)>=2){
                rode2.style.marginLeft  = parseInt(rode2.style.marginLeft) - 2 + '%';
            }
            console.log('left2');
            break;
        case "KeyD" :
            if(parseInt(rode2.style.marginLeft)<80){
                rode2.style.marginLeft  = parseInt(rode2.style.marginLeft) + 2 + '%';
            }
            console.log('right2');
            break;
    }
});


