// III. 2)

var questions = [
    {
        question : "Which style/styles represented him best?",
        answers : [["Baroque",true],
                   ["Avant-garde",false],
                   ["Impressionism",false],
                   ["Classicism",false]]
    },{
        question : "Choose the titles belonging to his artwork",
        answers : [["The Scream",false],
                   ["Starry night",false],
                   ["The fall of Phaeton",true],
                   ["Venus at the mirror",true]]
    },{
        question : "His paintings are famous for the portrayal of:",
        answers : [["Nature",false],
                   ["Royal families",false],
                   ["Mythological scenes",true],
                   ["Interior designs",false]]
    },{
        question : "He was also known as a:",
        answers : [["Doctor",false],
                   ["Chef",false],
                   ["Royal Advisor",false],
                   ["Diplomat",true]]
    }
];

var rasp=[];
for(let i=0;i<questions.length;i++)
  {
    var aux="";
    for(let j=0;j<questions[i].answers.length;j++)
    if(questions[i].answers[j][1]==true)
    aux+=j.toString();

    rasp.push(aux);
  }

var score=0;


var ol=document.createElement("ol");
ol.id="start";
for(let i=0;i<questions.length;i++)
  {
    var q=document.createElement("li");
    q.innerHTML=questions[i].question;
    var ul=document.createElement("ul");
    ul.id="rasp"+i.toString();
    for(let j=0;j<questions[i].answers.length;j++)
    {
      var li=document.createElement("li");
      var check=document.createElement("input");
      check.type="checkbox";
      check.value=questions[i].answers[j][0];
      var label = document.createElement("label");
      label.appendChild(document.createTextNode(questions[i].answers[j][0]));
      li.appendChild(check);
      li.appendChild(label);
      ul.appendChild(li);
    }
    q.appendChild(ul);
    ol.appendChild(q);
    
  }

	var sub=document.createElement("input");
    sub.type="submit";
    sub.value="Check!"
    sub.id="submit";

    var rez=document.createElement("input");
    rez.type="text";
    rez.id="rez";

    ol.appendChild(sub);
    ol.appendChild(rez);

  document.getElementById("quiz").appendChild(ol);


document.addEventListener('DOMContentLoaded', function() {
   var element = document.getElementById("submit");
   
   element.onclick = function() {
		for(let i=0;i<questions.length;i++)
		{
			var name="rasp"+i.toString();
			var check=document.getElementById(name).querySelectorAll("input[type=checkbox]");
			var verif="";
			for(let j=0;j<check.length;j++)
			{	
				if(check[j].checked==true) 
				{
					verif+=j.toString(); 
				}
				check[j].disabled=true;
			}
			if(verif==rasp[i]) score++;
		}
       var txt=document.getElementById("rez");
       txt.value=score.toString()+"/"+questions.length.toString();
   }

}, false);
  