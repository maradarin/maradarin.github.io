// II. 13)
function countWords(){
    main = document.getElementsByTagName("body")[0];
    var text = main.innerText.split(" ");
    nr_cuv = document.getElementById("nr_cuv");
    nr_cuv.value = text.length;
}