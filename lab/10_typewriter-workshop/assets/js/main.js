var container = document.getElementById('container');
var letters = {
    KeyA: {},
    KeyB: {},
    KeyC: {},
    KeyD: {},
    KeyE: {},
    KeyF: {},
    KeyG: {},
    KeyH: {},
    KeyI: {},
    KeyJ: {},
    KeyK: {},
    KeyL: {},
    KeyM: {},
    KeyN: {},
    KeyO: {},
    KeyP: {},
    KeyQ: {},
    KeyR: {},
    KeyS: {},
    KeyT: {},
    KeyU: {},
    KeyV: {},
    KeyW: {},
    KeyX: {},
    KeyY: {},
    KeyZ: {}
};
var bgHue = 0;
for (key in letters) {
    bgHue += Math.floor( 360 / (Object.keys(letters).length) );
    letters[key].bgColor = "hsl(" + bgHue + ", 100%, 50%)";
};
document.addEventListener('keydown', function(event){
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var div = document.createElement('div');
        div.classList.add('letter');
        // add capital class
        if (event.shiftKey == true) {
            div.classList.add('capital');
        };
        div.style.backgroundColor = letters[event.code].bgColor;
        container.appendChild(div);
        // eg: a, b, z
        // console.log("key: " + event.key);
        // eg: KeyA, KeyB, etc
        // console.log("code: " + event.code);
        // eg: 65, 68, etc
        // console.log("code: " + event.keyCode);
        // log the color
        // console.log("color: " + letters[event.code].bgColor);
        // change the background color
        // document.documentElement.style.backgroundColor = letters[event.code].bgColor;
        // add a letter to container
        // container.innerHTML += event.key;
    } else if (event.keyCode == 32) {
        var div = document.createElement('div');
        div.classList.add('space');
        container.appendChild(div);
    } else if (event.keyCode == 8) {
        container.removeChild(container.lastChild);
    }
});