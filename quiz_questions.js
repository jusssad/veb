class QuizQuestion {
  constructor(question, answers) {
    this.question = question;
    this.answers = this.shuffle(answers);
    this.correctAnswer = answers[0];
    this.correct = this.answers.indexOf(this.correctAnswer);  // индекс правильного ответа после перемешивания
  }

shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

}


const quizData = [
  new QuizQuestion("Что такое веб-технологии?", [
    "Совокупность технологий для разработки и поддержки веб-приложений и сайтов",
    "Операционная система",
    "Программа для рисования",
    "Мобильное приложение"
  ]),
  new QuizQuestion("Что такое веб-страница?", [
    "HTML-документ, доступный в интернете по уникальному URL",
    "Файл Word",
    "Мобильное приложение",
    "Картинка на сайте"
  ]),
  new QuizQuestion("Какой язык используется для разметки веб-страниц?", [
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
  ]),
  new QuizQuestion("Какой тег HTML является корневым?", [
    "<html>",
    "<body>",
    "<head>",
    "<div>"
  ]),
  new QuizQuestion("Что делает CSS?", [
    "Оформляет веб-страницу",
    "Передаёт данные на сервер",
    "Обрабатывает изображения",
    "Запускает веб-сервер"
  ]),
  new QuizQuestion("Какой язык отвечает за динамику веб-страниц?", [
    "JavaScript",
    "HTML",
    "CSS",
    "SQL"
  ]),
  new QuizQuestion("Как называется уникальный адрес веб-страницы в интернете?", [
    "URL",
    "HTML",
    "IP",
    "DNS"
  ]),
  new QuizQuestion("Какая последовательность запроса веб-страницы браузером является верной?", [
    "HTTP-запрос → сервер → HTML/CSS/JS → браузер отображает",
    "Браузер → IP → CSS → HTML",
    "HTML → JavaScript → сервер → CSS",
    "Запрос CSS → загрузка JS → показ HTML"
  ]),
  new QuizQuestion("Какие теги HTML используются для заголовков?", [
    "<h1> до <h6>",
    "<div> до <div6>",
    "<title> до <t6>",
    "<head> до <h6>"
  ]),
  new QuizQuestion("Какой язык не относится к веб-технологиям?", [
    "Pascal",
    "JavaScript",
    "HTML",
    "CSS"
  ]),
    new QuizQuestion("Как называется система, которая позволяет связывать веб-страницы друг с другом с помощью гиперссылок?", [
    "Гипертекстовая система (HTML + ссылки)",
    "Файл-система",
    "DNS-сервер",
    "СУБД"
  ]),
  new QuizQuestion("Какая основная функция браузера?", [
    "Отображение веб-страниц, созданных с помощью HTML, CSS и JavaScript",
    "Сжатие изображений",
    "Хранение логов",
    "Разработка сайтов"
  ]),
  new QuizQuestion("Что такое протокол HTTP?", [
    "Протокол передачи гипертекста",
    "Язык программирования",
    "Формат файла",
    "Метод шифрования"
  ]),
  new QuizQuestion("Какой протокол используется для защищенного соединения в интернете?", [
    "HTTPS",
    "FTP",
    "HTTP",
    "SMTP"
  ]),
  new QuizQuestion("Что такое доменное имя?", [
    "Текстовый адрес, указывающий на IP-адрес веб-сайта",
    "Тип сервера",
    "Порт подключения",
    "Локальный путь"
  ]),
  new QuizQuestion("Какой протокол используется для отправки электронной почты?", [
    "SMTP",
    "HTTP",
    "FTP",
    "POP"
  ]),
  new QuizQuestion("Что такое HTML?", [
    "Язык разметки гипертекста",
    "Язык программирования",
    "Система управления базами данных",
    "Скриптовый язык"
  ]),
  new QuizQuestion("Что такое Всемирная паутина (World Wide Web)?", [
    "Совокупность всех веб-сайтов, доступных по протоколу HTTP",
    "Мировая база данных",
    "Интернет-провайдер",
    "Операционная система"
  ]),
  new QuizQuestion("Какая основная функция клиента в интернет-соединении?", [
    "Получение информации от сервера",
    "Передача информации другим клиентам",
    "Запуск базы данных",
    "Фильтрация трафика"
  ]),
  new QuizQuestion("Какие из перечисленных ниже не являются формами клиента?", [
    "Серверные приложения, такие как базы данных или API",
    "Веб-браузеры",
    "Мобильные приложения",
    "Почтовые клиенты"
  ]),
  new QuizQuestion("Как выглядит типичный IPv4-адрес?", [
    "Четыре числа от 0 до 255, разделённые точками, например: 192.168.0.1",
    "Шестнадцатеричная строка",
    "Строка URL",
    "Двоичный код"
  ]),
  new QuizQuestion("Что такое доменное имя?", [
    "Текстовая строка, ассоциированная с IP-адресом сайта",
    "Формат e-mail",
    "Сетевой протокол",
    "Скрипт JavaScript"
  ]),
  new QuizQuestion("Какие домены верхнего уровня являются общими?", [
    ".com, .org, .net",
    ".ru, .kz, .ua",
    ".exe, .zip, .pdf",
    ".html, .css, .js"
  ]),
  new QuizQuestion("Что такое веб-сайт?", [
    "Совокупность связанных веб-страниц на одном домене",
    "Одна HTML-страница",
    "Сетевой интерфейс",
    "Серверный API"
  ]),
  new QuizQuestion("С помощью какой программы создают HTML-документы?", [
    "Текстовый редактор, например, Блокнот",
    "MS Excel",
    "Adobe Photoshop",
    "Telegram"
  ]),
  new QuizQuestion("Какой язык используется для написания веб-страниц?", [
    "HTML",
    "Java",
    "Python",
    "C++"
  ]),
  new QuizQuestion("Что такое HTML-элемент?", [
    "Часть HTML-документа, определяемая парой тегов",
    "Ссылка на скрипт",
    "Заголовок сайта",
    "Графика на странице"
  ]),
  new QuizQuestion("Какая основная цель веб-браузера?", [
    "Отображение содержимого HTML-документов",
    "Сжатие данных",
    "Редактирование видео",
    "Создание баз данных"
  ]),
  new QuizQuestion("Какой тег используется для создания заголовков в HTML?", [
    "<h1>",
    "<title>",
    "<div>",
    "<span>"
  ]),
  new QuizQuestion("Какой тег используется для создания абзацев в HTML?", [
    "<p>",
    "<a>",
    "<br>",
    "<img>"
  ]),
  new QuizQuestion("Какой тег используется для создания ссылок в HTML?", [
    "<a>",
    "<link>",
    "<p>",
    "<ref>"
  ]),
  new QuizQuestion("Какой атрибут используется для указания URL-адреса в теге <a>?", [
    "href",
    "src",
    "url",
    "link"
  ]),
  new QuizQuestion("Какой тег используется для вставки изображений в HTML?", [
    "<img>",
    "<image>",
    "<src>",
    "<pic>"
  ]),
  new QuizQuestion("Какой атрибут обязателен в теге <img> для отображения альтернативного текста?", [
    "alt",
    "href",
    "src",
    "title"
  ]),
  new QuizQuestion("Какой атрибут используется для задания стилей элемента?", [
    "style",
    "class",
    "font",
    "design"
  ]),
  new QuizQuestion("Что обозначает <!DOCTYPE html>?", [
    "Тип HTML-документа и его версию",
    "Конец документа",
    "Комментарий",
    "Ссылка на таблицу стилей"
  ]),
  new QuizQuestion("Какой тег определяет видимую часть HTML-документа?", [
    "<body>",
    "<html>",
    "<head>",
    "<section>"
  ]),
  new QuizQuestion("Какой атрибут используется для задания языка веб-страницы?", [
    "lang",
    "language",
    "code",
    "charset"
  ]),
  new QuizQuestion("Что произойдет, если в <img> не указан атрибут alt?", [
    "Изображение будет недоступно для экранных читалок",
    "Изображение не загрузится",
    "Изображение будет черно-белым",
    "HTML выдаст ошибку"
  ]),
  new QuizQuestion("Какой тег используется для переноса строки в HTML?", [
    "<br>",
    "<p>",
    "<hr>",
    "<div>"
  ]),
  new QuizQuestion("Какой атрибут определяет всплывающую подсказку при наведении курсора?", [
    "title",
    "alt",
    "href",
    "tooltip"
  ]),
  new QuizQuestion("Какой тег используется для создания таблицы в HTML?", [
    "<table>",
    "<div>",
    "<tab>",
    "<grid>"
  ]),
  new QuizQuestion("Какой атрибут элемента <TABLE> отвечает за ширину границ таблицы?", [
    "border",
    "cellspacing",
    "padding",
    "size"
  ]),
  new QuizQuestion("Какое значение атрибута ALIGN устанавливается по умолчанию для <TABLE>?", [
    "left",
    "center",
    "top",
    "justify"
  ]),
  new QuizQuestion("Какой атрибут отвечает за расстояние между границами ячеек?", [
    "cellspacing",
    "cellpadding",
    "margin",
    "gap"
  ]),
  new QuizQuestion("Какой атрибут задает количество объединяемых столбцов для ячейки?", [
    "colspan",
    "rowspan",
    "merge",
    "columns"
  ]),
  new QuizQuestion("Какой тег используется для создания строки в таблице?", [
    "<tr>",
    "<td>",
    "<line>",
    "<row>"
  ]),
  new QuizQuestion("Какой атрибут определяет цвет фона таблицы?", [
    "bgcolor",
    "background",
    "color",
    "style"
  ]),
  new QuizQuestion("Какой атрибут задает расстояние между содержимым ячейки и ее границей?", [
    "cellpadding",
    "cellspacing",
    "padding",
    "gap"
  ]),
  new QuizQuestion("Какой тег создает заголовочную ячейку таблицы?", [
    "<th>",
    "<td>",
    "<caption>",
    "<head>"
  ]),
  new QuizQuestion("Какой атрибут определяет количество строк, на которые распространяется ячейка?", [
    "rowspan",
    "colspan",
    "rows",
    "merge"
  ]),
  new QuizQuestion("Какое значение атрибута VALIGN выравнивает содержимое ячейки по верхнему краю?", [
    "top",
    "middle",
    "bottom",
    "center"
  ]),
  new QuizQuestion("Какой атрибут задает фоновое изображение для таблицы?", [
    "background",
    "bgimg",
    "img",
    "style"
  ]),
  new QuizQuestion("Какой атрибут запрещает автоматический перенос слов в ячейке?", [
    "nowrap",
    "no-wrap",
    "textnowrap",
    "disablewrap"
  ]),
  new QuizQuestion("Какой тег используется для создания HTML-формы?", [
    "<form>",
    "<input>",
    "<label>",
    "<fieldset>"
  ]),
  new QuizQuestion("Какой атрибут <form> указывает, куда отправлять данные формы?", [
    "action",
    "target",
    "href",
    "method"
  ]),
  new QuizQuestion("Какой тип <input> используется для создания текстового поля?", [
    "type=\"text\"",
    "type=\"input\"",
    "type=\"field\"",
    "type=\"string\""
  ]),
  new QuizQuestion("Какой атрибут <input> задает значение по умолчанию?", [
    "value",
    "default",
    "set",
    "initial"
  ]),
  new QuizQuestion("Какой атрибут <input> делает поле обязательным для заполнения?", [
    "required",
    "mandatory",
    "validate",
    "mustfill"
  ]),
  new QuizQuestion("Какой тип <input> используется для выбора одной опции из группы?", [
    "type=\"radio\"",
    "type=\"checkbox\"",
    "type=\"select\"",
    "type=\"button\""
  ]),
  new QuizQuestion("Какой тег используется для создания метки поля ввода?", [
    "<label>",
    "<span>",
    "<meta>",
    "<inputlabel>"
  ]),
  new QuizQuestion("Какой атрибут <form> определяет, в каком окне открыть ответ сервера?", [
    "target",
    "window",
    "frame",
    "location"
  ]),
  new QuizQuestion("Какой метод отправки формы используется по умолчанию?", [
    "GET",
    "POST",
    "SEND",
    "SUBMIT"
  ]),
  new QuizQuestion("Какой атрибут <input> устанавливает максимальную длину вводимого текста?", [
    "maxlength",
    "max",
    "limit",
    "textmax"
  ]),
  new QuizQuestion("Какой атрибут <input> указывает, что поле только для чтения?", [
    "readonly",
    "disabled",
    "static",
    "unchangeable"
  ]),
  new QuizQuestion("Какой атрибут <input> используется для задания шаблона ввода?", [
    "pattern",
    "template",
    "format",
    "regex"
  ]),
  new QuizQuestion("Какой тег используется для создания выпадающего списка?", [
    "<select>",
    "<option>",
    "<dropdown>",
    "<list>"
  ]),
  new QuizQuestion("Какой атрибут <input> используется для загрузки файла?", [
    "type=\"file\"",
    "upload",
    "fileupload",
    "choose"
  ]),
  new QuizQuestion("Какой тип <input> используется для выбора даты?", [
    "type=\"date\"",
    "type=\"calendar\"",
    "type=\"day\"",
    "type=\"datetime\""
  ]),
  new QuizQuestion("Какой атрибут <form> отключает валидацию формы при отправке?", [
    "novalidate",
    "disablevalidate",
    "skipcheck",
    "nonrequired"
  ]),
  new QuizQuestion("Какой тип <input> используется для ввода электронной почты?", [
    "type=\"email\"",
    "type=\"text\"",
    "type=\"mail\"",
    "type=\"inputemail\""
  ]),
  new QuizQuestion("Какой атрибут <input> делает кнопку выбора из списка <datalist>?", [
    "list",
    "select",
    "choice",
    "connect"
  ]),
  new QuizQuestion("Какой тег используется для группировки элементов формы?", [
    "<fieldset>",
    "<group>",
    "<formset>",
    "<wrap>"
  ]),
  new QuizQuestion("Какой атрибут <input> делает поле скрытым?", [
    "type=\"hidden\"",
    "invisible",
    "display=none",
    "type=\"none\""
  ]),
  new QuizQuestion("Что означает CSS?", [
    "Cascading Style Sheets — каскадные таблицы стилей",
    "Creative Style Syntax",
    "Code Styling System",
    "Control Sheet Settings"
  ]),
  new QuizQuestion("Какой символ используется для обозначения идентификатора (ID) в CSS?", [
    "#",
    ".",
    "*",
    "@"
  ]),
  new QuizQuestion("Какой из следующих способов подключения CSS является внутренним?", [
    "Тег <style> в разделе <head>",
    "Подключение внешнего файла",
    "Атрибут style в теге",
    "Стили в <footer>"
  ]),
  new QuizQuestion("Какой селектор применяется ко всем элементам на странице?", [
    "*",
    "#",
    ".",
    "body"
  ]),
  new QuizQuestion("Какой из вариантов является правильным CSS-синтаксисом?", [
    "selector { property: value; }",
    "{ selector: value; }",
    "selector: { value; property; }",
    "selector (property = value)"
  ]),
  new QuizQuestion("Как установить фон страницы в синий цвет?", [
    "body { background-color: blue; }",
    "body { color: blue; }",
    "body.bg = 'blue';",
    "html { background: blue; }"
  ]),
  new QuizQuestion("Как изменить размер шрифта элемента p?", [
    "p { font-size: 16px; }",
    "p { size: 16px; }",
    "p { text-size: 16px; }",
    "p { font: 16px; }"
  ]),
  new QuizQuestion("Как сделать текст жирным с помощью CSS?", [
    "font-weight: bold;",
    "font-style: bold;",
    "text-weight: bold;",
    "weight: bold;"
  ]),
  new QuizQuestion("Как задать отступ внутри элемента?", [
    "padding",
    "margin",
    "spacing",
    "border-spacing"
  ]),
  new QuizQuestion("Как сделать текст курсивным?", [
    "font-style: italic;",
    "font-weight: italic;",
    "text-decoration: italic;",
    "style: italic;"
  ]),
  new QuizQuestion("Как изменить цвет текста элемента h1 на красный?", [
    "h1 { color: red; }",
    "h1 { background-color: red; }",
    "h1 { font-color: red; }",
    "h1 { text-color: red; }"
  ]),
  new QuizQuestion("Как задать ширину блока div в 50% от родительского контейнера?", [
    "div { width: 50%; }",
    "div { size: 50%; }",
    "div { max-width: 50%; }",
    "div { flex: 0.5; }"
  ]),
  new QuizQuestion("Как установить интервал между строками текста?", [
    "line-height",
    "text-spacing",
    "row-gap",
    "font-spacing"
  ]),
  new QuizQuestion("Как скрыть элемент, но оставить его в разметке?", [
    "visibility: hidden;",
    "display: none;",
    "opacity: 0;",
    "hidden: true;"
  ]),
  new QuizQuestion("Как сделать фон изображения не повторяющимся?", [
    "background-repeat: no-repeat;",
    "repeat: none;",
    "image-repeat: false;",
    "background-style: no-repeat;"
  ]),
  new QuizQuestion("Какое свойство в CSS отвечает за цвет границы элемента?", [
    "border-color",
    "border-style",
    "outline-color",
    "line-color"
  ]),
  new QuizQuestion("Как задаётся цвет с помощью шестнадцатеричного значения в CSS?", [
    "color: #ff0000;",
    "rgb: (255, 0, 0);",
    "background: red#;",
    "color-hex: ff0000;"
  ]),
  new QuizQuestion("Как в CSS задать полупрозрачный красный цвет?", [
    "rgba(255, 0, 0, 0.5)",
    "rgb(255, 0, 0, 0.5)",
    "color: transparent red;",
    "alpha(255, 0, 0, 0.5)"
  ]),
  new QuizQuestion("Какое свойство CSS задаёт цвет фона?", [
    "background-color",
    "color",
    "bg",
    "background"
  ]),
  new QuizQuestion("Какой формат цвета включает параметр непрозрачности (альфа-канал)?", [
    "RGBA или HSLA",
    "RGB",
    "HSL",
    "Hex"
  ]),
  new QuizQuestion("Какое свойство задаёт изображение в качестве фона?", [
    "background-image",
    "image-src",
    "background-url",
    "image-background"
  ]),
  new QuizQuestion("Какое свойство задаёт повторение фонового изображения?", [
    "background-repeat",
    "repeat-background",
    "image-repeat",
    "background-clone"
  ]),
  new QuizQuestion("Какое значение background-repeat запрещает повторение фонового изображения?", [
    "no-repeat",
    "none",
    "no",
    "off"
  ]),
  new QuizQuestion("Какое свойство определяет, фиксируется ли фон при прокрутке страницы?", [
    "background-attachment",
    "background-fixed",
    "background-lock",
    "background-scroll"
  ]),
  new QuizQuestion("Какой код задаёт красный цвет с 50% прозрачностью в формате HSLA?", [
    "hsla(0, 100%, 50%, 0.5)",
    "rgba(255,0,0,0.5)",
    "color: hsla(50%, 0, 100%, 0.5)",
    "hsl(0, 100%, 50%, 50%)"
  ]),
  new QuizQuestion("Какое значение background-attachment закрепляет фоновое изображение при прокрутке?", [
    "fixed",
    "scroll",
    "absolute",
    "static"
  ]),
  new QuizQuestion("Какое свойство определяет область закрашивания фона?", [
    "background-clip",
    "background-border",
    "clip-path",
    "border-area"
  ]),
  new QuizQuestion("Какое значение CSS background-position задаёт фоновое изображение в центре?", [
    "center",
    "middle",
    "50% 50%",
    "centered"
  ]),
  new QuizQuestion("Какой формат цвета использует оттенок, насыщенность и яркость?", [
    "HSL",
    "RGB",
    "RGBA",
    "Hex"
  ]),
  new QuizQuestion("Какое свойство задаёт прозрачность всего элемента, включая текст?", [
    "opacity",
    "visibility",
    "alpha",
    "transparency"
  ]),
  new QuizQuestion("Как можно задать полупрозрачный цвет без изменения прозрачности текста?", [
    "С помощью rgba() или hsla()",
    "С помощью opacity",
    "Цвет с alpha-каналом",
    "Использовать transparent"
  ]),
  new QuizQuestion("Какой параметр отвечает за непрозрачность в RGBA?", [
    "Четвёртый (альфа-канал)",
    "Первый",
    "Третий",
    "Никакой"
  ]),
  new QuizQuestion("Какое значение background-repeat повторяет изображение только по горизонтали?", [
    "repeat-x",
    "repeat-y",
    "no-repeat",
    "horizontal-only"
  ]),
  new QuizQuestion("Как сделать фон полностью прозрачным в CSS?", [
    "background-color: transparent;",
    "opacity: 0;",
    "background: none;",
    "color: transparent;"
  ]),
  new QuizQuestion("Какое значение background-size растянет изображение на весь блок?", [
    "cover",
    "contain",
    "full",
    "stretch"
  ]),
  new QuizQuestion("Каким языком является JavaScript?", [
    "Скриптовым языком программирования",
    "Серверным языком",
    "Языком разметки",
    "Операционной системой"
  ]),
  new QuizQuestion("Назначение JavaScript", [
    "Добавление интерактивности и логики на веб-страницы",
    "Создание таблиц стилей",
    "Хранение данных",
    "Управление серверами"
  ]),
  new QuizQuestion("Тег для вставки скриптов на JavaScript", [
    "<script>",
    "<js>",
    "<javascript>",
    "<code>"
  ]),
  new QuizQuestion("Что отличает JavaScript от HTML", [
    "HTML описывает структуру, а JavaScript добавляет поведение",
    "JavaScript хранит стили",
    "HTML используется для программирования",
    "HTML — это язык сценариев"
  ]),
  new QuizQuestion("Специальное значение \"undefined\" в JavaScript", [
    "Означает, что переменная объявлена, но не имеет значения",
    "Переменная удалена",
    "Значение 0",
    "Ошибочная переменная"
  ]),
  new QuizQuestion("Специальное значение «null» в JavaScript", [
    "Указывает на намеренное отсутствие значения",
    "Объявление переменной",
    "Тип данных",
    "Число"
  ]),
  new QuizQuestion("Совокупность свойств, методов, коллекций и событий, предоставляемых браузером в рамках объектной модели", [
    "DOM (Document Object Model)",
    "BOM (Browser Object Model)",
    "HTML",
    "CSS"
  ]),
  new QuizQuestion("Переменная в рамках объекта, используемая для получения значения или установки нового", [
    "Свойство объекта",
    "Метод",
    "Класс",
    "Событие"
  ]),
  new QuizQuestion("Функция, предоставляемая объектом для выполнения каких-либо действий", [
    "Метод",
    "Событие",
    "Свойство",
    "Формат"
  ]),
  new QuizQuestion("Какое-либо действие пользователя или момент работы браузера", [
    "Событие (event)",
    "Метод",
    "Класс",
    "Функция"
  ]),
  new QuizQuestion("Присваивание в JavaScript", [
    "Оператор =",
    "Оператор ==",
    "Оператор =>",
    "Оператор :="
  ]),
  new QuizQuestion("Равно в JavaScript", [
    "== или === (строгое сравнение)",
    "= или ==",
    "= и ====",
    "=== или !=="
  ]),
  new QuizQuestion("Предназначен для вывода в браузере предупреждающего модального диалогового окна с сообщением и кнопкой «ОК»", [
    "alert()",
    "prompt()",
    "confirm()",
    "messageBox()"
  ]),
  new QuizQuestion("Показывает сообщение и запрашивает ввод текста от пользователя", [
    "prompt()",
    "alert()",
    "confirm()",
    "input()"
  ]),
  new QuizQuestion("Показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена", [
    "confirm()",
    "prompt()",
    "alert()",
    "dialog()"
  ]),
  new QuizQuestion("Что делает метод getElementById()?", [
    "Находит HTML-элемент по его ID",
    "Создаёт новый элемент",
    "Удаляет элемент",
    "Изменяет стиль элемента"
  ]),
  new QuizQuestion("Как правильно изменить текст внутри HTML-элемента с id=\"demo\"?", [
    "document.getElementById(\"demo\").innerHTML = \"Новый текст\";",
    "document.querySelector(\"#demo\").text = \"Новый текст\";",
    "getElementById(\"demo\") = \"Новый текст\";",
    "demo.innerText = \"Новый текст\";"
  ]),
  new QuizQuestion("Как изменить значение атрибута src у изображения с помощью JavaScript?", [
    "document.getElementById(\"img\").src = \"new.jpg\";",
    "document.getElementById(\"img\").href = \"new.jpg\";",
    "img.setAttribute('src', 'new.jpg');",
    "document.img.src = 'new.jpg';"
  ]),
  new QuizQuestion("Какая команда изменяет стиль текста на красный?", [
    "element.style.color = \"red\";",
    "element.textColor = \"red\";",
    "element.setColor(\"red\");",
    "element.style.fontColor = \"red\";"
  ]),
  new QuizQuestion("Как скрыть элемент HTML через JavaScript?", [
    "element.style.display = \"none\";",
    "element.hide();",
    "element.style.hidden = true;",
    "element.setVisible(false);"
  ]),
  new QuizQuestion("Как снова отобразить скрытый элемент?", [
    "element.style.display = \"block\";",
    "element.show();",
    "element.display = true;",
    "element.style.visible = true;"
  ]),
  new QuizQuestion("Какой метод вставляет HTML-код внутрь элемента?", [
    "innerHTML",
    "innerText",
    "appendChild",
    "outerHTML"
  ]),
  new QuizQuestion("Чем отличается innerText от innerHTML?", [
    "innerText возвращает только текст, innerHTML — включая HTML-теги",
    "innerText работает только с input",
    "innerHTML не может изменять DOM",
    "Нет отличий"
  ]),
  new QuizQuestion("Что делает document.write()?", [
    "Пишет контент прямо в HTML-документ",
    "Сохраняет страницу",
    "Удаляет HTML-элемент",
    "Переходит по ссылке"
  ]),
  new QuizQuestion("Какая команда вызывает всплывающее окно с сообщением?", [
    "alert()",
    "prompt()",
    "confirm()",
    "message()"
  ]),
  new QuizQuestion("Что делает console.log()?", [
    "Выводит данные в консоль разработчика",
    "Создаёт лог-файл",
    "Показывает модальное окно",
    "Выводит ошибку"
  ]),
  new QuizQuestion("Какой из способов используется для печати в JavaScript?", [
    "console.log()",
    "document.print()",
    "window.alert()",
    "text.write()"
  ]),
  new QuizQuestion("Что из перечисленного является ключевым словом JavaScript?", [
    "let, const, var",
    "new, include, define",
    "static, this, class",
    "return, push, query"
  ]),
  new QuizQuestion("Как написать однострочный комментарий в JavaScript?", [
    "// комментарий",
    "# комментарий",
    "-- комментарий",
    "/* комментарий */"
  ]),
  new QuizQuestion("Какой из вариантов создаёт переменную?", [
    "let x;, var x;, const x = 5;",
    "new x = 0;",
    "define x;",
    "let: x;"
  ]),
  new QuizQuestion("Как объявить константу в JavaScript?", [
    "const PI = 3.14;",
    "var PI = 3.14;",
    "let PI = 3.14;",
    "PI = 3.14;"
  ]),
  new QuizQuestion("Какой оператор используется для сложения?", [
    "+",
    "=",
    "++",
    "&"
  ]),
  new QuizQuestion("Что произойдёт при выполнении 5 + \"5\"?", [
    "Результат будет строка \"55\"",
    "Будет ошибка",
    "Результат будет число 10",
    "Результат будет строка \"10\""
  ]),
  new QuizQuestion("Что такое функция в JavaScript?", [
    "Блок кода, который выполняет определённую задачу",
    "Метка в HTML",
    "Свойство объекта",
    "Тип переменной"
  ]),
  new QuizQuestion("Какой из способов является Function Declaration?", [
    "function имя(параметры) { ... }",
    "let имя = () => { ... }",
    "var имя = function() { ... }",
    "const имя = new Function()"
  ]),
  new QuizQuestion("Как называется функция, объявленная как var square = function(number) {...}?", [
    "Function Expression",
    "Function Declaration",
    "Arrow Function",
    "Lambda"
  ]),
  new QuizQuestion("Что вернёт функция sum(a, b) { return a + b; } при вызове sum(3, 4)?", [
    "7",
    "34",
    "undefined",
    "NaN"
  ]),
  new QuizQuestion("Что происходит, если в функции нет оператора return?", [
    "Функция возвращает undefined",
    "Функция вызывает ошибку",
    "Функция возвращает 0",
    "Функция ничего не делает"
  ]),
  new QuizQuestion("Какой синтаксис соответствует стрелочной функции?", [
    "const f = () => { ... };",
    "function f() { ... }",
    "let f := function() {}",
    "f = -> { ... };"
  ]),
  new QuizQuestion("Какое значение this будет иметь стрелочная функция?", [
    "Стрелочная функция не имеет собственного this",
    "this всегда window",
    "this указывает на родительский DOM",
    "this можно переопределить"
  ]),
  new QuizQuestion("Что выведет код greet(); если function greet(name = \"Гость\") { console.log(\"Привет, \" + name); }?", [
    "Привет, Гость",
    "undefined",
    "Ошибка",
    "Привет,"
  ]),
  new QuizQuestion("Что делает setTimeout(function() { console.log(\"Hi\"); }, 2000);?", [
    "Выводит \"Hi\" через 2 секунды",
    "Ждёт 2 секунды и завершает программу",
    "Запускает цикл вывода",
    "Выводит сообщение немедленно"
  ]),
  new QuizQuestion("Что такое колбэк?", [
    "Функция, переданная как аргумент другой функции",
    "Метод для форматирования даты",
    "Тип переменной",
    "Событие нажатия"
  ]),
  new QuizQuestion("Что произойдёт при вызове console.log(counter()); второй раз после const counter = makeCounter();?", [
    "Увеличенное значение счётчика (на 1 больше)",
    "Ошибка",
    "0",
    "То же значение"
  ]),
  new QuizQuestion("Какое свойство CSS задаёт имя анимации?", [
    "animation-name",
    "animation-id",
    "name",
    "animation-tag"
  ]),
  new QuizQuestion("Что произойдёт, если не указать animation-duration?", [
    "Анимация не будет воспроизводиться",
    "Анимация будет бесконечной",
    "Анимация сработает мгновенно",
    "Анимация будет скрыта"
  ]),
  new QuizQuestion("Какое значение animation-direction воспроизводит анимацию сначала назад, а затем вперёд?", [
    "alternate",
    "reverse",
    "normal",
    "both"
  ]),
  new QuizQuestion("Какое свойство CSS определяет количество повторений анимации?", [
    "animation-iteration-count",
    "animation-repeat",
    "repeat-count",
    "loop"
  ]),
  new QuizQuestion("Что делает свойство animation-fill-mode: forwards?", [
    "Сохраняет конечное состояние анимации",
    "Анимация идёт в обратном порядке",
    "Повторяет анимацию",
    "Отменяет анимацию"
  ]),
  new QuizQuestion("Какой параметр animation-timing-function задаёт одинаковую скорость от начала до конца?", [
    "linear",
    "ease-in",
    "ease-out",
    "step-start"
  ]),
  new QuizQuestion("Какой стиль нужно задать элементу-аниматору в JavaScript DOM-анимации?", [
    "Свойства через style, например style.left = \"100px\"",
    "Свойства через innerHTML",
    "Добавить класс",
    "Свойство animation: true"
  ]),
  new QuizQuestion("Какой метод JavaScript используется для создания анимации с таймером?", [
    "setInterval() или requestAnimationFrame()",
    "setTimeout() и delay()",
    "animateLoop()",
    "startTimer()"
  ]),
  new QuizQuestion("Какой атрибут HTML позволяет выполнить код JavaScript при клике по элементу?", [
    "onclick",
    "onhover",
    "onpress",
    "action"
  ]),
  new QuizQuestion("Что делает событие oninput?", [
    "Срабатывает при вводе данных в элемент формы",
    "Обрабатывает клик мыши",
    "Отслеживает фокус на элементе",
    "Происходит при загрузке страницы"
  ]),
  new QuizQuestion("Какое значение animation-direction устанавливается по умолчанию?", [
    "normal",
    "reverse",
    "alternate",
    "inherit"
  ]),
  new QuizQuestion("Какой синтаксис задаёт сокращённую запись всех параметров анимации?", [
    "animation: name duration timing-function delay iteration-count direction fill-mode;",
    "animation-all: name speed loop delay;",
    "animate: duration name loop;",
    "animation-style: default"
  ]),
  new QuizQuestion("Что произойдёт, если задать animation-delay: -2s;?", [
    "Анимация начнётся с уже пройденным временем 2 секунды",
    "Анимация не запустится",
    "Будет ошибка",
    "Анимация начнёт с конца"
  ]),
  new QuizQuestion("Что означает animation-iteration-count: infinite;?", [
    "Анимация будет бесконечно повторяться",
    "Анимация сработает один раз",
    "Анимация остановится после 1 цикла",
    "Анимация отменится"
  ]),
  new QuizQuestion("Какой стиль должен быть у контейнера для JS-анимации?", [
    "Обычно позиционирование: position: relative",
    "position: fixed",
    "display: flex",
    "margin: auto"
  ]),
  new QuizQuestion("Какой тип анимации возможен только при помощи JavaScript, а не CSS?", [
    "Анимация, зависящая от пользовательского ввода в реальном времени (например, физика, игры)",
    "Плавное появление текста",
    "Моргание элементов",
    "Изменение цвета"
  ]),
];
