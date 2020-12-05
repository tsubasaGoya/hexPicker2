const 
    hexArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],
    body = document.body,
    hex = document.querySelector('.hex'),
    btn = document.querySelector('#theBtn');

btn.addEventListener('click', getHex);

function getHex() {
    let hexColor = '#';

    for(let i=0; i < 6; i++) {
        let random = Math.floor(Math.random()* hexArray.length);
        hexColor += hexArray[random];
    }
    body.style.backgroundColor = hexColor;
    hex.innerHTML = hexColor;
}