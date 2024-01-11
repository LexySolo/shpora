
/////////// Объявление переменных ///////////

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


/////////// Типы данных ///////////

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

/////////// Операторы сравнения и усовия ///////////
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

/////////// Тернальный оператор ///////////    
if(10 < 12) {
	console.log("верно")
}
else {
	console.log("неверно")
}
// или:
10<12 ? console.log("верно") : console.log("неверно")

/////////// Логические операторы ///////////
// || - или (or)
// && - и (and)
if(user === true && age >= 18) {
	console.log("Доступ разрешен")	
}
else if(user === false || age < 18) {
	console.log("Доступ запрещен")
}


/////////// Конкатинация строк и шаблонные строки ///////////
let name = "Sasha"								 //
console.log('Hello ' + name + '!') // конкатинация и шаблонирование строк

let name = "Sasha"								 //
console.log(`Hello ${name}!`)      // шаблонные строки

/////////// Функции ///////////
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
	____
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
		
/////////// Методы массива ///////////
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

/////////// Методы string ///////////
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
let data = ('London is a capitol of GB').split(' ');
console.log(data)
//получиться    [ 'London', 'is', 'a', 'capitol', 'of', 'GB' ]

Math.floor(Math.random() * 5); // - генерирует случайные числа от 0 до 4(включительно)
//Math.random() - генерирует случайные число от 0 до 1(не включая 1), но дробные 0.123; 0.499
//Math.floor() - отбрасывает дробную часть то есть 0.123 в 0; 4.999 в 4;
Math.ceil() // Десятичное округление вверх
// Пример: использование
Math.ceil(.95);   // 1
Math.ceil(4);     // 4
Math.ceil(7.004); // 8

////////////////////////////Проверка на число/////////////////////////////

// NaN неравно ничему даже самому себе
// isNaN возвращет true если переданное ей значение не число
isNaN("12") // Вернет false