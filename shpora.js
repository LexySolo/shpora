
// JS - глоб объект Window:
//                 1. DOM - document object modul
//                 2. BOM - brauser object modul
//                 3. JS
_______________________________________________________

/////////// Объявление переменных \\\\\\\\\\\

// let - может менять значение по ходу программы, ECMAScript 6

let userOne = "Sasha"
	{
    	var userName = "Sasha"
    	console.log(userName)       
	}
	console.log(userName)			//не видно в консоли

// const  не может менять значение, ECMAScript 6

const userOne = "Sasha"

// var - старое объявление переменных, ECMAScript 5, отличается областью видимости
	{
    	var userName = "Sasha"
    	console.log(userName)       
	}
	console.log(userName)			//видно в консоли
_______________________________________________________

/////////// Типы данных \\\\\\\\\\\

// String - любые строковые данные в "" или ''
let userOne = "Sasha"

// Number - любые числовые значения, ограниченные числом 9007199254740991
let userOne = 123

// BigInt - работа с большими значениями
console.log(Number.MAX_SAFE_INTEGER) // вывод 9007199254740991 в консоли
console.log(9007199254740991454545445n) // вывод BigInt

// Объекты - некая сущность, область памяти
let objOne = {
	user: "Sasha",
	method: function() {
		console.log(this.user)
	}
}

// Массивы - коллекция данных, тоже явл объектом
let arr = [1,2,3]

// Null - пустота; используется для сброса значений
let age = 18;
age = null

// undefined - не определено или значение не было присвоено
let userName; // в консоли underfined

// Boolean - true/false
let userOne = true

// Symbol - дописать позже!!!
_______________________________________________________

/////////// Операторы сравнения и усовия \\\\\\\\\\\

// >, <, >=, <=
// = - присваивание 
// == - нестрогое равенство
// === - строгое равенство (по типу данных)
// != - нестрогое неравенство
// !== - строгое неравенство (по типу данных)
console.log('5' == 5)   // true
console.log('5' === 5)  // false

if('5' === 5) {
	console.log("false")
}
else
	console.log("true")
/////
if('5' === 5) {
	console.log("false")
}
else if('5' == 5) {
	console.log("true")
}
///// switch  - способ несколько раз использовать if
let a = 4;
switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
_______________________________________________________

/////////// Тернальный оператор \\\\\\\\\\\    

if(10 < 12) {
	console.log("верно")
}
else {
	console.log("неверно")
}
// или:
10<12 ? console.log("верно") : console.log("неверно")
_______________________________________________________

/////////// Логические операторы \\\\\\\\\\\

// || - или (or)
// && - и (and)
if(user === true && age >= 18) {
	console.log("Доступ разрешен")	
}
else if(user === false || age < 18) {
	console.log("Доступ запрещен")
}
_______________________________________________________

/////////// Конкатинация строк и шаблонные строки \\\\\\\\\\\

let name = "Sasha"								 //
console.log('Hello ' + name + '!') // конкатинация и шаблонирование строк

let name = "Sasha"								 //
console.log(`Hello ${name}!`)      // шаблонные строки
_______________________________________________________

/////////// Функции \\\\\\\\\\\

// хорошая ф-я всегда что-то возвращает
// замыкание - функция и все ее внешние переменные
// function declaration
		function sayHi(){
			console.log("Hi")		// можно объявитьь и вызвать в любом месте кода
		}
// function expression
		const sayHi = function(){
			console.log("Hi")		// можно вызвать только после объявления функции
		}
// самовызывающиеся ф-и
		function sum(a,b){
		    console.log(a) 	// в консоли undefined
		    console.log(b)	// в консоли undefined
		 console.log(a + b) // в консоли NaN
		}
		sum();
// безымянные ф-и
		(function(){
		     console.log("Hi")
		})()
	_____
		(function(a,b){
		     console.log(a + b)
		})(5,7)
