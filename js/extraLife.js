let extraCircle = document.querySelector('.extraLife');
let textInnerCircle = document.querySelector('.extraLife p');
const height=document.querySelector('.container').clientHeight; 
const width=document.querySelector('.container').clientWidth; 
let plusLife = document.querySelector('.lives p');

setInterval(() => {

        if (document.querySelector('.button').style.display == 'none') {
        
                        let possibility = Math.floor(Math.random() * ((8) - 0 + 1)) + 0;
                        let r1 = Math.floor(Math.random() * ((height-30) - 30 + 1)) + 30;
                        let r2 = Math.floor(Math.random() * ((width-30) - 30 + 1)) + 30;
                        
                        
                        extraCircle.style.top = `${r1}px`;
                        extraCircle.style.left = `${r2}px`;
                        
                            
                        if(possibility == 4) {
                            extraCircle.style.display = 'block';
                        
                            extraCircle.onclick = function() {
                                plusLife.innerHTML = +plusLife.innerHTML + 1;
                                extraCircle.style.display = 'none';
                                clearInterval(interval);
                            }
                        
                            let t = Math.round(1500/60);
                            let text = 16;
                            let textStep = 0.3
                            let step = 60;
                                let interval = setInterval(() => {
                                    extraCircle.style.width = `${step}px`;
                                    extraCircle.style.height = `${step}px`;
                                    textInnerCircle.style.fontSize = `${text}px`;
                                    text -= textStep;
                                    step--
                                    if (step == 1) {
                                        clearInterval(interval);
                                        extraCircle.style.display = 'none';
                                    }
                                }, t);
                            
                        }
        }
}, 1500);




