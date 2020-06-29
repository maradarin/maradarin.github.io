document.addEventListener("DOMContentLoaded", function(event){
  
  var produse=document.getElementsByClassName("templ_obiect");
  
  var optiuni=document.getElementById("select");
  optiuni.addEventListener("change", function() {
    if(optiuni.value == "year")
    {
      produse = Array.prototype.slice.call(produse, 0);
      produse.sort(function(a, b) {
    	  var aux1=a.getElementsByTagName("p");
        var rez1=aux1[5].innerHTML.split(" ");
        var aux2=b.getElementsByTagName("p");
        var rez2=aux2[5].innerHTML.split(" ");
        if(parseInt(rez1[3]) > parseInt(rez2[3])) return 1;
        else if(parseInt(rez1[3]) == parseInt(rez2[3]))
        {
        	var val1=aux1[4].innerHTML.split(" ");
            var val2=aux2[4].innerHTML.split(" ");
            return (parseInt(val1[2].substr(1)) > parseInt(val2[2].substr(1)) ? 1 : -1);
        }
        else return -1;
    })
      var container = document.getElementById("afisTemplate");
      container.innerHTML = "";

      for(var i = 0; i < produse.length; i++) {
      
          container.appendChild(produse[i]);
      }
    }
    else {
      var lic=[];
      for(let i=0; i<produse.length; i++)
      {
        var par=produse[i].getElementsByTagName("p");
          var rez=par[2].innerHTML.split(" ");
          if(rez[2]=="true") lic.concat(produse[i]);
          else produse[i].style.display="none";
      }
      lic = Array.prototype.slice.call(produse, 0);
      lic.sort(function(a, b) {
        var aux1=a.getElementsByTagName("p");
          var aux2=b.getElementsByTagName("p");
          var val1=aux1[4].innerHTML.split(" ");
          var val2=aux2[4].innerHTML.split(" ");
          return (parseInt(val1[2].substr(1)) > parseInt(val2[2].substr(1)) ? -1 : 1);
      })
      var container = document.getElementById("afisTemplate");
      container.innerHTML = "";

      for(var i = 0, l = lic.length; i < l; i++) {
          container.appendChild(lic[i]);
      }
    }
    
  });

  var txt=document.createElement("input");
  txt.disabled=true;
  txt.type="text";
  txt.classList.add("myInput");
  document.getElementById("btn").appendChild(txt);
	var nr = localStorage.getItem("viz");
	if(!nr){
		nr=1;
	}
	else nr = parseInt(nr)+1;
	localStorage.setItem("viz", nr);
	txt.value=nr;
  
	var btn = document.createElement("button");
  	btn.classList.add("stil");
	btn.innerHTML = "OK";
  	btn.id="btn_din"
	document.getElementById("btn").appendChild(btn);
	btn.onclick = function(){
		this.previousSibling.nodeValue = 0;
    txt.value=0;
    var x=setInterval(setColor, 3000);
    setColor();
		localStorage.clear();
	}

  function setColor() {
  var btn = document.getElementById("btn_din");
  btn.style.backgroundColor = btn.style.backgroundColor == "blue" ? "orange" : "blue";}
  

  var btn1=document.getElementById("btn1");
  btn1.onclick=function()
  {
    var stil=[], id=[];
    for(let i=0;i<produse.length;i++)
    {
      var par=produse[i].getElementsByTagName("p");
      var rez=par[2].innerHTML.split(" ");
      if(rez[2]=="false") produse[i].style.display="none";
      else {stil=stil.concat(produse[i]);
      id=id.concat(produse[i].getElementsByTagName("p")[6].innerHTML.split(" ")[1]);}
    }
    for(let i=0;i<stil.length;i++)
      stil[i].onclick=function() {
        var url="url"+"('../IMAGINI/"+id[i].toString()+".jpg')";
        if(stil[i].style.backgroundImage=="")
          stil[i].style.backgroundImage=url;
        else stil[i].style.backgroundImage="";
      }
  }
  var btn2=document.getElementById("btn2");
  btn2.onclick=function()
  {
      for(let i=0;i<produse.length;i++)
    	{
        if(produse[i].style.display=="none")
        produse[i].style.display="block";
        produse[i].onclick=function() { return false; }
      }

  }

  var btn7=document.getElementById("btn7");
  btn7.onclick=function()
  {
    var element=prompt("Please enter id of the piece to be deleted");
    if(parseInt(element)>produse.length || parseInt(element)<1) alert("ID does not exist");
    else if(element!=null) produse[parseInt(element)-1].style.display="none";
  }

  var btn5=document.getElementById("btn5");
  btn5.onclick=function()
  {
    var max=0, poz=0;
    for(let i=0;i<produse.length;i++)
    {
      if(produse[i].style.display=='none') produse[i].style.display='block';
      var pret=produse[i].getElementsByTagName("p")[4].innerHTML.split(" ");
      if(max<parseFloat(pret[2].substr(1))) {max=parseFloat(pret[2].substr(1)); poz=i;}
    }
    for(let i=0;i<produse.length;i++)
    if(i!=poz) produse[i].style.display='none';
	setTimeout(alertFunc(max), 100);

    function alertFunc(max) {
    alert("Maximum price is: $"+max+" milions");
    }
}
  
  
  var btn6=document.getElementById("btn6");
  btn6.onclick=function()
  {
    var min=900, poz=0;
    for(let i=0;i<produse.length;i++)
    {
      if(produse[i].style.display=='none') produse[i].style.display='block';
      var pret=produse[i].getElementsByTagName("p")[4].innerHTML.split(" ");
      if(min>parseFloat(pret[2].substr(1))) {min=parseFloat(pret[2].substr(1)); poz=i;}
    }
    for(let i=0;i<produse.length;i++)
    if(i!=poz) produse[i].style.display='none';
	setTimeout(alertFunc(min), 100);

    function alertFunc(min) {
    alert("Maximum price is: $"+min+" milions");
    }
  }

}

);
