// ----------------------------------------------------HomeWork #3 JS------------------------------------------------------------------

// Задача1 +
// Ви повинні реалізувати функцію, яка повертає різницю між найбільшим  та найменшим значенням у списку ,
// отриманому як аргумент функції. Масив,  який отримує функція як аргумент, може містити позитивні та негативні числа.
// Якщо масив порожній або має значення, поверніть нуль. Спочатку масив буде  поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0

// Мої коментарі: вважаю, що спочатку потрібно перевірити довжину масиву, якщо вона 1< то одразу повертаємо «0»,
// потім потрібно відсортувати масив у порядку зростання значень від найменшого до найбільшого, потім повернути
// значення нульового індексу та останнього (наприклад можна витягнути методом .shift перший елемент масиву,
// потім .pop витягнути останній елемент масиву і від другого відняти перший)

// -------------------------Рішення, згідно завдання!!!---------------------- Функція, яка приймає массив, як аргумент:

// let checkArraylength = function(myArray) {
//     let SortedArray = myArray.sort(function(a, b) {
//     return a - b;
// });
//     if (myArray.length > 1) {
//         alert(SortedArray.pop() - SortedArray.shift() + ": різниця міфж найменшим і найбільшим значенням вхідного массиву");
//     } else {
//         alert("array is to short");
//         return (0);
//     }
// };

// let arrToCheck = [
//     1,
//     2,
//     3,
//     -95
// ];

// checkArraylength(arrToCheck);




// ------------------------не зовсім вірно інтерпретував для себе завдання- це був початковий код-----------------------------------------------------------

// let numbers = [
//     1,
//     2,
//     3,
//     -90
// ];
// let length = numbers.length;
// console.log(numbers + ": вхідний масив");
// console.log("Довжина вхідного масиву :" + length + " елементів");


// let SortedArray = numbers.sort(function(a, b) {
//     return a - b;
// });

// console.log(SortedArray + ": відсортований масив за збільшенням");

// let checkArraylength = function() {
//     if (length > 1) {
//         alert(SortedArray.pop() - SortedArray.shift() + ": різниця міфж найменшим і найбільшим значенням вхідного массиву");
//     } else {
//         alert("array is to short");
//         return (0);
//     }
// };
// checkArraylength ();


// ---------------------------------------------------------------------------------------------------------------------------------



// Задача2 +
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді  масиву тільки ті слова, довжина яких перевищує число.

// let compareSrtlenght_toNumber = function (str, num) {
//     let wordArray = [];
//     if (str.length > num) {
//         wordArray.push(str);
//         console.log(wordArray);
//     } else {alert("Кількість букв в слові менша за число");}
// }

// compareSrtlenght_toNumber (prompt('Введіть слово', 'АБВ'), +prompt('Введіть число', 1))

// ---------------------------------------------------------------------------------------------------------------------------------


// Задача3 +
// Напишіть функцію, яка повертає true, якщо перший переданий аргумент  (рядок)
// закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false


// let strCompare = function (str1, str2) {

//     if (str1.length > str2.length) {
//         alert("перший рядок більший за другий, зараз перевіримо чи другий рядок складаеться з тих символів, якими закінчується перший");
//     } else {alert("Дані не відповідають умові. Потрібно, щоб другий рядок був коротший за перший");}

//     let numberElstr2 = str2.length;
//     endingFirstStr = str1.slice(-numberElstr2);
//     if (str2 === endingFirstStr) {
//         return true;
//     } else {return false;}
// }

// console.log(strCompare(prompt('Введіть набір символів (виключаючи спецсимволи)', 'АБВ'), prompt('Введіть другий набір символів (виключаючи спецсимволи)', 'АБВ')));


// ---------------------------------------------------------------------------------------------------------------------------------


// Задача4 +
// Напишіть функцію, яка отримує масив цілих чисел і повертає масив  середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]



// let getAverageValueOfTwoEvenNumbers = function (compilatedArray) {
//   const newArray = [];
//   for(i=0; i < compilatedArray.lenght; i++) {
//   if (([i]%1 !== 0) && ([i+1]%1 !== 0)) continue;
//   else (newArray.push(([i] + [i+1]) / 2));
//   }
//   return newArray;
// }

