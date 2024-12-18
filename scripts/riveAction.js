import { isNormal } from "./riveControler.js";
import { isFirst } from "./riveControler.js";

let feedButton = document.getElementById('feedButton');

window.addEventListener("keydown", (ev) => {

    console.log(ev.key);
    
    if (ev.key === 'ArrowUp') {
        console.log('its up');
        
        const feed = () => {
            isNormal.fire();
        };

        feed();
    }

    if (ev.key === 'ArrowDown') {
        
        const second = () => {
            isFirst.fire();
        }
        second();
    }
})

const feed = () => {
    isNormal.fire();
};

feedButton.addEventListener("click", () => {
    feed();
});