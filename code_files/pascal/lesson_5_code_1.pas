uses crt;
var a,b,c:integer;
BEGIN
Readln(a);
Readln(b);
Readln(c);
if (a>=b) and (a>=c) then
begin
	writeln('���������� �����: ', a);
	if b>=c then writeln('���������� �����: ', c)
	else writeln('���������� �����: ', b);
end
else{��� �� �������� else} if (b>=a) and (b>=c) then
begin
	writeln('���������� �����: ', b);
	if a>=c then writeln('���������� �����: ', c)
	else writeln('���������� �����: ', a);
end
else
begin
	writeln('���������� �����: ', c);
	if a>=b then writeln('���������� �����: ', b)
	else writeln('���������� �����: ', a);
end;
END.