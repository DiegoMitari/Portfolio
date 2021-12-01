const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navID);

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

//Active and Remove menu

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {

    //active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove menu movile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
} 

navLink.forEach(n => n.addEventListener('click', linkAction));

//Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//scroll Home
sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home__img', {delay: 400});
sr.reveal('.home__social-icom+n', { interval: 200});


//scroll About
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {delay: 200});
sr.reveal('.about__text', {delay: 400});

//scroll Skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 100});
sr.reveal('.skills__data', {interval: 200});
sr.reveal('.skills__img', {delay: 100});

//scroll Work
sr.reveal('.work__img', {interval: 200});

//scroll Contact
sr.reveal('.contact__input', {interval: 200});