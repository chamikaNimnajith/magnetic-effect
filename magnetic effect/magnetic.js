
const magneticElements = document.querySelectorAll(".magnetic");

magneticElements.forEach((magneticElement) => {

    magneticElement.addEventListener("mousemove", function(e){
        
        let rect = magneticElement.getBoundingClientRect();
        console.log(e)
        
        let x = (e.clientX - rect.left - rect.width /2) * 0.5;
        let y = (e.clientY - rect.top - rect.height /2) * 0.5;
        
       
        magneticElement.style.transform =`translate(${x}px, ${y}px)`;
        magneticElement.style.scale = "1.1";
        magneticElement.style.transition = " .1s ease, .3s ease"
        magneticElement.style.transitionProperty = "transform, scale"
        magneticElement.style.cursor = "pointer"
        magneticElement.style.zIndex = "999"

    })

    magneticElement.addEventListener("mouseout", () => {
        
        magneticElement.style.transform = "translate(0px ,0px)";
        magneticElement.style.scale = "1";
        magneticElement.style.transition = " .3s ease, .3s ease"
        magneticElement.style.transitionProperty = "transform, scale"
        magneticElement.style.zIndex = "888"

    })
})