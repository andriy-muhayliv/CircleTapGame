const darkMode = document.querySelector('#darkMode');
const body = document.querySelector('body');

darkMode.onclick = function() {
if (darkMode.textContent == 'Dark mode'){
    body.style.backgroundColor = 'black';
darkMode.textContent = 'White mode';
for (let i = 0; i < body.children.length; i++){
body.children[i].style.color = 'white';
        } 
} else {
        body.style.backgroundColor = 'white';
    darkMode.textContent = 'Dark mode';
    for (let i = 0; i < body.children.length; i++){
    body.children[i].style.color = 'black';
     }
    }
}
