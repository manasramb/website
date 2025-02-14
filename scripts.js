// Handle logo scaling and expansion during scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const logoContainer = document.getElementById('logo-container');
    const featuresSection = document.querySelector('.features');

    // Scale down the logo as the user scrolls
    const scale = Math.max(1 - scrollY / 500, 0.5); // Minimum scale of 0.5
    logoContainer.style.transform = `scale(${scale})`;

    // Expand the logo when a certain scroll threshold is reached
    if (scrollY > 500 && !logoContainer.classList.contains('logo-expand')) {
        logoContainer.classList.add('logo-expand');
        setTimeout(() => {
            logoContainer.style.display = 'none';

            // Ensure proper CSS styling for '.features' section
            featuresSection.style.display = 'flex';
            featuresSection.style.justifyContent = 'center';
            featuresSection.style.alignItems = 'center';
            featuresSection.style.height = '200svh'; // Use dynamic viewport height for better compatibility
            featuresSection.style.flexDirection = 'column'; // Stack content vertically if needed
        }, 1500); // Matches the animation duration
    }
});

// Add animated cars at the top of the webpage
document.addEventListener('DOMContentLoaded', () => {
    const carAnimationContainer = document.createElement('div');
    carAnimationContainer.style.position = 'fixed';
    carAnimationContainer.style.top = '0';
    carAnimationContainer.style.left = '0';
    carAnimationContainer.style.width = '100%';
    carAnimationContainer.style.height = '100px';
    carAnimationContainer.style.overflow = 'hidden';
    carAnimationContainer.style.zIndex = '1000';
    carAnimationContainer.style.pointerEvents = 'none';

    for (let i = 0; i < 25; i++) {
        const car = document.createElement('div');
        car.style.width = '30px';
        car.style.height = '10px';
        car.style.background = i % 2 === 0 ? 'red' : 'blue';
        car.style.position = 'absolute';
        car.style.bottom = '0';
        car.style.left = `${-100 * (i + 1)}px`;
        car.style.borderRadius = '5px';
        car.style.animation = `drive ${5 + i}s linear infinite`;
        carAnimationContainer.appendChild(car);
    }

    document.body.appendChild(carAnimationContainer);

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes drive {
            0% {
                transform: translateX(-100px);
            }
            100% {
                transform: translateX(100vw);
            }
        }
    `;
    document.head.appendChild(style);
});

// Select sections
const sections = document.querySelectorAll('.center-section');
const finalSection = document.querySelector('.final-section');

// Add scroll event listener
window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.5;

        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        }
    });

    const finalSectionTop = finalSection.getBoundingClientRect().top;
    if (finalSectionTop < window.innerHeight / 1.5) {
        finalSection.classList.add('active');
    }
});