// стрелочные ф-и (нет своего "this" - контекста)
		const arrFun = (a,b) => {
    	console.log(a + b);
		}
		arrFun(22,34)
	___________
		const arrFun = (a,b) => console.log(a + b);

let a = 10,
    b = 22;
function sum(){
    let c = a + b;		// пример замыкания
    return c;
}
console.log(sum())

// первокласcные функции - функция в функции. Пример:
    function foo(){
      function ggg(){};}

// Доступ а аргуменам можно осуществить через псевдомасив Доступ к ним осуществляется через «псевдо-массив» arguments.
function sayHi() {
    for (let i = 0; i < arguments.length; i++) {
        alert( "Привет, " + arguments[i] );
    }
}

sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'
// т.е. здесь функции передается псевдомасив arguments = ['Винни','Пятачок']
// но arguments – это не массив
//ОШИБКА
function sayHi() {
    var a = arguments.shift(); // ошибка! нет такого метода!
}
_______________________________________________________		

/////////// Методы массива \\\\\\\\\\\

// массив - структура данных(коллекция)
// push - добавление нового элемента массива
let arr = [1,2,3,4]
arr.push(5)
console.log(arr)
// pop - удалить последний элемент из массива
arr.pop()
// shift - удаляет первый элемент массива и возвращает его
console.log(arr.shift())
// unshift - добавляет что-то в начало массива

arr.slice(start, end) // создаёт новый массив и копирует в него элементы массива arr от start до end.
                      //А если start и end не указаны, то копирует весь массив.
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);

let array = [2, 5, 9];
array.indexOf(5);                         // Вернется 1

let myArray = ['один', 'два', 'три']; //на месте обращает порядок следования элементов массива.
myArray.reverse();                     // Первый элемент массива становится последним, а последний — первым.
console.log(myArray)		// ['три', 'два', 'один']

arr.length // длина
arr[arr.length -1];					// Вернет последний элемент массива

// concatination
let one = [1,2,3],
		two = [4,5,6];
	console.log(one.concat(two));
___________
let footBal = [10,4,6,2,4]
 function fooLy(a,b){
     if(a < b){
        return 1;
    } else if(a == b ){
        return 0;
   } else {
       return -1;
   }
  }
footBal.sort(foof);  // сортирует элементы массива
                 // в этом примере возвратиться [2,4,4,6,10]

// Виды сортировок:
https://habr.com/ru/companies/simbirsoft/articles/769312/
_______________________________________________________

/////////// Методы string \\\\\\\\\\\

// Строки зачастую выступают ввиде массивов

let anyString = "Привет, мир"
console.log(anyString.charAt(0))         // Возвращает символ в строке,
                                         // в этом примере возвратиться - П

let LowerText="ПриВет"
document.write(LowerText.toLowerCase()); // Возвращает строку нижнего реестра,
                                         // в этом примере возвратиться привет
let upperText="ПриВет"
document.write(upperText.toUpperCase())  // Возвращает строку нижнего реестра,
                                         // в этом примере возвратиться ПРИВЕТ

let arr = [ 1, 2, 3, 4, 5 ];
arr.slice(2);                           // Данный метод не изменяет исходный массив или строку,
                                        // а просто возвращает его часть.
                                        // Здесь вернется - [3, 4, 5]
let str = "Моя строка"
str.substring(0,3)                      // Возвращает часть сточки, без последнего значения(здесь без 3),
                                        // в этом примере возвратиться Моя
let str = "тест еще тест";
str.replace("тест","прошел");           // Заменяет одну строк другой,
                                        // в этом примере возвратиться "прошел еще тест"
let str = "     Hello World!      ";
alert(str.trim());                      // Метод trim() удаляет пробельные символы с начала и конца строки,
                                        // в этом примере возвратиться "Hello World!"
let str1 = "Hello ";
let str2 = "world!";
let res = str1.concat(str2);            // Соединяет строки, здесь получиться Hello World!"
                                        // Также с массивами см ниже
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);// Создает массив ["a", "b", "c", 1, 2, 3];

