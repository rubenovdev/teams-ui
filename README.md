# Teams Mospolytech

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
git pull - извлечение данных с удаленного репозитория
git branch - создание новой ветки
git checkout - переход на другую ветку
git clone - склонировать удаленный репозиторий
git pull - стянуть последние изменения из удаленного репозитория
```

### Media-запросы

```
min-width: 320px // mobile
min-width: 768px // tablet
min-width: 1024px // desktop
min-width: 1400px // full-desktop
min-width: 2000px // tv
```