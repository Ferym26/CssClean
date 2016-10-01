# CssClean v0.1
### Gulp таск для удаления лишних css свойств

### Установка
 - Установить [NodeJs](https://nodejs.org)
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