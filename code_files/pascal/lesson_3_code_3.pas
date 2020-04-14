uses crt;
var a,ed,des,sot:integer;
BEGIN
 readln(a);
 ed:=a mod 10;
 des:=a div 10 mod 10;
 sot:=a div 100;
 sot2:=ed*100;
 des2:=des*10;
 per:=sot2+des2+sot;
END.