let upperText="ПриВет"
document.write(upperText.toLowerCase()); // Возвращает строку нижнего реестра,
                                         // в этом примере возвратиться привет привет

split() //разбивает объект String на массив строк путём разделения строки указанной подстрокой.
let data = ('London is a capital of GB').split(' ');
console.log(data)
//получиться    [ 'London', 'is', 'a', 'capital', 'of', 'GB' ]

Math.floor(Math.random() * 5); // - генерирует случайные числа от 0 до 4(включительно)
//Math.random() - генерирует случайные число от 0 до 1(не включая 1), но дробные 0.123; 0.499
//Math.floor() - отбрасывает дробную часть то есть 0.123 в 0; 4.999 в 4;
Math.ceil() // Десятичное округление вверх
// Пример: использование
Math.ceil(.95);   // 1
Math.ceil(4);     // 4
Math.ceil(7.004); // 8
_______________________________________________________

/////////// Проверка на число \\\\\\\\\\\

// NaN неравно ничему даже самому себе
// isNaN возвращет true если переданное ей значение не число
isNaN("12") // Вернет false
_______________________________________________________

/////////// Циклы \\\\\\\\\\\
let arr = [1,2,34,65,72,64];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
___________
let go = [1232,43,64,12,445,7]
for(let item in go){
    console.log(item);
    console.log(go[item])
}
___________
let go = [1232,43,64,12,445,7]
for(let item of go){
    console.log(item);
    console.log(go[item])
}
___________
map() //создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
let numbers = [1, 4, 9];
let doubles = numbers.map(function(index,elem) {
    return elem * 2;
});
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]
___________
forEach()//выполняет указанную функцию один раз для каждого элемента в массиве.
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
// Обратите внимание на пропуск по индексу 2, там нет элемента, поэтому он не посещается
[2, 5, , 9].forEach(logArrayElements);
// логи:
// a[0] = 2
// a[1] = 5
// a[3] = 9
___________
[2, 5, , 9].forEach(function (element, index, array) {
    console.log('a[' + index + '] = ' + element);				// классический forEach
});
___________
[2, 5, , 9].forEach(element, index, array) => {
    console.log('a[' + index + '] = ' + element);				// классический forEach
};
___________
let number = 0;
while ( number < 3 ){
   number++;
   console.log(number)
    };
// Пока namber < 3 делать namber + 1
___________
let number = 0;
do {										// делать
    number++;
    console.log(number)
  }
 while(number < 5)			// пока
___________
let Car = {
    name: 'Zoom',
    number: 34,
    massage: function () {
        console.log(this.name); // Не забываем про this
    }
};
for(let prop in car){   // Переберают свойства объекта и последовательно
                        // присваивает  переменной prop
    console.log(prop + ':' + car[prop]);  //prop с квадратными скобками можно
                                         // использовать для получение значений свойтв
}
_______________________________________________________

/////////// Объекты и их свойства \\\\\\\\\\\ объект - область памяти

const Car = {								// = - присваивание ссылки, а не самого объекта
    name: 'Zoom',						// если объект в const, внутри можно менять свойства и методы
    number: 34,
    massage: function () {
        console.log(this.name);
    }}

// const Car = {								
//  _ключ_ - name: 'Zoom', - _значение_					
//     			 number: 34,
//     			 massage: function () {
//         console.log(this.name);
//     }}

___________
Car.d = false; 			// Добавление в объект или изменеие
delete Car.b;  			// Удаление свойства объект
Car.c();       			// Вызов метода
Car['a'];      			// Обратиться объекту можно и так
___________
let obj = new Object();
obj.prop = 'существует';
obj.hasOwnProperty('prop'); // Возвращает логическое значение, указывающее,
                          // содержит ли объект указанное свойство,
                          // в этом примере возвратиться true
 let copy = Object.assign({}, obj)//используется для копирования значений всех собственных перечисляемых
                                  //свойств из одного или более исходных объектов в целевой объект.