// let CreatedNewArray = [];

// while (true) {
//    let newValue = +prompt("Введіть будь яке число!");
//    if (!newValue) break;
//    CreatedNewArray.push(newValue);
// }
// console.log(CreatedNewArray + " Масив, що ствроено з ведених елементів");

// console.log(getAverageValueOfTwoEvenNumbers(CreatedNewArray));

// ---------------------------------------------------------------------------------------------------------------------------------

// Задача5 +
// ЧАСТИНА ПЕРША
// Створіть функцію, яка приймає рядок і повертає кількість голосних, які у ній.
// Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1


// let findVowels = function(str) {
//   let counter = 0;
//   const vowels = ["a", "e", "i", "o", "y"];
//   for (let character of str.toLowerCase()) {
//     if (vowels.includes(character)) {
//       counter = counter + 1;
//     }
//   }
//   return counter;
// }
// console.log(findVowels(prompt("Введіть хоч щось")));



// ЧАСТИНА ДРУГА
// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне  змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
// Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd" removeABC("hello world!") ➞ null


// let removeABC = function(str) {
//   let verifyedStr = '';
//   console.log(verifyedStr);
//   let charToDelete = ['a', 'b', 'c', 'A', 'B', 'C'];
//   for (let character of str) {
//     if (charToDelete.includes(character)) continue;
//     else (verifyedStr.concat(character));}
//     return verifyedStr;
// }
// console.log(removeABC('Test sting ABC happens'));


// ---------------------------------------------------------------------------------------------------------------------------------

// Задача6 +
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів. Приклад:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]


// let uniqueElementsFinder = function (firstArray, secondArray) {
//   uniqueNumbersArray = [];
//   for (let i = 0; i < firstArray.lenght; i++) {
//     if (secondArray.includes([i])) continue;
//     uniqueNumbersArray.push([i]);
//   }

//   for (let i = 0; i < secondArray.lenght; i++) {
//     if (uniqueNumbersArray.includes([i])) continue;
//     uniqueNumbersArray.push([i]);
//   }
//   return uniqueNumbersArray;
// }

// defArray1 = [1, 2, 3];
// defArray2 = [100, 2, 1, 10];
// console.log(uniqueElementsFinder(defArray1, defArray2));

// ---------------------------------------------------------------------------------------------------------------------------------

// Задача7  +
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали значеннями, а значення ключами.
// Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}  вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}


// let exampleObj = {
//   "red": "#FF0000",
//   "green": "#00FF00",
//   "white": "#FFFFFF"
// };

// let exampleobjectKeys = [];
// for (key in exampleObj) {
//   exampleobjectKeys.push(key);
// }

// let exampleObjectValue = [];
// for (key in exampleObj) {
//   exampleObjectValue.push([key]);
// }

// let compileReverse = function (newObject) {
//   let compileReverseObj = {};
//   for (let i = 0; i < exampleobjectKeys.length; i++) {
//     compileReverseObj [exampleObjectValue[i]] = exampleobjectKeys[i];
//   }
//   return compileReverseObj;
// }

// console.log(exampleObj);
// console.log(compileReverse(exampleObj));


// ---------------------------------------------------------------------------------------------------------------------------------


// Задача8 +
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.  Враховуючи вкрадені речі та обмеження страховки,
// поверніть різницю між  загальною вартістю цих речей та межею політики.
// Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Обмеження: Об'єкт завжди повинен містити елементи, сума предметів  завжди повинна бути більшою за страховку.


// let ivanIvanovichStuff = [
//   {name: "bicycle", cost: 3500},
//   {name: "car", cost: 35000},
//   {name: "washingmachine", cost: 700},
//   {name: "watch", cost: 300}
// ];

// let ivanIvanovichStuffInsuranceRate = [
//   {name: "bicycle", cost: 2000},
//   {name: "car", cost: 25000},
//   {name: "washingmachine", cost: 500},
//   {name: "watch", cost: 100}
// ];


// let sumStuffPrice = function (array) {
//   const initialValue = 0;
//   const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.cost,
//   initialValue);
//   return sumWithInitial;
// }

