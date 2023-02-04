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
1. [Тестирование](#testing)
   - [Safari - macOS (1440x900)](#testing-macos-safari)
   - [Safari - Iphone SE (640 х 1136) - вертикально](#testing-iphone-safari-v)
   - [Safari - Iphone SE (1136 х 640) - горизонтально](#testing-iphone-safari-h)
   - [Chrome - Redmi Note 9 (1080 х 2340) - вертикально](#testing-android-chrome-v)
   - [Chrome - Redmi Note 9 (2340 x 1080) - горизонтально](#testing-android-chrome-h)
   - [Chrome - macOS (1440x900)](#testing-macos-chrome)
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

## <a name="testing">Тестирование</a>

### <a name="testing-macos-safari">Safari - macOS (1440x900)</a>

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

![our-product-trace](readme-img/testing/safari-macos/our-product-trace.png)

Кнопка налезает на текст:

![our-product-button](readme-img/testing/safari-macos/our-product-button.png)

#### Таблица 

Текст из столбцов вылезает за пределы + неудобно читать без разделения столбцов

![our-product-button](readme-img/testing/safari-macos/table.png)

Кнопка закрытия очень бледная:

![our-product-button](readme-img/testing/safari-macos/table-close.png)


#### Почему стоит выбрать «Мегакорм»

Анимации оставляют след:

![why-trace1](readme-img/testing/safari-macos/why-trace1.png)

![why-trace2](readme-img/testing/safari-macos/why-trace2.png)

![why-trace3](readme-img/testing/safari-macos/why-trace3.png)

Неверная иконка для "узнайте больше в нашей статье о производстве" - стоит калькулятор:

![why-trace3](readme-img/testing/safari-macos/why-icon.png)


#### Калькулятор

Кнопка налезает на текст:

![calc-button](readme-img/testing/safari-macos/calc-button.png)

Разметка может полностью сбиться при нажатии некоторых кнопок:

![calc-blobs](readme-img/testing/safari-macos/calc-bad-layout.png)

Одинаковый шрифт на разных блобах (больше блоб - больше текст) + "о компании" сливается с фоном:

![calc-blobs](readme-img/testing/safari-macos/calc-blobs.png)

#### О Компании

Присутствует пустой блок с пагинацией:

![calc-empty-pagination](readme-img/testing/safari-macos/calc-empty-pagination.png)

У текста ссылки маленькие отступы слева + лучше растянуть текст в длину, а не в две строчки:

![calc-link](readme-img/testing/safari-macos/calc-link.png)

#### Клиентам

Имя и Фамилия сливаются с фоном + нет возможности скопировать email:

![for-clients](readme-img/testing/safari-macos/for-clients.png)

При перелистывании страницы карточка сотрудника не влезает + описание накладывается на фото (если оно большое)

![for-clients-pagination](readme-img/testing/safari-macos/for-clients-pagination.png)

#### Связаться

Неудобная валидация email (только после попытки отправки) 

Нет общего стиля: 

- Ошибка в email - всплывающее окно; 

- Не стоит галочка на обработке данных - выделяется красным.

Нельзя открыть согласие об обработке данных

![for-clients-pagination](readme-img/testing/safari-macos/contact-email.png)

Валидацию проходит email без .ru .com и тд

![for-clients-pagination](readme-img/testing/safari-macos/contact-bad-email.png)

#### Наши дистрибьюторы

Заголовок сильно сливается с фоном:

![distr](readme-img/testing/safari-macos/distr.png)

Лишняя кнопка "назад"

![distr-back](readme-img/testing/safari-macos/distr-back.png)

"Выберите регион" написано в две строки:

![distr-region](readme-img/testing/safari-macos/distr-region.png)

Лупа выходит за рамки:

![distr-search](readme-img/testing/safari-macos/distr-search.png)

#### Полезные материалы

Анимации оставляют след:

![materials-trace](readme-img/testing/safari-macos/materials-trace.png)

Слишком маленькая дата + слишком бледная:

![materials-date.png](readme-img/testing/safari-macos/materials-date.png)

При пролистывании вправо карточки не влезают сверху и снизу:

![materials-pagination.png](readme-img/testing/safari-macos/materials-pagination.png)

#### Footer

Нет email по нажатию:

![materials-pagination.png](readme-img/testing/safari-macos/footer.png)

**Общие замечания:**
- Долгие прогрузки картинок
- Неплавные анимации

---

### <a name="testing-iphone-safari-v">Safari - Iphone SE (640 х 1136) - вертикально</a>

#### Menu

![menu-closed-cross](readme-img/testing/iphonese/menu-closed-cross.jpg)

![menu-open-cross](readme-img/testing/iphonese/menu-open-cross.jpg)

![menu-closed-cross](readme-img/testing/iphonese/menu-open-nocross.jpg)

#### Main

![main](readme-img/testing/iphonese/main.PNG)

#### Наши корма

![our-product-behind](readme-img/testing/iphonese/our-product-behind.jpg)

![our-product-over](readme-img/testing/iphonese/our-product-over.jpg)

![our-product-text](readme-img/testing/iphonese/our-product-text.PNG)

#### Таблица

![table](readme-img/testing/iphonese/table.jpg)

#### Почему стоит выбрать «Мегакорм»

![why](readme-img/testing/iphonese/why.PNG)

#### Калькулятор

![calc-blob](readme-img/testing/iphonese/calc-blob.jpg)

![calc-info](readme-img/testing/iphonese/calc-info.jpg)

![calc-info2](readme-img/testing/iphonese/calc-info2.jpg)

#### О Компании

![company](readme-img/testing/iphonese/company.PNG)

![company-pagination](readme-img/testing/iphonese/company-pagination.jpg)

#### Клиентам

![for-clients](readme-img/testing/iphonese/for-clients.PNG)

#### Связаться

![contact](readme-img/testing/iphonese/contact.PNG)

#### Наши дистрибьюторы

![distr](readme-img/testing/iphonese/distr.jpg)

#### Полезные материалы

![materials](readme-img/testing/iphonese/materials.PNG)

![materials-text](readme-img/testing/iphonese/materials-text.PNG)


---

### <a name="testing-iphone-safari-h">Safari - Iphone SE (1136 х 640) - горизонтально</a>

#### Меню

![menu](readme-img/testing/iphonese-h/menu.PNG)

#### Наш продукт

![our-products](readme-img/testing/iphonese-h/our-products.PNG)

#### Калькулятор

![calc](readme-img/testing/iphonese-h/calc.PNG)

#### О компании

![company](readme-img/testing/iphonese-h/company.PNG)

![company-pagination](readme-img/testing/iphonese-h/company-pagination.PNG)

#### Наши дистрибьюторы

![distr](readme-img/testing/iphonese-h/distr.PNG)

#### Footer

![footer](readme-img/testing/iphonese-h/footer.PNG)

---

### <a name="testing-android-chrome-v">Chrome - Redmi Note 9 (1080 х 2340) - вертикально</a>

#### Menu

![menu](readme-img/testing/android-v/menu.jpeg)

#### Наши корма

![our-products](readme-img/testing/android-v/our-products.jpeg)

#### Таблица

![table](readme-img/testing/android-v/table.jpeg)

#### Почему стоит выбрать «Мегакорм»

![why](readme-img/testing/android-v/why.jpeg)

#### Калькулятор

![calc](readme-img/testing/android-v/calc.jpeg)

#### О Компании

![company](readme-img/testing/android-v/company.jpeg)

#### Связаться

![contact](readme-img/testing/android-v/contact.jpeg)

#### Наши дистрибьюторы

![distr](readme-img/testing/android-v/distr.jpeg)

---

### <a name="testing-android-chrome-h">Chrome - Redmi Note 9 (2340 x 1080) - горизонтально</a>

#### Header

![header](readme-img/testing/android-h/header.jpeg)

#### Наши корма

![our-product](readme-img/testing/android-h/our-product.jpeg)

#### Почему стоит выбрать «Мегакорм»

![why1](readme-img/testing/android-h/why1.jpeg)

![why2](readme-img/testing/android-h/why2)

#### О Компании

![company](readme-img/testing/android-h/company.jpeg)

#### Клиентам

![clients](readme-img/testing/android-h/clients.jpeg)

#### Наши дистрибьюторы

![distr](readme-img/testing/android-h/distr.jpeg)

#### Footer

![footer](readme-img/testing/android-h/footer.jpeg)

---

### <a name="testing-macos-chrome">Chrome - macOS (1440x900)</a>


---

## <a name="contacts">Контакты</a>

**TG**: [@mordvintsevmv](https://t.me/mordvintsevmv)

**e-mail**: mordvintsevmv@gmail.com


[🔝Содержание🔝](#content)