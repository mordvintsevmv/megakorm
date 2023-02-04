# MegaKorm - Thinkopp Test Task

Тестовое задание на позицию **"Web-программист | HTML-верстальщик"**

**Было выполнено:**

- [X] Тестирование сайта на различных устройствах:
  - macOS Safari 
  - macOS Chrome
  - IOS Safari
  - Android Chrome


**В работе:**

- [ ] Выявить ключевые недостатки
- [ ] Сформировать предложения по оптимизации
- [ ] Реализовать предложения по оптимизации


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
   - [Chrome - macOS (1440x900)](#testing-macos-chrome)
   - [Safari - Iphone SE (640 х 1136) - вертикально](#testing-iphone-safari-v)
   - [Safari - Iphone SE (1136 х 640) - горизонтально](#testing-iphone-safari-h)
   - [Chrome - Redmi Note 9 (1080 х 2340) - вертикально](#testing-android-chrome-v)
   - [Chrome - Redmi Note 9 (2340 x 1080) - горизонтально](#testing-android-chrome-h)
2. [Ключевые недостатки](#main-problems)
3. [Предложения по оптимизации и улучшению](#advice)
4. [Реализация](#implementing)
3. [Контакты](#contacts)

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

### <a name="testing-macos-chrome">Chrome - macOS (1440x900)</a>

Аналогичные проблемы, как в браузере Safari. 
Из улучшений:

Анимации не оставляют след:

![animations](readme-img/testing/chrome/animations.png)

Пагинация в разделе "О компании" показывает картинки:

![pagination](readme-img/testing/chrome/our-company.png)

---

### <a name="testing-iphone-safari-v">Safari - Iphone SE (640 х 1136) - вертикально</a>

#### Menu

По нажатию кнопки "Меню" само меню открывается/закрывается не с первого раза. 
При этом значок Меню не всегда соответствует состоянию открыто/закрыто:

![menu-closed-cross](readme-img/testing/iphonese/menu-closed-cross.jpg)

![menu-open-cross](readme-img/testing/iphonese/menu-open-cross.jpg)

![menu-closed-cross](readme-img/testing/iphonese/menu-open-nocross.jpg)

#### Main

Пагинация с блока "Наши корма" находится слишком близко к главному блоку.
Создаётся впечатление, что пагинация предназначена для главного блока:

![main](readme-img/testing/iphonese/main.PNG)

#### Наши корма

Часть блобов находится поверх текста и кнопок, а другая часть блобов находится снизу:

![our-product-behind](readme-img/testing/iphonese/our-product-behind.jpg)

![our-product-over](readme-img/testing/iphonese/our-product-over.jpg)

1. Блоб налезает на заголовок
2. Заголовок блока "Почему..." не имеет отступа от предыдущего блока

![our-product-text](readme-img/testing/iphonese/our-product-text.PNG)

#### Таблица

Текст налезает друг на друга:

![table](readme-img/testing/iphonese/table.jpg)

#### Почему стоит выбрать «Мегакорм»

1. Анимации оставляют след
2. Блоки находятся слишком близко друг к другу. Сложно опрределить, к какому блоку принадлежит ссылка.

![why](readme-img/testing/iphonese/why.PNG)

#### Калькулятор

Блобы смещены от центра иконки животного:

![calc-blob](readme-img/testing/iphonese/calc-blob.jpg)

Текст из блобов вылезает за границы:

![calc-info](readme-img/testing/iphonese/calc-info.jpg)

У некоторых страниц блобы уменьшаются до минимального размера или обрезаются (текст исчезает на белом фоне):

![calc-info2](readme-img/testing/iphonese/calc-info2.jpg)

#### О Компании

Слищком большой отступ от заголовка:

![company](readme-img/testing/iphonese/company.PNG)

Отсутствуют элементы пагинации:

![company-pagination](readme-img/testing/iphonese/company-pagination.jpg)

#### Клиентам

Слишком маленький текст / Слишком большой блов с фото:

![for-clients](readme-img/testing/iphonese/for-clients.PNG)

#### Связаться

Блок не адаптивен. Слишком маленький текст и неудобные формы для мобильных девайсов:

![contact](readme-img/testing/iphonese/contact.PNG)

#### Наши дистрибьюторы

Аналогичные проблемы (смещена лупа, лишняя стрелка назад и тд):

![distr](readme-img/testing/iphonese/distr.jpg)

#### Полезные материалы

Отсутствует отступ от заголовка:

![materials](readme-img/testing/iphonese/materials.PNG)

1. Блоб обрезается
2. Слишком большой блоб
3. Слишком большой отступ от блоба
4. Слишком маленькая дата

![materials-text](readme-img/testing/iphonese/materials-text.PNG)


---

### <a name="testing-iphone-safari-h">Safari - Iphone SE (1136 х 640) - горизонтально</a>

#### Меню

Меню не всегда открывается:

![menu](readme-img/testing/iphonese-h/menu.PNG)

#### Наш продукт

Вёрстка полностью слетает:

![our-products](readme-img/testing/iphonese-h/our-products.PNG)

#### Калькулятор

1. Кнопки смещены и находятся под текстом
2. Блобы больше кнопок по размеру
3. Блобы не попадают под выбранный элемент

![calc](readme-img/testing/iphonese-h/calc.PNG)

#### О компании

Слишком большие отступы:

![company](readme-img/testing/iphonese-h/company.PNG)

Отсутствуют элементы пагинации:

![company-pagination](readme-img/testing/iphonese-h/company-pagination.PNG)

#### Наши дистрибьюторы

Аналогичные проблемы (смещена лупа, лишняя стрелка назад и тд):

![distr](readme-img/testing/iphonese-h/distr.PNG)

#### Footer

Слишком большие ссылки:

![footer](readme-img/testing/iphonese-h/footer.PNG)

---

### <a name="testing-android-chrome-v">Chrome - Redmi Note 9 (1080 х 2340) - вертикально</a>

#### Menu

Меню может не открываться / значок не всегда соответствует состоянию меню:

![menu](readme-img/testing/android-v/menu.jpeg)

#### Наши корма

Кнопки и текст иногда находятся за блобом:

![our-products](readme-img/testing/android-v/our-products.jpeg)

#### Таблица

Текст сливается:

![table](readme-img/testing/android-v/table.jpeg)

#### Почему стоит выбрать «Мегакорм»

Блоки слипаются друг с другом:

![why](readme-img/testing/android-v/why.jpeg)

#### Калькулятор

Для некоторых элементов блоб уменьшается до минимума / текст не видно:

![calc](readme-img/testing/android-v/calc.jpeg)

#### О Компании

Преимущества (оранжевый текст) слишком большой:

![company](readme-img/testing/android-v/company.jpeg)

#### Связаться

1. Блок "связаться" не адаптивен
2. Текст слишком маленький

![contact](readme-img/testing/android-v/contact.jpeg)

#### Наши дистрибьюторы

Аналогичные проблемы (смещена лупа, лишняя стрелка назад и тд):

![distr](readme-img/testing/android-v/distr.jpeg)

---

### <a name="testing-android-chrome-h">Chrome - Redmi Note 9 (2340 x 1080) - горизонтально</a>

Вёрстка полностью слетает:

#### Header

![header](readme-img/testing/android-h/header.jpeg)

#### Наши корма

![our-product](readme-img/testing/android-h/our-product.jpeg)

#### Почему стоит выбрать «Мегакорм»

![why1](readme-img/testing/android-h/why1.jpeg)

![why2](readme-img/testing/android-h/why2.jpeg)

#### О Компании

![company](readme-img/testing/android-h/company.jpeg)

#### Клиентам

![clients](readme-img/testing/android-h/clients.jpeg)

#### Наши дистрибьюторы

![distr](readme-img/testing/android-h/distr.jpeg)

#### Footer

![footer](readme-img/testing/android-h/footer.jpeg)

---

## <a name="main-problems">Ключевые недостатки</a>

**Общие недостатки:**

1. Маленький логотип для вкладки браузера;
2. Неплавные анимации из-за большой нагрузки;
3. При нажатии кнопок меню страница пролистывается ниже/выше, чем надо;
4. Кнопки влево/вправо налезают на текст или пропадают под блобом (по всему сайту);
5. Колонки в таблице налезают друг на друга / вылезают за границы;
6. Кнопка закрытия таблицы слишком бледная;
7. В блоке "Почему стоит выбрать «Мегакорм»" Неверная иконка для "узнайте больше в нашей статье о производстве" - стоит калькулятор;
8. В блоке "Калькулятор" кнопки с животными налезают на текст;
9. В блоке "Калькулятор" блобы не всегда находятся в области выбранного элемента (зависит от выбранного элемента);
10. В блоке "Калькулятор" вёрстка сбивается при выборе некоторых животных;
11. Текст в блобах не соответствует размеру блоба (больше блоб - больше текст) (блок "Калькулятор" и другие);
12. В блоке "О Компании" у ссылки "На сайт Мегамикс" маленькие отсупы слева;
13. В блоке "О Компании" у ссылки "На сайт Мегамикс" текст написан в две строки;
14. В блоке "Клиентам" для десктопной версии Имя и Фамилия находятся на блобе (сливаются с фоном);
15. В блоке "Клиентам" обрезаются карточки с людьми при пролистывании;
16. В блоке "Клиентам" невозможно скопировать email;
17. В блоке "Связаться" нет общего стиля:
    - Ошибка в email - всплывающее окно; 
    - Не стоит галочка на обработке данных - выделяется красным.
18. В блоке "Связаться" не открывается согласие на обработку данных;
19. В блоке "Связаться" валидацию проходит email без .ru, .com и тд;
20. В блоке "Наши дистрибьюторы" лишняя кнопка "назад";
21. В блоке "Наши дистрибьюторы" заголовок сливается с фоном + написан в две строки;
22. В блоке "Наши дистрибьюторы" в окне выбора региона смещена лупа;
23. В блоке "Наши дистрибьюторы" в окне выбора региона текст "Выберите регион" написан в две строки;
24. В блоке "Полезные материалы" разные отступы между картинкой и заголовком статьи;
25. В блоке "Полезные материалы" слишком маленькая и бледная дата у статьи;
26. В блоке "Полезные материалы" при пролистывании карточки со статьями обрезаются справа и снизу;
27. В блоке "Footer" нет email в соответствующей кнопке.

**Недостатки в Safari:**

1. Анимации оставляют след;
2. Отсутствует блок с картинками в разделе "О Компании".


**Мобильная версия:**

1. По нажатию кнопки "Меню" само меню открывается/закрывается не с первого раза;
2. Значок Меню не всегда соответствует состоянию открыто/закрыто;
3. Проблемы с отступами между разделами - некоторые блоки слипаются / некоторые блоки имеют слишком большие отступы;
4. В блоке "Наши Корма" некоторые блобы находятся сзади текста, а некоторые поверх;
5. Заголовки в таблице слипаются друг с другом;
6. В разделе "Почему стоит выбрать «Мегакорм»" между пунктами слишком маленькие отступы;
7. В блоке "Калькулятор" блобы могут обрезаться;
8. В блоке "Калькулятор" при выборе некоторых животных блоб может уменьшаться до минимального размера - текст перестает быть видимым;
9. В блоке "Клиентам" слишком большое фото / слишком маленький текст;
10. Блок "Связаться" полностью не адаптивен;
11. При переходе в горизонтальный режим разметка может полностью ломаться.

---

## <a name="advice">Предложения по оптимизации</a>

**В работе**

---

## <a name="implementing">Реализация</a>

**В работе**

---

## <a name="contacts">Контакты</a>

**TG**: [@mordvintsevmv](https://t.me/mordvintsevmv)

**e-mail**: mordvintsevmv@gmail.com


[🔝Содержание🔝](#content)