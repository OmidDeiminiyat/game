let isNormal;
let isFirst;
const riveInstance = new rive.Rive({
src: "../assets/anim.riv", 
canvas: document.getElementById('riveCanvas'),
autoplay: true,
stateMachines: 'controler',
onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
    let controler_input = riveInstance.stateMachineInputs('controler')
    console.log('controler', controler_input);
    
     isNormal = controler_input.find((item) => item.name === 'normal');
     isFirst = controler_input.find((item) => item.name === 'timeline1');

},
});

export {isNormal, isFirst};