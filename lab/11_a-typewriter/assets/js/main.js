var container = document.getElementById('container');
var letters = {
    KeyA: {
        url:"assets/media/svg/Asset1.svg"
    },
    KeyB: {
        url:"assets/media/svg/Asset24.svg"
    },
    KeyC: {
        url:"assets/media/svg/Asset3.svg"
    },
    KeyD: {
        url:"assets/media/svg/Asset4.svg"
    },
    KeyE: {
        url:"assets/media/svg/Asset5.svg"
    },
    KeyF: {
        url:"assets/media/svg/Asset6.svg"
    },
    KeyG: {
        url:"assets/media/svg/Asset7.svg"
    },
    KeyH: {
        url:"assets/media/svg/Asset8.svg"
    },
    KeyI: {
        url:"assets/media/svg/Asset9.svg"
    },
    KeyJ: {
        url:"assets/media/svg/Asset10.svg"
    },
    KeyK: {
        url:"assets/media/svg/Asset11.svg"
    },
    KeyL: {
        url:"assets/media/svg/Asset12.svg"
    },
    KeyM: {
        url:"assets/media/svg/Asset26.svg"
    },
    KeyN: {
        url:"assets/media/svg/Asset25.svg"
    },
    KeyO: {
        url:"assets/media/svg/Asset15.svg"
    },
    KeyP: {
        url:"assets/media/svg/Asset16.svg"
    },
    KeyQ: {
        url:"assets/media/svg/Asset17.svg"
    },
    KeyR: {
        url:"assets/media/svg/Asset2.svg"
    },
    KeyS: {
        url:"assets/media/svg/Asset14.svg"
    },
    KeyT: {
        url:"assets/media/svg/Asset13.svg"
    },
    KeyU: {
        url:"assets/media/svg/Asset18.svg"
    },
    KeyV: {
        url:"assets/media/svg/Asset19.svg"
    },
    KeyW: {
        url:"assets/media/svg/Asset20.svg"
    },
    KeyX: {
        url:"assets/media/svg/Asset21.svg"
    },
    KeyY: {
        url:"assets/media/svg/Asset22.svg"
    },
    KeyZ: {
        url:"assets/media/svg/Asset23.svg"
    }
};


document.addEventListener('keydown', function(event){
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var img = document.createElement('img');
        console.log(letters[event.code]['url']);
        img.src = letters[event.code]['url'];
        
        container.appendChild(img);

    } else if (event.keyCode == 32) {
        var div = document.createElement('div');
        div.classList.add('space');
        container.appendChild(div);
    } else if (event.keyCode == 8) {
        container.removeChild(container.lastChild);
    } else if (event.keyCode == 49) {
        document.body.style.backgroundColor = "lemonChiffon";
    } else if(event.keyCode == 50){
        document.body.style.backgroundColor = "CornflowerBlue";
    }else if(event.keyCode == 51){
        document.body.style.backgroundColor = "lightGrey"
    }

    }
);



//Simpson Button (change to random position)________________________________________
/*simpsonButton.addEventListener("click", function(){
    var img = document.createElement("img");
    img.src = simpsons[Math.floor(Math.random() * 4 )];
    simpsonWrapper.appendChild(img);

    event.stopPropagation();
})*/




/*//BG Button (change to "Keydown"____________________________________________

var bgButton = document.getElementById("bg-button");
var html = document.documentElement;

bgButton.addEventListener("keydown", function() {
    if ( html.style.backgroundColor != "lightpink" ) {
        html.style.backgroundColor = "lightpink";
    } else {
        html.style.backgroundColor = "white";
    }

    event.stopPropagation();
*/