let obj = { a: 1 };
let copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
___
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };
let obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(obj1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.
___________
//object.set() - устанавливает значение
//object.get() - возвращает значение
// сет и гет нужны для того чтобы можо устанавливать и возвращать значение сфойств обьектов
// но в сет можно устанавливать условия поэтому лучше испотзовать сет и гет
// пример работы с сет и гет
let Car = {
    name: "lada",
    old: 5,
    get age(){
        return this.old
    },
    set age(value){     // тут value обязательно для сет
        if(value < 0){
            this.old = 0
        } else if(value>18){
            this.old = 18
        } else{
            this.old = value;
        }
    }
}
Car.age = -2;
console.log(Car.age); //вернет 0
Car.age = 20;
console.log(Car.age);//вернет 18
Car.age = 15;
console.log(Car.age);//вернет 15
_______________________________________________________

/////////// Наследование \\\\\\\\\\\

// отдельная скрытая область(унаследовннный объект)
// [[Prototype]]
// ссылки не могут идти по кругу
// значение proto мб только объектом и Null
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit._proto_ = animal;			// устаревший вариант наследования
___________
let obj1 = {
    name: "Kevin"
}
let obj2 = Object.create(obj1); //obj2 наследует свойства  obj1
console.log(obj2.name); //Kevin
___________

Object.getPrototypeOf(obj2) === obj1; // получаем прототип объекта obj2
___________
Object.setPrototypeOf(obj2, {});		// заменяем прототип объекта obj2 на {}
___________

// конструкторы
function Dog(name, old) {
    this.name = name;
    this.old = old;
    this.cons = function () {
        console.log('Это объкект - ' + this.name);
    }
}
let Kevin = new Dog('Kevin','34');  // - вт и есть создание экземпляра класса Dog, т.е. обьект

if(Kevin instanceof Dog) {         // Возвращает true если объект был создан указанным конструктором
}
// в JS, как таковых, классов нет (в отлич от др яз), есть симуляция классов
___________
class Dog {
	constructor(name,old) {
		this.name = name;
		this.old = old;
	}
}
let Kevin = new Dog("Kevin", "13")
console.log(Kevin)
_______________________________________________________

////////// JSON \\\\\\\\\\\

// json - js object nutrision
let user = {
    name: "frank",
    id: 54351,
    toJSON: function(){   // если есть это свойство то JSON.stringify преобразует в
                          // JSON только то что возвращает toJSON
        return {
            name: this.name
        }
    }
}
let jsonDATA = JSON.stringify(user); //преобразовывает обьект в JSON
let objectDATA = JSON.parse(jsonDATA);//преобразовывает(распарсивает)JSON в обьект
_______________________________________________________

/////////// Конструкция try..catch \\\\\\\\\\\

try {
    // код ...
} catch (err) {
    // обработка ошибки
}
// Выполняется код внутри блока try.
//Если в нём ошибок нет, то блок catch(err) игнорируется,
//то есть выполнение доходит до конца try и потом прыгает через catch.
//Если в нём возникнет ошибка, то выполнение try на ней прерывается
//,и управление прыгает в начало блока catch(err).

//Пример без ошибок: при запуске сработают alert (1) и (2):
try {
    alert('Начало блока try');  // (1) <--
    // .. код без ошибок
    alert('Конец блока try');   // (2) <--
} catch(e) {
    alert('Блок catch не получит управление, так как нет ошибок'); // (3)
}
alert("Потом код продолжит выполнение...");
___________
//Пример с ошибкой: при запуске сработают (1) и (3):
try {
    alert('Начало блока try');  // (1) <--
    lalala; // ошибка, переменная не определена!
    alert('Конец блока try');  // (2)
} catch(e) {
    alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--
}
alert("Потом код продолжит выполнение...")
_______________________________________________________

/////////// Взаимодействие с HTML \\\\\\\\\\\

document.getElementById('');         // По id
document.getElementsByClassName(''); // По class
document.getElementsByName('');      //Он работает только с теми элементами, для которых в спецификации явно
                                     // предусмотрен атрибут name: это form, input, a, select, textarea
document.getElementsByTagName('');   // По тегу: p, img, div, ul, li и т д
document.querySelector('');          // сбда можно без конфликтов засунуть как id так и class что удобно
                                     // только в начале нудно писать точку или решетку пример querySelector('.page_canvas')
let a = document.getElementById('foo');
    a.setAttribute('class', 'ufa');   // Вызывается для задания атрибутов элементов HTML,
                                     // В данном случае элементу добавляется класс  ufa
let b = document.getElementById('faa');
    g = b.getAttribute('class');     // Узнать значение атрибута элемента,
                                     // В данном случае какой класс у элемента faa
    b.removeAttribute('class');      // удалить атрибут
___________
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", () => {
  input.toggleAttribute("disabled");
});
___________
let image = document.getElementsByTagName('img');
    image.src = "bls.jpg";           // Вставляет в атрибут src ссылку на фаил
    elem.getBoundingClientRect();   // возвращает размер элемента и его позицию относительно окна
