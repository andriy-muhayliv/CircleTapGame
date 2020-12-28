const darkMode = document.querySelector('#darkMode');
const body = document.querySelector('body');

darkMode.onclick = function() {
if (darkMode.textContent == 'Dark mode'){
navigator.vibrate(20);
    body.style.backgroundColor = 'black';
darkMode.textContent = 'White mode';
for (let i = 0; i < body.children.length; i++){
body.children[i].style.color = 'white';
        } 
} else {
navigator.vibrate(20);
        body.style.backgroundColor = 'white';
    darkMode.textContent = 'Dark mode';
    for (let i = 0; i < body.children.length; i++){
    body.children[i].style.color = 'black';
     }
    }
}
