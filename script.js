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
    let width = window.innerWidth;

    // Responsive scaling factor to keep assets securely within phone viewport ranges
    let factor = 1.0;
    if (width <= 480) {
        factor = 0.2; 
    } else if (width <= 768) {
        factor = 0.5; 
    }

    // 1. Core Title Scroll Interaction
    if (text) {
        let yTranslation = (value * (2.5 * factor)) - 50;
        text.style.transform = `translate(-50%, ${yTranslation}px)`; 
    }
    
    // 2. Home Page Scene Transitions
    if (hill1) {
        hill1.style.transform = `translateY(${value * -0.1 * factor}px)`;
        hill5.style.transform = `translateX(${value * 1.5 * factor}px)`;
        hill4.style.transform = `translateX(${value * -1.5 * factor}px)`;
        
        if (leaf) {
            leaf.style.transform = `translateY(${value * -1.5 * factor}px) translateX(${value * 1.5 * factor}px)`;
        }
    } 
    
    // 3. Culture Page Scene Transitions
    else if (mountain1) {
        mountain1.style.transform = `translateX(${value * 0.5 * factor}px)`;
        mountain2.style.transform = `translateX(${value * 0.3 * factor}px)`;
        
        if (trees1) trees1.style.transform = `translateX(${value * 1.2 * factor}px)`;
        if (trees2) trees2.style.transform = `translateX(${value * -1.2 * factor}px)`;
        
        if (Man) {
            Man.style.transform = `translateX(${value * -0.5 * factor}px)`; 
        }
    }
    
    // 4. Sustainability Scene Transitions
    else if (forest) {
        forest.style.transform = `translateY(${value * -0.05 * factor}px)`;
        if (rocks) rocks.style.transform = `translateY(${value * -0.1 * factor}px)`;
        if (water1) water1.style.transform = `translateY(${value * 0.05 * factor}px)`;

        if (bird1) bird1.style.transform = `translateY(${value * 1.5 * factor}px) translateX(${value * -1.0 * factor}px)`;
        if (bird2) bird2.style.transform = `translateY(${value * 0.8 * factor}px) translateX(${value * 0.5 * factor}px)`;
    }
    
    // 5. Alternate Theme Page Logic
    else if (moon) {
        moon.style.transform = `translateY(${value * -0.3 * factor}px)`;

        if (train) {
            train.style.transform = `translateX(${value * 1.5 * factor}px)`; 
        }
    }
});

// Dynamic orientation correction
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        let cleanups = [hill1, hill4, hill5, leaf, mountain1, mountain2, trees1, trees2, Man, forest, rocks, water1, bird1, bird2, moon, train];
        cleanups.forEach(el => {
            if (el) el.style.transform = '';
        });
        if (text) text.style.transform = 'translate(-50%, -50%)';
    }
});

// Cinematic Intro Entry Pipeline Execution
window.addEventListener('DOMContentLoaded', () => {
    const navElement = document.querySelector('nav');
    const heroTitle = document.getElementById('text');
    
    if (navElement) {
        navElement.classList.add('fade-in-up');
    }
    if (heroTitle) {
        heroTitle.classList.add('fade-in-up', 'delay-1');
    }
});
