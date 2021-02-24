window.addEventListener("resize", rotateNameAccordingToAngle)

function rotateNameAccordingToAngle() {
    if(!aboutUp) {
        const nameTop = window.innerWidth * 0.65;
        const nameLeft = window.innerHeight * 0.65;
        const angle = Math.atan2(nameLeft,nameTop) * 180 / Math.PI;
        myName.style.transform = "rotate(-" + angle + "deg)";
    }
}

rotateNameAccordingToAngle();

function rearangeNameTitleAndPic() {
    if(aboutUp) {
        for(let i = 0; i < nextLine.length; i++) {
            nextLine[i].style.position = "absolute";
        };
        myName.style.transition = "transform 4s, font-size 4s, margin 4s, color 4s";
        myName.style.transform = "initial";
        myName.style.fontSize = "3vw";
        myName.style.margin = "0px";
        myName.style.color = "green";
        myTitle.style.transition = "font-size 4s, margin 4s, right 4s";
        myTitle.style.fontSize = "3vw";
        myTitle.style.margin = "0px";
        myTitle.style.bottom = "initial";
        myTitle.style.right ="55%";
        topBar.style.display = "initial";
        myPhoto.style.clipPath = "initial";
        myPhoto.style.borderRadius = "50%";
        myPhoto.style.margin = "7px 20px 0 0"
        myPhoto.style.height = "5%";
        myPhoto.style.width = "5%";
        myPhoto.style.right = "0";
    } else {
        for(let i = 0; i < nextLine.length; i++) {
            nextLine[i].style.position = "initial";
        };
        rotateNameAccordingToAngle();
        myName.style.fontSize = "7vw";
        myName.style.marginTop = "50px";
        myName.style.color = "black";
        myTitle.style.fontSize = "7vw";
        myTitle.style.margin = "initial";
        myTitle.style.bottom = "5vh";
        myTitle.style.right ="5vw";
        topBar.style.display = "none";
        myPhoto.style.clipPath = "polygon(65% 0, 100% 0, 100% 30%, 30% 100%, 0 100%, 0 65%)";
        myPhoto.style.borderRadius = "initial";
        myPhoto.style.margin = "0px"
        myPhoto.style.height = "100vh";
        myPhoto.style.width = "100vw";
        myPhoto.style.right = "initial";
    }
    
}