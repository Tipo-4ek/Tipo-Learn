uses crt;
var a,b,c:integer;
BEGIN
Readln(a);
Readln(b);
Readln(c);
if (a>=b) and (a>=c) then
begin
	writeln('Наибольшее число: ', a);
	if b>=c then writeln('Наименьшее число: ', c)
	else writeln('Наименьшее число: ', b);
end
else{Боб не поставил else} if (b>=a) and (b>=c) then
begin
	writeln('Наибольшее число: ', b);
	if a>=c then writeln('Наименьшее число: ', c)
	else writeln('Наименьшее число: ', a);
end
else
begin
	writeln('Наибольшее число: ', c);
	if a>=b then writeln('Наименьшее число: ', b)
	else writeln('Наименьшее число: ', a);
end;
END.