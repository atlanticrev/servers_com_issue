Запустить проект: npm run start

Некоторые комментарии по работе:

1. Для управления данными на клиенте я предпочел использовать обычные модели с подписками,
счел такой подход более прозрачным и требующим меньше зависимостей. (Если такой подход совсем не понравится, 
могу переписать на redux)

2. Для стилей тоже решил не тащить ничего лишнего, использую css-modules

3. По поводу фильтров сообщений, я реализовал только простой поиск по автору или фрагменту текста 
в сообщении, есть еще вариант сделать выбор критерия фильтра (автор/текст/дата) и искать в соотв. 
с критерием, нужно ли добавить такой функционал?
