var arrDiv = document.getElementsByClassName('text'),
    arrTitles = document.getElementsByClassName('titles'),
    arrHeading = [],
    arrDescription = [];
for (var i = 0; i < arrDiv.length; i++) {
    arrHeading[i] = arrDiv[i].getElementsByTagName('h3')[0];
    arrDescription[i] = arrDiv[i].getElementsByClassName('description')[0];
}

function zoomInText() {
    for (var i = 0; i < arrTitles.length; i++) {

        if (arrDiv[i].getBoundingClientRect().top < 60 && arrDiv[i].getBoundingClientRect().bottom > 0) {
            arrTitles[i].classList.add('transform-header');
            arrHeading[i].style.color = "#0a0a0a";
            arrDescription[i].classList.add('col');
        } else {
            arrTitles[i].classList.remove('transform-header');
            arrHeading[i].style.color = "#9e9e9e";
            arrDescription[i].classList.remove('col');
        }
    }
}

function fixHeading() {
    document.getElementsByClassName('header-background')[0].style.display = "block";
    console.log(arrDescription[0].getBoundingClientRect().bottom);

    for (var i = 0; i < arrTitles.length; i++) {

        if (arrDescription[i].getBoundingClientRect().top <= 140 && arrDescription[i].getBoundingClientRect().bottom > 30) {
            arrHeading[i].classList.add('fixed-heading');
            arrHeading[i].classList.add('fade-in');
            arrDiv[i].style.marginTop = "107px";
            if (i >= 1) {
                document.getElementsByClassName('fixed-position')[0].style.display = "block";
            } else {
                document.getElementsByClassName('fixed-position')[0].style.display = "none";
            }
        } else {
            arrHeading[i].classList.remove('fixed-heading');
            arrHeading[i].classList.remove('fade-in');
            arrDiv[i].style.marginTop = 0;
        }
    }
}


function displayForm() {
    document.getElementById('applyNow').style.display = "none";
    document.getElementById('hamburgerIcon').style.display = "none";
    document.getElementsByClassName('form-container')[0].style.right = "0";
    document.getElementsByClassName("header")[0].classList.add("background-blur");
    document.getElementsByClassName("header-description")[0].classList.add("background-blur");
}

function hideForm() {
    document.getElementById('applyNow').style.display = "block";
    if (window.innerWidth > 600) {
        document.getElementsByClassName('form-container')[0].style.right = -70 + "%";
        document.getElementById('hamburgerIcon').style.display = "none";
    } else {
        document.getElementById('hamburgerIcon').style.display = "block";
        document.getElementsByClassName('form-container')[0].style.right = -100 + "%";
    }
    document.getElementsByClassName('header')[0].classList.remove('background-blur');
    document.getElementsByClassName('header-description')[0].classList.remove('background-blur');
}

function displayTilesOverlay() {
    document.getElementById('hamburgerIcon').style.display = "none";
    document.getElementsByClassName('tiles-overlay')[0].style.left = 0;
    document.getElementsByClassName("header")[0].classList.add("background-blur");
    document.getElementsByClassName("header-description")[0].classList.add("background-blur");
}

function hideTilesOverlay() {
    if (window.innerWidth <= 600) {
        document.getElementById('hamburgerIcon').style.display = "block";
    } else {
        document.getElementById('hamburgerIcon').style.display = "none";
    }
    document.getElementsByClassName('tiles-overlay')[0].style.left = -100 + "%";
    document.getElementsByClassName('header')[0].classList.remove('background-blur');
    document.getElementsByClassName('header-description')[0].classList.remove('background-blur');
}

function scrollToElement(self, value) {
    var top = document.getElementById(value).getBoundingClientRect().top - 50 + window.scrollY;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}

function hideFileName(self, value, trash) {
    document.getElementById(value).textContent = "";
    document.getElementById(trash).style.display = "none";
}

function changeText(self, value, trash) {
    document.getElementById(value).textContent = self.files[0].name;
    document.getElementById(trash).style.display = "inline";
}

window.onscroll = function() {
    if (window.innerWidth > 600) {
        zoomInText();
    } else {
        fixHeading();
    }
};

window.onresize = function() {
    if (window.innerWidth > 600) {
        document.getElementById('hamburgerIcon').style.display = "none";
        document.getElementsByClassName('form-container')[0].style.right = -70 + '%';
    } else {
        document.getElementById('hamburgerIcon').style.display = "block";
        document.getElementsByClassName('form-container')[0].style.right = -100 + '%';
    }
}

function delayCheck() {
    document.getElementById('applyNow').style.display = "none";
}

document.onmousemove = (function() {
    document.getElementById('applyNow').style.display = "block";
    setTimeout(delayCheck, 5000);
});
setTimeout(delayCheck, 5000);