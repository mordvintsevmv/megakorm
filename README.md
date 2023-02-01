# MegaKorm - Thinkopp Test Task

Тестовое задание на позицию **"Web-программист | HTML-верстальщик"**

[//]: # (<a href="https://mordvintsevmv.github.io/megakorm" target="_blank">Страница</a>)

---

## <a name="content">Содержание</a>

0. [Задание](#task)
    - [Вводная часть](#task-description)
    - [Программа «минимум»](#task-min)
    - [Программа «максимум»](#task-max)
    - [Сроки](#task-date)
2. [Contacts](#contacts)

---

## <a name="task">Задание</a>

### <a name="task-description">Вводная часть</a>

Есть сайт https://megakorm.ru/. 
Он должен быть адаптивным и при изменении размеров окна на десктоп версии или смене ориентации с вертикальной на горизонтальную версию – все может «плыть», сетка может сбиваться. 
Основная сложность в позиционировании анимированных SVG-блобов, которые могут съезжать или теряться на некоторых мобильных устройствах. 
Размер шрифтов в разных блоках меняется по-разному, как и высота контейнеров каждой секции и величина элементов. 
Сайт очень сырой с точки зрения верстки.

### <a name="task-min">Программа «минимум»</a>

1. Протестировать отображение сайта на различных устройствах. В т.ч. на мобильных (Apple, android) браузерах 
2. Выявить ключевые недостатки по созданию структуры сайта 
3. Сформировать короткие предложения по его оптимизации для увеличения быстродействия и улучшения верстки.


### <a name="task-max">Программа «максимум»</a>

1. Переписать верстку сайта сохранив анимацию Svg-блобов.
2. Сделать его адаптивным и рабочим на большинстве типов современных устройств.


### <a name="task-date">Сроки</a>

**Начало:** 1 февраля 2023

**Конец:** --

**Выполнить до:** 5 февраля 2023

[🔝Содержание🔝](#content)

---

## <a name="contacts">Тестирование</a>

### Safari - macOS (1440x900)

#### Логотип (во вкладке)

Очень маленький текст, логотип не понятен:

![header-pig](readme-img/testing/safari-macos/logo.png)

#### Header

Дёргается анимация хрюшки при проведении мышкой:

![header-pig](readme-img/testing/safari-macos/header-pig.gif)

При нажатии на кнопку "наши корма" пролистывает ниже элемента, верхние части svg-блоба и кнопки пагинации обрезаются:

![header-pig](readme-img/testing/safari-macos/header-button.gif)

#### Наши корма

Анимация блоба оставляет след:

![our-product-trace](readme-img%2Ftesting%2Fsafari-macos%2Four-product-trace.png)

Кнопка налезает на текст:

![our-product-button](readme-img%2Ftesting%2Fsafari-macos%2Four-product-button.png)

#### Почему стоит выбрать «Мегакорм»

Анимации оставляют след:

![why-trace1](readme-img%2Ftesting%2Fsafari-macos%2Fwhy-trace1.png)

![why-trace2](readme-img%2Ftesting%2Fsafari-macos%2Fwhy-trace2.png)

![why-trace3](readme-img%2Ftesting%2Fsafari-macos%2Fwhy-trace3.png)

#### Калькулятор

Кнопка налезает на текст:

![calc-button](readme-img%2Ftesting%2Fsafari-macos%2Fcalc-button.png)

Одинаковый шрифт на разных блобах (больше блоб - больше текст) + "о компании" сливается с фоном:

![calc-blobs](readme-img%2Ftesting%2Fsafari-macos%2Fcalc-blobs.png)

Присутствует пустой блок с пагинацией (предназначение не установлено):

![calc-empty-pagination](readme-img%2Ftesting%2Fsafari-macos%2Fcalc-empty-pagination.png)

У текста ссылки маленькие отступы слева + лучше растянуть текст в длину, а не в две строчки:

![calc-link](readme-img%2Ftesting%2Fsafari-macos%2Fcalc-link.png)

#### Клиентам

Имя и Фамилия сливаются с фоном:

![for-clients](readme-img%2Ftesting%2Fsafari-macos%2Ffor-clients.png)

При перелистывании страницы карточка сотрудника не влезает + описание накладывается на фото (если оно большое)

![for-clients-pagination](readme-img%2Ftesting%2Fsafari-macos%2Ffor-clients-pagination.png)


#### Наши дистрибьюторы

Заголовок сильно сливается с фоном:

![distr](readme-img%2Ftesting%2Fsafari-macos%2Fdistr.png)

"Выберите регион" написано в две строки:

![distr-region](readme-img%2Ftesting%2Fsafari-macos%2Fdistr-region.png)

#### Полезные материалы

Анимации оставляют след:

![materials-trace](readme-img%2Ftesting%2Fsafari-macos%2Fmaterials-trace.png)

Слишком маленькая дата + слишком бледная:

![materials-date.png](readme-img%2Ftesting%2Fsafari-macos%2Fmaterials-date.png)

При пролистывании вправо карточки не влезают сверху и снизу:

![materials-pagination.png](readme-img%2Ftesting%2Fsafari-macos%2Fmaterials-pagination.png)


**Общие замечания:**
- Долгие прогрузки картинок
- Неплавные анимации

### Google Chrome - macOS




---

## <a name="contacts">Контакты</a>

**TG**: [@mordvintsevmv](https://t.me/mordvintsevmv)

**e-mail**: mordvintsevmv@gmail.com


[🔝Содержание🔝](#content)