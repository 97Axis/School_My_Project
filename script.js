let text = document.getElementById('text');

let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');
let home_plant = document.getElementById('plant');

let trees1 = document.getElementById('trees_01');
let trees2 = document.getElementById('trees_02');
let mountain1 = document.getElementById('monutain_01');
let mountain2 = document.getElementById('monutain_02');
let Man = document.getElementById('man');
let culture_plants = document.getElementById('plants');

let moon = document.getElementById('moon');
let train = document.getElementById('train');

let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
let rocks = document.getElementById('rocks');
let water1 = document.getElementById('water1');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (text) {
        text.style.transform = 'translate(-50%, ' + (value * 2.5 - 50) + 'px)'; 
    }
    
    if (hill1) {
        hill1.style.transform = `translateY(${value * -0.1}px)`;
        
        hill5.style.transform = `translateX(${value * 1.5}px)`;
        hill4.style.transform = `translateX(${value * -1.5}px)`;
        
        if (leaf) {
            leaf.style.transform = `translateY(${value * -1.5}px) translateX(${value * 1.5}px)`;
        }
    } 
    
    else if (mountain1) {
        mountain1.style.transform = `translateX(${value * 0.5}px)`;
        mountain2.style.transform = `translateX(${value * 0.3}px)`;
        
        trees1.style.transform = `translateX(${value * 1.2}px)`;
        trees2.style.transform = `translateX(${value * -1.2}px)`;
        
        if (Man) {
            Man.style.transform = `translateX(${value * -0.5}px)`; 
        }
    }
    
    else if (forest) {
        forest.style.transform = `translateY(${value * -0.05}px)`;
        rocks.style.transform = `translateY(${value * -0.1}px)`;
        water1.style.transform = `translateY(${value * 0.05}px)`;

        bird1.style.transform = `translateY(${value * 1.5}px) translateX(${value * -1.0}px)`;
        bird2.style.transform = `translateY(${value * 0.8}px) translateX(${value * 0.5}px)`;
    }
    
    else if (moon) {
        moon.style.transform = `translateY(${value * -0.3}px)`;

        if (train) {
            train.style.transform = `translateX(${value * 1.5}px)`; 
        }
    }
});
