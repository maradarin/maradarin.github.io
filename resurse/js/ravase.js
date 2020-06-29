// I. 7)

window.onload = function()
{
	var ravase = ["Masterpieces weren't finished in a single day", "Freestyle your way through", "God is an artist", "My favorite color is the color of your eyes"];

    var index = Math.floor((Math.random() * ravase.length));
    var p = document.createElement("p");
    p.innerHTML = ravase[index];
    var adaug = document.getElementById("ravase");
    adaug.appendChild(p);
}