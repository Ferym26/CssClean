# CssClean v0.1
### Gulp таск для удаления лишних css свойств

### Установка
 - Установить [NodeJs](https://nodejs.org)
 - Установить [Git](https://git-scm.com/). [Гайд №1](https://www.youtube.com/playlist?list=PLY4rE9dstrJyTdVJpv7FibSaXB4BHPInb), [Гайд №2](https://www.youtube.com/playlist?list=PLoonZ8wII66iUm84o7nadL-oqINzBLk5g)
 - Устноваить и настроить [ConEmu](http://www.conemu.ru) (желательно), [гайд](https://www.youtube.com/watch?v=x0hw8llIZkY) по настройке. (удобный терминал для пользователей Windows)
```sh
$ npm i
$ npm i -g gulp (*)
(*) Если не установлен глобально
```

### Как использовать
 - в папку "html" поместить *.html файл(-ы)
 - в папку "css" поместить *.css файл(-ы), который необходимо очистить
 - выполнить "$ gulp cssclean"
 - забрать из папки "out" очищенный %filename%.clean.css