const myName = document.getElementById("myName");
const myPhoto = document.getElementById("myPhoto");
const myTitle = document.getElementById("myTitle");
const nextLine = document.getElementsByClassName("break");
const topBar = document.getElementById("topBar");

const aboutSection = document.getElementById("aboutSection");
const whoTab = document.getElementById("whoTab");
let aboutUp = false;
const portfolioSection = document.getElementById("portfolioSection");
const whatTab = document.getElementById("whatTab");
let portfolioUp = false;
const contactSection = document.getElementById("contactSection");
const whereTab = document.getElementById("whereTab");
let contactUp = false;


whoTab.addEventListener("click", moveAbout);
whatTab.addEventListener("click", movePortfolio);
whereTab.addEventListener("click", moveContact);

function moveAbout() {
    if(!aboutUp) {
        aboutUp = true;
        aboutSection.style.bottom = -1.5 + 'vh';
        rearangeNameTitleAndPic();
        // setTimeout(() => {
        //     rearangeNameTitleAndPic();
        // }, 4000);
    } else {
        if(!portfolioUp) {
            aboutUp = false;
            aboutSection.style.bottom = -94.5 + 'vh';
            rearangeNameTitleAndPic();
        }
        if(portfolioUp) {
            movePortfolio();
            if (portfolioUp) {
                portfolioUp = false;
                portfolioSection.style.bottom = -94.5 + 'vh';
            }
        }
    }
}

function movePortfolio() {
    if(!portfolioUp) {
        portfolioUp = true;
        portfolioSection.style.bottom = -1.5 + 'vh';
        if(!aboutUp) moveAbout();
    } else {
        if(!contactUp) {
            portfolioUp = false;
            portfolioSection.style.bottom = -94.5 + 'vh';
        }
        if(contactUp) moveContact();
    }
}

function moveContact() {
    if(!contactUp) {
        contactUp = true;
        contactSection.style.bottom = -1.5 + 'vh';
        if(!portfolioUp) movePortfolio();
        if(!aboutUp) moveAbout();
    } else {
        contactUp = false;
        contactSection.style.bottom = -94.5 + 'vh';
    }
}