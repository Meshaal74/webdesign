var elements  = document.getElementsByClassName("inputs-group");
var link = document.getElementsByClassName("switchlink");
var login = document.getElementsByClassName("login");
function display(){
    'use strict';
    elements[1].style.display = "none";
    elements[3].style.display = "none";
    link.innerText = "New Member ?";
}