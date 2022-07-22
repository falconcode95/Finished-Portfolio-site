const menu = document.getElementsByClassName("menu");
const hamburger = document.getElementsByClassName("hamburger");
const closeSign = document.getElementsByClassName("close-sign");
const close1 = document.getElementsByClassName("close1");
const close2 = document.getElementsByClassName("close2");
const menuDetails = document.getElementsByClassName("menu-details");
const emails = document.getElementsByClassName('e-mail');
const clipboard = document.getElementsByClassName('clipboard-text')[0];
console.log(clipboard);
for(let i=0; i < emails.length; i++){
    emails[i].addEventListener('click', ()=> {
        let content = 'a.z.mohamed@hotmail.com';
        clipboard.classList.add('animate-clipboard')
        navigator.clipboard.writeText(content);
    })
}

const closeHover = () => {
    close1[0].style.transition = 'background-color 400ms, transform 300ms';
    close2[0].style.transition = 'background-color 400ms, transform 300ms';
    close1[0].style.backgroundColor = 'rgb(119, 119, 119)';
    close2[0].style.backgroundColor = 'rgb(119, 119, 119)';
    close1[0].style.transform = 'rotate(135deg)';
    close2[0].style.transform = 'rotate(-135deg)';
}

const closeNormal = () => {
    close1[0].style.backgroundColor = 'white';
    close2[0].style.backgroundColor = 'white';
    close1[0].style.transform = 'rotate(45deg)';
    close2[0].style.transform = 'rotate(-45deg)';
}

closeSign[0].addEventListener('mouseenter', closeHover);
closeSign[0].addEventListener('mouseleave', closeNormal);

const menuOverlay = () => {
    for(let i=0; i < 3; i++){
        hamburger[i].style.transition = 'background-color 300ms';
        hamburger[i].style.backgroundColor = 'rgb(167, 167, 167)'
    }
}

const hideMenuOverlay = () => {
    for(let i=0; i < 3; i++){
        hamburger[i].style.backgroundColor = 'black';
    }
}

const showDetails = () => {
    menuDetails[0].style.display = 'block'
}

const hideDetails = () => {
    menuDetails[0].style.display = 'none'
}

menu[0].addEventListener('mouseover', menuOverlay);
menu[0].addEventListener('mouseout', hideMenuOverlay);
menu[0].addEventListener('click', showDetails);
closeSign[0].addEventListener('click', hideDetails)


gsap.to('.hero-image', {
    scrollTrigger: {
        trigger: '.hero-image',
        scrub: true,
        pin: true,
        pinSpacing: false,
    },
    ease: "power1.out", opacity: 0
})


const firstPage = gsap.timeline({defaults: {
    duration: 2.5
}})
firstPage.from('nav', {
    ease: "elastic.out(1, 0.3)", x: -500
})
.from('.landing-page-text h4, .landing-page-text h1', {
    ease: "power1.out", x: -1000
}, 0.5)
.from('.landing-page button', {
    ease: "power1.out", y: 500
}, 0.5)