// console.log(sumStuffPrice(ivanIvanovichStuff) - sumStuffPrice(ivanIvanovichStuffInsuranceRate) + " Різниця між тим скільки коштували пожитки Івана Івановича і тим, скільки повернула страховка");




// ---------------------------------------------------------------------------------------------------------------------------------

// Задача9 +
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину  (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з  шириною (w) та висотою (h).
// Приклад:
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Обмеження:
// Цеглу можна повернути будь-якою стороною до отвору.
// Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють  розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює  розміру отвору, не строго менше).
// Цегла не можна класти під неортогональним кутом.



// let doesBrickFit = function (a, b, c, h, w) {
//   console.log(a, b, c, h, w)
//   if ((a <= h && b <= w) || (a <= h && c <= w)|| (b <= h && a <= w)|| (b <= h && c <= w)|| (c <= h && a <= w) || (c <= h && b <= w)) {
//     console.log("Цеглина поміститься в отвір під ортогональним кутом");
//     return true;
//   } else {
//     console.log("Цеглина не поміститься в отвір, для цього дві з трьох сторін повинні бути рівними, або меншими за ширини і висоту отвору");
//     return false
//   ;}
// }

// doesBrickFit (+prompt('Введіть висоту цеглини', 50), +prompt('Введіть ширину цеглини', 100), +prompt('Введіть глибину цеглини', 75), +prompt('Введіть висоту отвору', 50), +prompt('Введіть ширину отвору', 100));





// ---------------------------------------------------------------------------------------------------------------------------------

// Задача10 +
// Дано рядок, що містить повне ім'я файлу (наприклад,  'c:\WebServers\home\testsite\www\myfile.txt').
// Виділіть із цього рядка ім'я  файлу без розширення.

// let fullFileName = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';
// let lastSlashIndex = fullFileName.lastIndexOf('\\');
// console.log(lastSlashIndex);
// let dotIndex = fullFileName.indexOf('.');
// console.log(dotIndex);
// let fileName = fullFileName.slice(lastSlashIndex + 1, dotIndex);
// console.log(fileName);


// ---------------------------------------------------------------------------------------------------------------------------------

// Задача11
// Дано два рядки. Чи можна перший рядок отримати з другим циклічним  зрушенням?
// Kate love JS
// loVe JS Kate
// Love JS Kate


// let originString = 'Kate love JS';
// let inputString = ' love JS Kate';

// function shiftCharPosition(inputString, shiftCount){
//     var returnString = inputString;
//     for(var i = 0; i < shiftCount; i++) {
//         returnString = returnString.substr(returnString.length-1) + returnString.substr(0, returnString.length-1);
//     }
//     return  returnString;
// }

// alert(shiftCharPosition(inputString, prompt('на скільки символів змістити строку?')));


// ---------------------------------------------------------------------------------------------------------------------------------

// Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b  і c наступним чином: вибрати в масиві a два найбільш близькі за
// значенням  елемента, менший з них помістити в масив b, а більший - масив c. Виключити  з розгляду в масиві a ці елементи і продовжити
// вибір з елементів, що  залишилися.


// let arrayOrigin = [4, 6, 2, 8, 9, 1, 25, 78, 13, 11, 64, 52, 72, 86];


// let sortedArrayOrigin = arrayOrigin.sort(function (a, b) {
//     return b - a;
// });

// console.log(sortedArrayOrigin);

// let sortByIncreace = function(array) {
//   let arrayB = [];
//   let arrayC = [];
//   for (let i = 0; i < array.length/2; i++){
//       arrayB.push(array.shift());
//       arrayC.push(array.shift());
//   }
//   return {arrayB, arrayC};
// }

// console.log(sortByIncreace(sortedArrayOrigin));

// ---------------------------------------------------------------------------------------------------------------------------------

// Задача13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати  новий рядок з такими властивостями: а) усі слова у нижньому
// регістрі, крім  першої літери першого слова; б) усі посилання у словах замінюються на  "[посилання заборонено]"; в) всі email
// замінюються на "[контакти  заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,  видаляються.


// // Рішення
// let str = "Привіт, мене звати Антон, приємно познаЙоМитись. Мені не важливо потрібно тобі, або ні, але я залишу тобі номер свого мобільного 300938872353 свій емейл kulibabenko@ukr.net та посилання на мій фейсбук https://www.facebook.com/ , певно- це все, до побачення"
// // Приводимо рядок до нижнього регістру:
// console.log(str);
// let strLowerCase = str.toLowerCase();
// // Змінюємо першу букву на велику
// let firstCharUpper =  strLowerCase[0].toUpperCase() + strLowerCase.substring(1, (strLowerCase.length));

// let regExFinder = function (str) {
//     let regexEmail = /[-0-9!#$%&'*+\/=?^_`{|}~A-Za-z]+(?:\.[-0-9!#$%&'*+\/=?^_`{|}~A-Za-z]+)*@(?:[0-9A-Za-z](?:[-0-9A-Za-z]*[0-9A-Za-z])?\.)+[0-9A-Za-z](?:[-0-9A-Za-z]*[0-9A-Za-z])?/i;
//     let strWithOutEmail = str.replace(regexEmail, "[контакти заборонені]");

//     let regexLinks = /https:\/\/([A-Za-z]+(\.[A-Za-z]+)+)\//i;
//     let strWithoutLinks = strWithOutEmail.replace(regexLinks, "[Посилання заборонені]");

//     let regexPhoneNumber = /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?\+/i;
//     let phoneNumberFinder = strWithoutLinks.replace(regexPhoneNumber, '');

//     return phoneNumberFinder;
// }

// console.log(regExFinder(firstCharUpper));

// // ПС, дуже зрадів, коли вирішиі її )




// ---------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------

// Задача14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,  що відкривають і закривають, тобто можна встановити взаємно однозначну
// відповідність відкривають і закривають дужок, причому відкриває дужка  завжди передує відповідної закриває.


// let str = "Я хочу розповісти вам історію (я не хочу, мене примущують розповісти) про мого викладача. )я шуткую, немає ніякої історії)."

// function useRegex(input) {
//    let correktPattern = /([0-9A-Za-z]+( [0-9A-Za-z]+)+) \([^)]*\)(\s([A-Za-z]+\s)+)[A-Za-z]+/i;
//    let doesnCorrectPattern = /([A-Za-z]+( [A-Za-z]+)+) \)([0-9A-Za-z]+( [0-9A-Za-z]+)+)\) ([A-Za-z]+( [A-Za-z]+)+)/i;;
//    if (input.match(correktPattern)) {
//       alert("Кількістть та порядок круглих дужок у тексті правильна");
//    } else if (input.match(doesnCorrectPattern)) {
//       alert("Кількість та порядок круглих дужок у тексті НЕправильна");
//    }
// }
// console.log(useRegex(str));

// // Трохи не спрацьовує, проте метод і алгоритм правильний
// ---------------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------------

// Задача15 (на заняттях такого не робили, буде гарно, якщо спробуєте��)
// Згенерувати пароль для користувача. Вимоги: довжина від 6 до 20  символів повинен бути рівно один символ підкреслення, хоча б дві великі
// літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.

// Рішення
// Хочу читати лекції, бачив відос на ютьюб зі с[ожими прикладами. Але завтра проект починаємо, а я ще за дом не передивився лекцію...

// ---------------------------------------------------------------------------------------------------------------------------------

// Задача16 +
// В заданому масиві найменший елемент помістити на перше місце,  найменший з тих, що залишилися -
// на останнє місце, наступний - передостаннє  і так далі - до середини масиву.

// let numbers = [1,3,2,5,4,9,7,8,6,10];


// let SortedArray = numbers.sort(function(a, b) {
//     return a - b;
// });

// console.log(SortedArray);


// let getMaxNumber = function(mySortedArray) {
//   const newArray=[];
//   for (i = 0; i < mySortedArray.length; i++) {
//     if (i % 2 === 0)
//     newArray.push(mySortedArray[i]);
//     if (i % 2 !== 0)
//     newArray.unshift(mySortedArray[i]);}
//     return newArray;
// }
// number = getMaxNumber(SortedArray);
// console.log(number + '   Початковий масив, згідно завдання.');

// ---------------------------------------------------------------------------------------------------------------------------------
