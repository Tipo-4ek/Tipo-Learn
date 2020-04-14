import os
way_tem = os.getcwd()[:37]+'\\template.txt'
print (' ____________________________________________________________________________________ ')
print ('|-------_________--______-------------------------------------------____-------------|')
print ('|-------|_______|--|_____|-_-___----___-------_-----____-----------|---|-------------|')
print ('|----------|-|------|-|---|-|--|---|---|-----|-|----|--------/\----|---|---|\----|---|')
print ('|----------|-|------|-|---|-|__|---|---|-----|-|__--|___----/__\---|___|---|-\---|---|')
print ('|----------|-|------|-|---|-|------|---|-----|-|__|-|------/____\--|\----- |--\--|---|')
print ('|----------|_|-----_|_|_--|_|------|___|-----|____|-|___--/------\-|-\-----|---\-|---|')
print ('|-----------------|_____|------------------------------------------|--\----|----\|---|')
print ('|____________________________________________________________________________________|')

    
with open(way_tem, encoding="utf-8") as f:
    template = f.read()
mark = '<!--content-->'
markl = '<!--lesson-->'
lContentInput = template.find(markl)+len(markl)
n = 13 # Указывать >1
for i in range(1, n): #первая цифра - content_n 
    name_cont = 'content_'+str(i)+'.txt'
    name_out = 'pascal_lesson_'+str(i)+ '.html'
   
    

    with open(name_cont, encoding="utf-8") as f:
        content = f.read()

    output1 = template[:lContentInput-len(markl)] + str(i) + template[lContentInput:]
    iContentInput = output1.find(mark)+len(mark)
    output = output1[:iContentInput-len(mark)]+content + output1[iContentInput:]
    with open(name_out, 'w', encoding="utf-8") as f:
        f.write(output)
        
        
print ('Done.')
input()
