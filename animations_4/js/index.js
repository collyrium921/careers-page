function engineering(){
    document.getElementById('departments').style.display = "none";
    document.getElementById('fields').style.display = "flex";
}

function backend(){
    document.getElementById('fields').style.display = "none";
    document.getElementById('positions').style.display = "flex";
}

function developer(){
    document.getElementsByClassName('wrapper')[0].style.display = "none";
    document.getElementById('job').style.display = "block";
}
