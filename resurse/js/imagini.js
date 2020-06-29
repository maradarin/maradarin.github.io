// I. 8)
function hide() {
var btn = document.getElementById("hide");
var images = document.getElementsByTagName('img');
for (i = 0; i < images.length;i++ ) {
    images[i].style.visibility=images[i].style.visibility == 'visible'? 'hidden' : 'visible';
    if(images[i].style.visibility=='visible') btn.value='Hide';
    else btn.value='Show'; 
}
}