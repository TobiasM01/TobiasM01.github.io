document.getElementById("boton1.W").addEventListener("click", black);

function black(){
  
    document.getElementsByClassName("col-9")[0].style.color = "black";

    document.getElementsByClassName("col-9")[0].style.backgroundColor = "#ddcab8"
    
    
  
    document.getElementsByClassName("Header4")[0].style.backgroundColor = "#C4A484"
    
    
}

document.getElementById("boton2.W").addEventListener("click", white);

function white(){

    document.getElementsByClassName("col-9")[0].style.color = "white";
   
    document.getElementsByClassName("col-9")[0].style.backgroundColor = "#212F3C"
    
   
    
    document.getElementsByClassName("Header4")[0].style.backgroundColor = "#7F8282"
}