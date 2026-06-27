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

    // Fluid Dampening Logic: Scales displacement based on actual viewport dimensions
    let factor = 1.0;
    if (width <= 480) {
        factor = 0.15; // Softens speeds on phones so assets don't exit view tracking areas
    } else if (width <= 768) {
        factor = 0.4;  // Medium adjustments for tablets
    }

    // 1. Core Title Parallax Engine
    if (text) {
        let yTranslation = (value * (2.0 * factor)) - 50;
        text.style.transform = `translate(-50%, ${yTranslation}px)`; 
    }
    
    // 2. Home Layout Layers
    if (hill1) {
        hill1.style.transform = `translateY(${value * -0.08 * factor}px)`;
        hill5.style.transform = `translateX(${value * 1.2 * factor}px)`;
        hill4.style.transform = `translateX(${value * -1.2 * factor}px)`;
        
        if (leaf) {
            leaf.style.transform = `translateY(${value * -1.2 * factor}px) translateX(${value * 1.2 * factor}px)`;
        }
    } 
    
    // 3. Culture Layout Layers
    else if (mountain1) {
        mountain1.style.transform = `translateX(${value * 0.4 * factor}px)`;
        mountain2.style.transform = `translateX(${value * 0.2 * factor}px)`;
        
        if (trees1) trees1.style.transform = `translateX(${value * 1.0 * factor}px)`;
        if (trees2) trees2.style.transform = `translateX(${value * -1.0 * factor}px)`;
        
        if (Man) {
            Man.style.transform = `translateX(${value * -0.4 * factor}px)`; 
        }
    }
    
    // 4. Sustainability Layout Layers
    else if (forest) {
        forest.style.transform = `translateY(${value * -0.04 * factor}px)`;
        if (rocks) rocks.style.transform = `translateY(${value * -0.08 * factor}px)`;
        if (water1) water1.style.transform = `translateY(${value * 0.04 * factor}px)`;

        if (bird1) bird1.style.transform = `translateY(${value * 1.2 * factor}px) translateX(${value * -0.8 * factor}px)`;
        if (bird2) bird2.style.transform = `translateY(${value * 0.6 * factor}px) translateX(${value * 0.4 * factor}px)`;
    }
    
    // 5. Alternate Night Scene Layers
    else if (moon) {
        moon.style.transform = `translateY(${value * -0.25 * factor}px)`;

        if (train) {
            train.style.transform = `translateX(${value * 1.2 * factor}px)`; 
        }
    }
});

// Dynamic viewport recalibration engine
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        let cleanups = [hill1, hill4, hill5, leaf, mountain1, mountain2, trees1, trees2, Man, forest, rocks, water1, bird1, bird2, moon, train];
        cleanups.forEach(el => {
            if (el) el.style.transform = '';
        });
        if (text) text.style.transform = 'translate(-50%, -50%)';
    }
});

// Cinematic Intro Animation Pipeline Initialization
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

// --- Existing Parallax scroll code remains here unchanged ---

// ==========================================================================
// MOBILE DRAWER ACTIVE CONTROLLER INTERACTION LOGIC
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const bodyElement = document.body;

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
        sidebarOverlay.classList.toggle("active");
        bodyElement.classList.toggle("menu-open");
    }

    function closeMenu() {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        sidebarOverlay.classList.remove("active");
        bodyElement.classList.remove("menu-open");
    }

    // Trigger toggle setup when clicking the hamburger button
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close slide layout instantly if background dimming overlay area is tapped
    sidebarOverlay.addEventListener("click", closeMenu);

    // Escape Key system cleanup for standard desktop access checks
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
});
