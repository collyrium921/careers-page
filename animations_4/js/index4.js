function showOverlay(event, value){
    document.getElementById('overlay').style.display = "block";
    document.getElementById('departmentValue').innerText = value;
    document.getElementById('engineering').style.width = "250px";
    document.getElementById('engineering').style.height = "250px";
    document.getElementById('engineering').style.transform = "translate(" + (-150) +"%," + 0 + "%)";

    document.getElementById('data').style.width = "250px";
    document.getElementById('data').style.height = "250px";
    document.getElementById('data').style.transform = "translate(" + (-110) +"%," + (-120) + "%)";

    document.getElementById('design').style.width = "250px";
    document.getElementById('design').style.height = "250px";
    document.getElementById('design').style.transform = "translate(" + (15) +"%," + (-145) + "%)";

}

function cross(){
    document.getElementById('overlay').style.display = "none";
}


function showBranch(){
    document.getElementById('frontEnd').style.width = "250px";
    document.getElementById('frontEnd').style.height = "250px";
    document.getElementById('frontEnd').style.fontSize = "2rem";

    document.getElementById('android').style.width = "250px";
    document.getElementById('android').style.height = "250px";
    document.getElementById('android').style.fontSize = "2rem";


    document.getElementById('ios').style.width = "250px";
    document.getElementById('ios').style.height = "250px";
    document.getElementById('ios').style.fontSize = "2rem";


    document.getElementById('backend').style.width = "250px";
    document.getElementById('backend').style.height = "250px";
    document.getElementById('backend').style.fontSize = "2rem";

    // document.getElementById('frontEnd').transform = "translate(" + (15) +"%," + (-145) + "%)";
}

function showJobs(){
    document.getElementById('associate').style.width= "250px";
    document.getElementById('associate').style.height = "250px";
    document.getElementById('associate').style.fontSize = "1.5rem";

    document.getElementById('senior').style.width= "250px";
    document.getElementById('senior').style.height = "250px";
    document.getElementById('senior').style.fontSize = "1.5rem";

    document.getElementById('lead').style.width= "250px";
    document.getElementById('lead').style.height = "250px";
    document.getElementById('lead').style.fontSize = "1.5rem";
}

function showProfile(event, value){
    document.getElementById('job').style.display = "block";
    document.getElementById('job').innerText = value;
    document.getElementsByClassName('wrapper')[0].style.display = "none";
    document.getElementsByClassName('overlay')[0].style.opacity = 0;
}

function displayDepartment(){
    document.getElementById('technology').style.margin = '0';
    document.getElementById('technology').style.marginLeft = '-5%';
    document.getElementById('mobile-dep').style.display = "block";
}

function engineer(){
    document.getElementById("engineer").style.display = "block"
}

function profiles(){
    document.getElementById('profiles').style.display = "block";
}