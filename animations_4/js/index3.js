function  overlay(){
    document.getElementById('overlay').style.display = "block";
    document.getElementsByClassName('wrapper')[0].style.opacity = .2;
    document.getElementById('engineering').style.height = "250px";
    document.getElementById('data').style.height = "250px";
    document.getElementById('design').style.height = "250px";

    document.getElementById('data').style.width = "250px";
    document.getElementById('design').style.width = "250px";
    document.getElementById('engineering').style.width = "250px";

    document.getElementById('engineering').style.transform = "translate(" + -(135) + "%," + (-70) + "%)";
    document.getElementById('data').style.transform = "translate(" + (-50) + "%," + (-155) + "%)";
    document.getElementById('design').style.transform = "translate(" + 70 + "%," + (-140) + "%)";


}

function backend(){
    document.getElementById('backend').style.width = "250px";
    // document.getElementById('frontEnd').style.width = "250px";
    // document.getElementById('android').style.width = "250px";

    document.getElementById('backend').style.height = "250px";
    // document.getElementById('forntEnd').style.height = "250px";
    // document.getElementById('android').style.height = "250px";

    document.getElementById('backend').style.transform = "translate(" + -(250) + "%," + (-100) + "%)";


    // document.getElementById("backend").style.transform = "translate(" + (-250) + "%," + (-100) +"%)";
    // document.getElementById("frontEnd").style.transform = "translate(" + (-250) + "%," + (-100) +"%)";
    // document.getElementById("android").style.transform = "translate(" + (-250) + "%," + (-100) +"%)";

}

function job(){
    document.getElementById('developer').style.fontSize = "20px";
    document.getElementById('developer').style.paddingTop = "4rem";
    document.getElementById('post').style.width = "200px";
    document.getElementById('post').style.height = "200px";
    document.getElementById('post').style.transform = "translate(" + (-420) +"%," + (-170) + "%)";
}

function showJob(){
    document.getElementsByClassName('wrapper')[0].style.display = "none";
    document.getElementsByClassName('overlay')[0].style.display = "none";
    document.getElementById('job').style.display = "block"; 
}

function cross(){
    document.getElementById('overlay').style.display = "none";
    document.getElementsByClassName('wrapper')[0].style.opacity = 1;
}