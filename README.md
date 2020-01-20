# Teams Mospolytech

### Общая информация

**По архитектуре:**
- Глобальные стили лежат в отдельном файле `global-styles.css`, общие стили для повторяющихся элементов (wrapper, header, sitetoolbar) в `general-styles.css`

**По верстке:**
- Начинаем верстку с мобильной версии от 320px
- Используем методологию БЭМ
- Ссылки, не уводящие пользователя со страницы делаем тегом `<button>`, а уводящие тегом `<a>`
- Содержимое тегов выносим на отдельную строку
- Всем `<button>`, `<a>`, `<input>` и `<textarea>` устанавливаем поведение при focus и active
- Толкаем элементы только вниз, через `margin-bottom`, `padding-bottom`
- Изображениям проставляем фиксированные размеры в теге через атрибуты `width`, `height`
- У тега `<button>` проставляем атрибут `type="button"`
- Всегда добавляем на страницу тег `<h1>`, если он неуместен, то скрываем
- Используем `min-width: ;`, `max-width: ;` и `min-height: ;`, `max-height: ;`, но если значение в `%`, то `width: ;` и `height: ;`
- Атрибут `class=""` всегда ставим на первое месте среди атрибутов
- Пользуемся готовыми стилями для быстрого создания элементов: `.wrapper`, `.title`, `.button`, `.input`, `.textarea`

**По js:**
- Переменным и функциям даем понятные и подходящие по смыслу названия
- В проекте не используем точки с запятыми

### Работа с ветками

**Перед выполнением новой задачи** переходим на `develop`,  пуллим последние изменения, создаем новую ветку с названием задачи и работаем в ней

```bash
git checkout develop                # переходим на ветку "develop"
git pull                            # стягиваем изменения с удаленного репозитория
git branch название-ветки           # создаем новую ветку, например TEAM-102
git checkout название-ветки         # переходим на новую ветку
```

Последние две строки можно заменить одной:

```bash
git checkout -b название-ветки      # создаем новую ветку и сразу переходим на нее
```

------------

**Во время выполнения задачи** фиксируем изменения и отправляем их на удаленный репозиторий

```bash
git add .
git commit -m 'описываем, что сделали'
git push origin название-ветки
```

**После выполнения задачи** пушим последние изменения в нашу ветку и создаем Pull Request на GitHub

В Pull Request описываем что было сделано, указываем в Reviewers кураторов задачи, и в Assignees указываем себя


------------

**Памятка по Git**

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
**Хост:** teamunite.ru
**Имя пользователя:** u0712620_team
**Пароль:** CdSTePakJ2ycw3Q8
