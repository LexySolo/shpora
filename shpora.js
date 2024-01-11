
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