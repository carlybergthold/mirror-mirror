console.log('mirror time');

const message = document.querySelector('#message');
let mirrorOne = document.querySelector('#mirrorOne');
let mirrorTwo = document.querySelector('#mirrorTwo');

message.addEventListener('keyup', () => {
    mirrorOne.textContent = message.value;
    mirrorTwo.textContent = message.value;
})