// II. 1)

window.onload=function() {
    var getVarsta = document.getElementById("btn_age");
    getVarsta.onclick=function()
    {
        var varsta=document.getElementById("myAge").value;
        if(varsta=="") alert("Insert valid input");
        else
        {varsta=varsta.split("#"); 
        if(varsta.length!=3) alert("Insert valid input"); 
        else {  
		document.getElementById("varsta").value="";
		var myVar = setInterval(myTimer, 1000);
		function myTimer()
		{
			var date=new Date();
			var year=date.getFullYear();
			var month=date.getMonth();
			var day=date.getDay();
			var hour=date.getHours();
			var minutes=date.getMinutes();
			var seconds=date.getSeconds();
			var v="";
			var l = 12 - parseInt(varsta[1]) + month + 1; //numarul de luni;
			var z = 31 - parseInt(varsta[0]) + day; //numarul de zile
			l+=Math.floor(z/31);
			z-=31*Math.floor(z/31);
			var a = year - parseInt(varsta[2]) - 1;
			a+=Math.floor(l/12);
			l-=12*Math.floor(l/12);
			v += a + "a " + l + "l " + z + "z " + hour +"h " + minutes + "m " + seconds + "s";
			document.getElementById("varsta").value=v;
			
		 }
        }
       }
    
    }   
}