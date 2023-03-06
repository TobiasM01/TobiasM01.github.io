document.getElementById("boton1.A").addEventListener("click", black);

function black(){

    document.getElementsByClassName("col-9")[0].style.color = "black";

    document.getElementsByClassName("col-9")[0].style.backgroundColor = "#ddcab8"
    
    document.getElementsByClassName("Header2")[0].style.backgroundColor = "#C4A484"

    
}

document.getElementById("boton2.A").addEventListener("click", white);

function white(){

    document.getElementsByClassName("col-9")[0].style.color = "white";
    
    document.getElementsByClassName("col-9")[0].style.backgroundColor = "#212F3C"
    
    document.getElementsByClassName("Header2")[0].style.backgroundColor = "#7F8282"
    
}