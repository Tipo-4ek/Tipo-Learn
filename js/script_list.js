quest = ['1)Тип программного обеспечения и название софта','2)Процедура и выходное значение','3)Определение и термин','4)Объвление типа и название типа']
			
quest2 = ['Компилятор','Интерпретатор','Офисное приложение','Эмулятор',
		  'a:= 10; write (a)','write (random(10))','sqrt(4)','sqr(2)',
		  'Элемент языка, задающий полное описание действия, которое необходимо выполнить.','Формальный язык, предназначенный для записи компьютерных программ.','Пронумерованная последовательность величин одинакового типа, обозначаемая одним именем.','Подпрограмма, которая, кроме получения параметров, выполнения действий и передачи результатов работы, возвращает результат',
		  'Символьный','Целочисленный','Строковый','Двумерный массив'
		  
				]

ans = ['Python','Pascal','BlueStacks','MS Office',
		 'Случайное число от 0 до 9','2','4','10',
		   'Язык программирования','Функция','Массив','Оператор',			
		 'Char','String','Integer','array[1..100, 1..100] of integer'
	  ]

vans = ['1032','3012','3021','0000',]


function check ()
{
	 error = "";
	 n = 0;
	 g = "";

	for (j=0; j<quest.length; j++)
	{
	 for (l=0; l<4; l++)
	 {
	  g = g + eval("document.f1.q" + j*4+l + ".selectedIndex")
	 }
	  if (g == vans[j]) { n+=1 }
	  	else { error = error + "  " + String(j+1) }
	  	g = ""; 	
    }
if (n == quest.length) {b = "Поздравляем, Вы ответили верно на все вопросы"}
		else
			{b = "В тесте допущены ошибки, попробуйте пройти еще раз."}
  alert (b + '\n\nНомера неверных -' +  error);
  window.location.reload()

}


  s = "";
  error = "";

s = "<form name ='f1'>";
for (i=0; i<quest.length; i++)
{
	s = s + "<h3 style = 'text-align:left; padding-left:10px;'>" + quest [i] + "</h3>"
	
	//s = s + "<select class=turnintodropdown type = 'list' id =t"+ i + "> <br> ";
    //s = s + "<select type = 'list' id =t"+ i + "> <br> ";
	for (k=0; k<4; k++)
	{
		s = s + "<span style = 'text-align:left; padding-left:30px; font-size:18px;'>" + quest2[i*4+k] + " - </span> <select type = 'list' style = 'margin-bottom:20px;' name =q"+ i*4+k
		 + "> <br> ";
		for (n=0; n<4; n++)
		{
		s = s + "<option> " + ans[i*4+n] + " </option> ";
		}
		s = s + "  </select> <br>"	
	}
	
}
s = s + "<br> <input type ='button' name = 'but1' value ='Проверить' onclick = 'check()'>"
document.write (s);