___________
let button = document.querySelector('button')
// добавили класс
button.classList.add('active')
// удалили класс
button.classList.remove('active')
// вернет false, так как такого класса у элемента нет
button.classList.contains('active')
let elem = document.querySelector('#elem');
elem.classList.toggle('zzz');       // чередование классов (если есть - удаляется, если нет - добавляется)
___________
let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
  document.body.append(div);    // вставка в body
___________
element.style                        // возвращает объект, который дает доступ к стилю элемента на чтение и запись.
let a = document.getElementById('foo');
a.style.width="5px".                 // здесь доюавиться ширина в 5рх
    // свойства css где есть черточка в js преобразуются в
elem.style.backgroundColor
elem.style.zIndex
elem.style.borderLeftWidth
offsetWidth                           //внешняя ширина блока (т.е. со всеми падингами и марджинами),
offsetHeight                         //  внешняя высота блока.
elem.innerHTML                        // вставить текст

let div = document.createElement('div'); // Создает новый элемент с указанным тегом
div.className ="success";             // присваивают класс
div.appendChild(elem);                // Добавляет elem в конец дочерних элементов div
                                      // пример

let newLi = document.createElement('li');
newLi.innerHTML = 'Привет, мир!';
list.appendChild(newLi);

let.insertBefore(elem, nextSibling)   // Вставляет elem в коллекцию детей parentElem, перед элементом nextSibling.
                                      // пример
let newLi = document.createElement('li');
newLi.innerHTML = 'Привет, мир!';
list.insertBefore(newLi, list.children[1]);

parentElem.insertBefore(elem, null);
// то же, что и:
parentElem.appendChild(elem)

div.querySelector('li')                // возвращает только первый элемент. Этот метод часто используется,
  // когда мы заведомо знаем, что подходящий элемент только один, и хотим получить в переменную сразу его.
parentElem.removeChild(elem)          // удлаление в родительском элементе  parentElem, элемент elem
parentElem.replaceChild(newElem, elem)// Среди детей parentElem удаляет elem и вставляет на его место newElem.
                                   // переместить элемент на новое место
    //<div>Первый</div
    // <div>Второй</div>
let first = document.body.children[0];
let last = document.body.children[1];
// нет необходимости в предварительном removeChild(last)
document.body.insertBefore(last, first) // поменять местами

//Итого
//Методы для создания узлов:
document.createElement(tag) // создает элемент
document.createTextNode(value) // создает текстовый узел
elem.cloneNode(deep) // клонирует элемент, если deep == true, то со всеми потомками, если false – без потомков.

// Вставка и удаление узлов:
parent.appendChild(elem)
parent.insertBefore(elem, nextSibling)
parent.removeChild(elem)
parent.replaceChild(newElem, elem)
elem.remove()   // - удаление элемента напрямую
_______________________________________________________

/////////// Обработчики прослушки событий \\\\\\\\\\\

