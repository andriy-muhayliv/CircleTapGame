
let body = document.querySelector('.container');
let points = document.querySelector('span');
let n = 0;
let lives = document.querySelector('p');
let bestResult = document.querySelector('h4:nth-child(2)');
let start = document.querySelector('button');
let lostAlert = document.querySelector('.lostAlert h1');
bestResult.innerHTML = `Best result: ${localStorage.getItem('point')}`;

start.addEventListener('click', function() {
    document.querySelector('.button').style.display = 'none';
    lives.innerHTML = 3;
    points.innerHTML = 0;
    n = 0;
    drawCircle()
});

    document.querySelector('.lostAlert').addEventListener('click', function() {
        this.style.display = 'none';
    })

function drawCircle() {
    bestResult.innerHTML = `Best result: ${localStorage.getItem('point')}`;
    const height=document.body.clientHeight; 
    const width=document.body.clientWidth; 

    let r1 = Math.floor(Math.random() * ((height-30) - 30 + 1)) + 30;
    let r2 = Math.floor(Math.random() * ((width-30) - 30 + 1)) + 30;

    body.innerHTML = '<div class="block"></div>';
    let circleStyle = document.querySelector('.block');
    circleStyle.style.top = r1 +'px';
    circleStyle.style.left = r2 +'px';

       circleStyle.addEventListener('click', function(){
        clearInterval(interval);
        n++
        points.innerHTML = n;
        circleStyle.style.display = 'none';
        drawCircle()
        if (localStorage.getItem('point') <= n ) {
        localStorage.setItem('point', n);
        }
       });

       let time = 1000;
       if (points.innerHTML >= 5) {
        time = 900
       } if (points.innerHTML >= 10) {
        time = 800
       } if (points.innerHTML >= 20) {
        time = 700
       } if (points.innerHTML >= 50) {
           time = 600;
       }      
        let t = Math.round(time/60);
        let step = 1;
        let interval = setInterval(() => {
        circleStyle.style.width = `${step}px`;
        circleStyle.style.height = `${step}px`;
            step++
             if (circleStyle.style.width == '60px') {
                clearInterval(interval);
                circleStyle.style.display = 'none';
                lives.innerHTML = lives.innerHTML - 1;
                drawCircle()
             } if(lives.innerHTML <= 0) {
                clearInterval(interval);
                document.querySelector('.lostAlert').style.display = 'block';
                lostAlert.innerHTML = `You will lost your result is: ${points.innerHTML}`
                document.querySelector('.button').style.display = 'block';
                 }
             
    }, t);
       
};
