function engineering(){
    document.getElementById("engineering").style.transform = "translate(" + 150 + "%," +  (45) + "%)";
    document.getElementById('backend').style.fontSize = "30px"; 
    document.getElementById('backend').style.width = "250px";
    document.getElementById('backend').style.height = "250px";
    document.getElementById('backend').style.transform = "translate(" + 250+ "%," + (-50) + "%)";
}

function backend(){
    document.getElementById("backend").style.transform = "translate(" + 280+ "%," + (45) + "%)";
    document.getElementById('post').style.fontSize = "30px";
    document.getElementById('post').style.height = "250px";
    document.getElementById('post').style.width = "250px";
    document.getElementById('post').style.transform = "translate(" + 350 +"%," + (-50) +"%)";
}

function showPost(){
    document.getElementsByClassName('wrapper')[0].style.display = "none";
    document.getElementById('job').style.display = "block"; 
}