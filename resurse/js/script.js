window.onload=function(){
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();


	//la schimbarea starii obiectului XMLHttpRequest (la schimbarea proprietatii readyState)
	/* stari posibile:
	0 - netrimis
	1 - conexiune deschisa
	2 - s-au transmis headerele
	3 - se downleadeaza datele (datele sunt impartite in pachete si el primeste cate un stfel de pachet)
	4 - a terminat
	*/
	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
					//document.getElementById("afisJson").innerHTML=this.responseText;// bucata comentata care afisa informatiile simplu, ca in json
					var obJson = JSON.parse(this.responseText);
					afiseajaJsonTemplate(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
	ajaxRequest.open("GET", "/json/colectie.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

	function afiseajaJsonTemplate(obJson) { 
			let container=document.getElementById("afisTemplate");

			let textTemplate ="";
			for(let i=0;i<obJson.colectie.length;i++){
        
				textTemplate+=ejs.render("<div class='templ_obiect'>\
				<p>Title: <%= obiect.titlu %></p>\
				<p>Artist name: <%= obiect.artist %></p>\
				<p>For auction: <%= obiect.licitatie%></p>\
				<p>Type: <%= obiect.tip%></p>\
				<p>Estimated value: <%= '$'+ obiect.pret + ' milion'%></p>\
				<p>Year of creation: <%= obiect.year%></p>\
				<p>Id: <%= obiect.id%></p>\
				</div>", 
				{obiect: obJson.colectie[i]});
			} 
			container.innerHTML=textTemplate;
	}
  
}

function cauta() {
    var nume=[],titlu=[];
    var input = document.getElementsByClassName("myInput")[0];
    var filter = input.value.toUpperCase();
    var produse=document.getElementsByClassName("templ_obiect");
    for(let i=0;i<produse.length;i++)
    	{
        var aux=produse[i].getElementsByTagName("p");
        titlu=titlu.concat(aux[0].innerHTML);
        nume=nume.concat(aux[1].innerHTML);
      }
    for (i = 0; i < nume.length; i++) {
        if (nume[i].toUpperCase().indexOf(filter) > -1 ||
        	titlu[i].toUpperCase().indexOf(filter) > -1) {
            produse[i].style.display = "block";
        } else {
            produse[i].style.display = "none";
        }
    }
}