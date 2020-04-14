import os
import shutil
import time
def probeg(path):
    global name_list
    for name in os.listdir(path):
        path_name = path + '\\' + name
        if os.path.isdir(path_name):
            probeg(path_name)
        elif (os.path.splitext(path_name)[1] == '.html') and (path_name.find('index') == (-1)):
            name_list += [path_name]
            
    return path

print ('Файл находится в каталоге ' + os.getcwd())

name_list = []
path = os.getcwd() #Путь к папке если что
probeg(path)
mark = '<!--main-->'
emark = '<!--/main-->'
ind_path = path + '\\index.html'
with open(ind_path, encoding="utf-8") as ind:
    text = ind.read()
    bf = text[text.find('</head>')+7:text.find(mark)]
    af = text[text.find(emark)+len(emark):]

for name in name_list:
    with open(name, encoding="utf-8") as inp:
        text = inp.read()
        head = text[text.find('<meta content="http://Tipo - Learn.ru/img/preview.png"> <meta name="description" content=" С Типо Лерн Вы сможете научиться программированию с ноля, создать свой проект и в итоге, писать любой код на любом языке программирования" /> <link rel="image_src" href="http://Tipo - Learn.ru/img/logo_circle.png" />  <meta property="og:url" content="http://Tipo - Learn.ru/index.html"> <meta property="og:image"content="http://Tipo - Learn.ru/img/logo_circle.png"> <meta property="og:image:width" content="1000"/> <meta property="og:image:height" content="900"/>'):text.find('</head>')+7]
        cont = text[text.find(mark):text.find(emark)+len(emark)]
    name_out = name.replace('source', 'public_html')
    
    try:
        os.makedirs (os.path.dirname(name_out))
    except FileExistsError:
        with open(name_out, 'w', encoding="utf-8") as out:
            out.write(head + bf + cont + af)
            

print (' ')
print ('Done.')
time.sleep (0.5)
print (' ')
time.sleep (0.1)
input('Press Enter')
