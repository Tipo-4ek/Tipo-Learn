
quest = ['1) Присвойте константе а - значение 10',
		 '2) Сколько значений переберет цикл for с таким заголовком for i:= -121 to 173 do?',
		 '3) Вставьте в строку s на 1 позицию символ #',
		 '4) Что выведет строка? <br> <textarea readonly style = height:50px; > write (sqr(10)+5) </textarea>',
		 '5) Сколько значений переберет цикл for с таким заголовком for i:= -50 to 141 do?',
			]



vans = ['consta=10',
		'295',
		'insert(#,s,q)',
		'105',
		'192',
	   		]


function check()
{
	n = 0;
	error = "";

	for (i = 0; i<quest.length; i++)
	{
		var val = document.getElementById('q'+ i).value;

		if ( reg(val) == vans[i] ) { n++ }
			else { error = error + "  " + String(i+1) }

	}
alert ('Верных = ' + n + '\n\nНомера неверных -' +  error);
window.location.reload()
}

function reg(str)
{
	str = str.replace(/\s/g, '');
	str = str.toLowerCase(); 
	
	return str;
}




s = "";
s = "<form name ='f1'>";
for (i=0; i<quest.length; i++)
{
	s = s + "<h2 style = 'text-align:left; text-indent:15px;'>" + quest[i] + "</h2>";
	s = s + "<input type = 'text' id =q"+ i + "> <br>";

}


s = s + "<br> <input type ='button' name = 'but1' value ='Проверить' onclick = 'check()'>"
document.write (s);

