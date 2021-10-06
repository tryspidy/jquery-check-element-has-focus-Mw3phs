//test if element has focus in jQuery
if ($("#myElementID").is(":focus")) {
    //I have the focus
}

//test if element has focus in plain Javascript
var myElement = document.getElementById('myID');
if(myElement === document.activeElement){
    //myElement Has Focus
}