// Здесь нужно обратить внимание на .target и .id и на свойство функции eventObj
let foo = document.getElementsByClassName('zero');
    for (let i = 0; i < foo.length; i++) {
        foo[i].onclick = function (eventObj) { // При обработки событий
                                               // свойство функции eventObj ОБЕЗАТЕЛЬНО
            let img = eventObj.target,         // Свойство target определяет какой элемент сгенерировал данное событие
                name = img.id;                 // Определяет значение id элемента
        };
    }
let button = document.getElementsByClassName('depo');
button.addEventListener('click', function(){}, false); // Еще один способ добавление обработчика событий
                                                       // АddEventListener() получает тип события(из таблицы только убрать on),
                                                       // функцию и аргумент(false - важно так как получает фазу сплытия - важная штука)
// Когда на элементе происходит событие, обработчики сначала срабатывают на нём, 
// потом на его родителе, затем выше и так далее, вверх по цепочке предков.
// название bubbling(баблинг (от слова - пузырь))

<body onclick="alert(сюда всплытие не дойдёт)">
  <button onclick="event.stopPropagation()">Кликни меня</button>
</body>             // прекращение bubbling
_______________________________________________________

/////////// Местоположение \\\\\\\\\\\

let frozen = document.getElementById('froZen');
    frozen.onmousemove = function(ooo) {
        let a = ooo.pageX, // смещение в пикселях от левого края страницы браузера
            b = ooo.pageY; // смещение в пикселях от верхнего края страницы браузера
        console.log(a + "," + b);
    }
 // offsetX offsetY - внутри дива
// clientX clientY - смещение в пикселях от левого верхнего края окна браузера
// screenX screenY - смещение в пикселях от левого верхнего края пользовательского экрана
offsetParent              // – «родитель по дереву рендеринга» – ближайшая ячейка таблицы,
                         // body для статического позиционирования или ближайший позиционированный
                         // элемент для других типов позиционирования.
offsetLeft/offsetTop     // – позиция в пикселях левого верхнего угла блока,
                         // относительно его offsetParent.
offsetWidth/offsetHeight // – «внешняя» ширина/высота блока, включая рамки.
clientLeft/clientTop      //– отступ области содержимого от левого-верхнего угла элемента.
                         // Если операционная система располагает вертикальную прокрутку справа,
                         // то равны ширинам левой/верхней рамки, если же слева,
                         // то clientLeft включает в себя прокрутку.
clientWidth/clientHeight // – ширина/высота содержимого вместе с полями padding,
                         // но без полосы прокрутки.
scrollWidth/scrollHeight //– ширина/высота содержимого, включая прокручиваемую область.
                        // Включает в себя padding и не включает полосы прокрутки.
scrollLeft/scrollTop    //– ширина/высота прокрученной части документа, считается
                        // от верхнего левого угла.
let gInput = document.getElementById('InputText'),
    getIn = gInput.value;        // Берет значение из INPUT, TEXTAREA
let Inpu = document.getElementById('InputText'),
    gIn = Inpu.value,
    Pi = parseInt(gIn );         //  принимает строку в качестве аргумента и возвращает целое число

/////////// callback - вложенность \\\\\\\\\\\ callback hall - множество вложенностей
// пример:
function nomera(succses,faild){
          setTimeout(function() {
                 let zapros = true,      
                     colNom = 31;
                    if(zapros){
                        console.log("есть номера")
                        succses();
                           let step1 = offer1(colNom);
                                 let step2 = offer2(step1); 
                                   console.log(step2)         
                    } else {
                        console.log("нет номера")
                        faild();
                    }
          },1000);
}
nomera(succsescallback,faildcallback)
function succsescallback(){
    console.log("заказ номера")
}
 function offer1(data){
     console.log(data)
     data++;
     return data
 }
  function offer2(data){
     console.log(data)
     data++;
     return data
 }
function faildcallback(){
    console.log("в другой раз")
}
_______________________________________________________

/////////// promise - обещание \\\\\\\\\\\
// promise не используем, а "потребляем"

const myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){             
        let zapros = true;
            if(zapros){
                resolve();      // promise разрешился
            }
            else{
                reject()        // promise не разрешился
            }
    }, 1000)
}).then(function(){             // promise с разрешенным resolve
    console.log("Запрос выполнен");
}).catch(function(){            // отлов ошибок
    console.log("Запрос отменен");
})
_______________________________________________________

/////////// Асинхронные ф-и Async/await\\\\\\\\\\\

// пример с 2 запросами
 async function threeButton(){              // объявление асинх ф-и
    try{
     const prom1 = await myFunc();          // ожидание выполнения
     const prom2 = await myFunc2(prom1);    // ожидание выполнения
     console.log(prom2);
    } catch(err) {
        console.log(err)
    }
 }
 threeButton()
function myFunc(){
 return new Promise(function(resolve, reject){   
         setTimeout(function() {
                 let zapros = true,
                     colNom = 31,       
                     faild ="error";
                    if(zapros){                   
                        resolve(colNom);
                    } else {
                        reject(faild);
                    }
          },1000);
})
}
 function myFunc2(data){   
    return new Promise(function(resolve, reject){   
         setTimeout(function() {
                 let zapros = true,
                     anazecolNom = 29,       
                     faild ="error";
                    if(zapros){
                         let summUser = anazecolNom + data
                        resolve(summUser);
                    } else {
                        reject(faild);
                    }
          },1000);
})
 }
_______________________________________________________

/////////// Виды запросов \\\\\\\\\\\

// GET — получение ресурса
// POST — создание ресурса
// PUT — обновление ресурса
// DELETE — удаление ресурса

/////////// fetch \\\\\\\\\\\

// пример Get-запроса
fetch("https://www.cbr-xml-daily.ru/daily_json.js")
.then(function(data){
  return data.json()
}).then(function(data2){
   console.log(data2)
})
// пример универсального Post-запроса
const users = 'https://jsonplaceholder.typicode.com/users'
function xmlPromis(metod, url, body = null){
return fetch(url,{
    method: metod,
    body: JSON.stringify(body),
    headers: {"Content-Type": "application/json"}
}).then(function(data){
  return data.json()
})
}
xmlPromis('POST', users, body = {
    name:"ilya",
    age: 28
}).then(function(data){
  console.log(data)
}).catch(function(err){
console.log("Error on " + err)
})
// пример универсального Post-запроса XMLHttpRequest
const users = 'https://jsonplaceholder.typicode.com/users'
function xmlPromis(metod, url, body = null){
return new Promise(function(resolve, reject){
const xml = new XMLHttpRequest();           // экземпляр класса XMLHttpRequest
  xml.open(metod, url);                     // открываем соединение методом Post
  xml.responseType = "json"                 // тип отправки данных json
  xml.setRequestHeader("Content-Type", "application/json")      // установка соотв заголовка
  xml.onload = function() {
    if(xml.status >= 400){
       reject(xml.status)
    }  else {
       resolve(xml.response)                // полученный ответ
    }
  }
  // xml.onerror = function(){
  //    console.log(xml.response);
  //}
  xml.send(JSON.stringify(body));           //  отправка запроса
})
}
xmlPromis('POST', users, body = {
    name:"ilya",
    age: 28
}).then(function(data){
  console.log(data)
}).catch(function(err){
console.log("Error on " + err)
})

// пример универсального Get-запроса XMLHttpRequest
const url = 'https://jsonplaceholder.typicode.com/users'
function anyThing(adress) {
  return new Promise(function(resolve,reject) {
    const xml = new XMLHttpRequest();
      xml.open('GET',adress)
       xml.onload = function() {
          if(xml.status >= 400) {
            reject(xml.status)
          }
            else {
              resolve(xml.response)
            }        
       }
        xml.send();
  })
}
anyThing(url)
.then(function(data) {
  console.log(data)
})
.catch(function(error) {
  console.log(error)
})