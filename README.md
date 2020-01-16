# Teams Mospolytech

### Общая информация

В проекте:
- Глобальные стили лежат в отдельном файле `global-styles.css`, общие стили для повторяющихся элементов (wrapper, header, sitetoolbar) в `general-styles.css`
- Начинаем верстку с мобильной версии от 320px
- Используем методологию БЭМ
- Ссылки, не уводящие пользователя со страницы делаем тегом `<button>`
- Содержимое тегов выносим на отдельную строку
- Всем `<button>`, `<a>`, `<input>` и `<textarea>` устанавливаем поведение при focus и active
- Толкаем элементы только вниз: `margin-bottom`
- Изображениям проставляем фиксированные размеры в теге через атрибуты `width`, `height`

### Работа с ветками

Перед выполнением новой задачи переходим на `develop`,  стягиваем последние изменения, создаем новую ветку и работаем в ней

```bash
git checkout develop                # перейти на ветку develop
git pull                            # стянуть изменения
git branch <название ветки>         # создать новую ветку
git checkout <название ветки>       # перейти на новую ветку
```

Последние две строки можно заменить одной:

```bash
git checkout -b <название ветки>
```

------------

После выполнения задачи пушим изменения в нашу ветку и создаем Pull Request на GitHub

```bash
git add .
git commit -m 'описываем, что было сделано'
git push origin <название ветки>
```

------------

Памятка по Git

```bash
git status  - просмотр состояния файлов
git add - индексация изменений для последующего коммита
git commit - фиксация изменений в репозитории с комментированием
git push - отправка изменений в удаленный репозиторий
git clone - склонировать удаленный репозиторий
git pull - извлечение данных с удаленного репозитория
git branch - создание новой ветки
git checkout - переход на другую ветку
```

### Media-запросы

```
min-width: 320px // mobile
min-width: 768px // tablet
min-width: 1024px // desktop
min-width: 1400px // full-desktop
min-width: 2000px // tv
```

### Подключение к серверу через FTP
Хост: teamunite.ru

Имя пользователя: u0712620_team

Пароль: CdSTePakJ2ycw3Q8