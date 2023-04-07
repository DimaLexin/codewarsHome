function areYouPlayingBanjo(name) {
    let name2 = name.split('');
    console.log(name2);
    console.log(name2[0]); 
        if ((name2[0] == "r") || (name2[0] == "R")) 
            {name = name + '  plays banjo';}
            else  
               {name = name + '  does not play banjo';}      
    return name;
};


// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.



function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }

// console.log(camelize('my-short-string'));

function solution(str){
    return str
         .split('')
         .reverse()
}
//  *********************Завершите решение, чтобы оно перевернуло все слова в переданной строке.********************************************///
// Слова разделены ровно одним пробелом, и нет ни начальных, ни конечных пробелов.
// Пример (ввод --> вывод): "The greatest victory is that which requires no battle" -->
//  "battle no requires which that is victory greatest The"

function reverseWords(str){
   
    return str
    .split(' ')
    .reverse()
    .join(" ")
     
  }
//  console.log(reverseWords('The greatest victory is that which requires no battle'));

///***************Завершите функцию/метод, чтобы он возвращал URL-адрес с чем-либо после #удаления привязки ( ).******************* */
//            Примеры
//            "www.codewars.com#about" --> "www.codewars.com"
//            "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// function removeUrlAnchor(url){
//   url.split('');
//   console.log(url);
//   let result = true;
//  while (result) {
//    result = url
//   console.log("sd;lfjsd;lfj;");
//  }
  
//   return url
// }
// removeUrlAnchor("www.codewars.comabout");

// let a = 14;
// console.log(a.toString(16));
// console.log(isNaN(a));
// console.log(isFinite(a));
// let b = 3.4897;
// console.log(typeof(+b.toFixed(2)));
// console.log(parseInt("100px"));
// console.log(parseFloat("100.5px"));
// let str  = 'Слово в \'кавычках\', слешь \\ и символ в юникоде \u23F1';
// console.log(str);
// console.log(str.codePointAt(0));
// console.log(str.indexOf('c'));
// console.log(str.slice(10));
// console.log(str.substr(10,3));
// console.log(str.toLocaleLowerCase());
// console.log(str.trim());

// let str1  = 'Переходите на мой лучший сайт http:www.govno.ru - не пожалеете';
// let str2  = ' Спасибо за информацию';
// function isHaveLink (str) {
//   let reg = /https?:\/\/.+?\.[a-z]{2,}\s/im;
//   return str.match(reg);
// }
// if (isHaveLink(str1)) {
//   console.log(str1);
//   console.log('Найдена ссылка в строке');
// }
// if (isHaveLink(str2)) {
//   console.log(str2);
//   console.log('Найдена ссылка в строке');
// }

// let money = 'У мня в кармане 150 руб и 200 рублей на карте';
// let reg = /\d+/g;
// let matches = money.match(reg);
// console.log(matches);
// money.replace(reg, 'N');

  // Завершите функцию/метод, чтобы он возвращал URL-адрес с чем-либо после #удаления привязки ( ).

  // Примеры
  // "www.codewars.com#about" --> "www.codewars.com"
  // "www.codewars.com?page=1" -->"www.codewars.com?page=1"
  
  // function removeUrlAnchor(url){
  //   // TODO: complete
  //   let indexDelete = url.indexOf('#');
  //   console.log (indexDelete); 
  //   while (indexDelete) {
  //     url.splice(indexDelete,1);
  //     indexDelete = url.indexOf('#');
  //   }

  //   return console.log (url); 

  //   //return console.log (url.splice(indexDelete,1)); 
  // }
  // removeUrlAnchor('www.codewars.comabout');


//   let ExampleArray = [1,2,3,1,'5', null, false, NaN,3];

// console.log("Позиция единицы", ExampleArray.indexOf(1) );
// console.log("Позиция следующей единицы", ExampleArray.indexOf(1,2) );
// console.log("Позиция тройки", ExampleArray.indexOf(3) );
// console.log("Позиция тройки, если starting index отрицательный", ExampleArray.indexOf(3,-2) );
// console.log("Позиция false", ExampleArray.indexOf(false) );
// console.log("Позиция 5", ExampleArray.indexOf("5") ); 
// console.log("Позиция NaN", ExampleArray.indexOf(NaN));

// let ExampleArray = [1, 55, 23, 89, 99, -1];
// let answer = ExampleArray.find(elem => elem >= 56);

// console.log(answer);

// let ExampleArray = [1, 55, 23, 89, 99, -1];
// let answer = ExampleArray.filter(elem=> elem >=55);
// console.log(answer);
// console.log(ExampleArray);




// function findElem (url) {
//   return url
//     .split('')
//     .filter(elem => elem!=='#')
//     .join('')
// }

// console.log (findElem ('www.c#odew##ars.com#about')) ;


// function findElem (url) {
//   if (url.indexOf('#')== -1) return url
//   return url
//     .split('')
//     .slice(0, url.indexOf('#'))
//     .join('')
// }

// console.log (findElem ('www.codewars.com/katas')) ;

// function removeUrlAnchor(url){
//   // TODO: complete
//   return url.replace(/#.*/gi,"");
// }

// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }

// let m = new Mat ();
// m.set ('name', 'Alex');
// m.set ('age', 25);
// m.set ('singal', true);

// console.log(m);

arr =   [[1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15,33], 
        [16, 17, 18, 19, 20], 
        [21, 22, 23, 24, 25]] 

// snail([  [1, 2, 3, 4, 5],
        //  [6, 7, 8, 9, 10],
        //  [11, 12, 13, 14, 15], 
        //  [16, 17, 18, 19, 20], 
        //  [21, 22, 23, 24, 25]]), 

//          [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);


// **** Улитка Учитывая n x nмассив, вернуть элементы массива, расположенные от самых внешних элементов
//  до среднего элемента, перемещаясь по часовой стрелке. ****

// snail = function(array) {

//   console.log(array);
//   console.log('разрезанный массив');
//   // console.log(array[2].length);
//   let dinamArray = array.splice(1);
//   console.log(dinamArray);
 
// }
// snail(arr);

class Point {
  constructor (x,y) {
    this.x = x;
    this.y = y;
  }
}

class Curcle {
  constructor (p,r) {
    this.p = p;
    this.r = r;
    this.colors = ['red', 'green', 'blue'];
  }
}
let p = new Point (5,10);
let c = new Curcle (p,20);
let json = JSON.stringify(c);
// console.log(json);
let obj = JSON.parse(json);
// console.log(obj);

///***Ваша задача — вернуть число из строки. ***
//Вам будет дана строка из перепутанных цифр и букв,
// вы должны вернуть все числа в этой строке в том порядке, в котором они встречаются.


var filterString = function(value) {
    let res = value.split('').filter(elem => {
      if (isNaN(parseFloat(elem))==false) {
          return true;
      }
    });
    // return Number(res.join(''));
}

function searchNames( logins ){
  return logins.filter(a=>a[0].endsWith('_'));
}

function searchNames( logins ){
  return logins.filter(function (login) { return login[0].slice(-1) === '_' });
}
// console.log(filterString ("aa1bb2cc3dd"));
// console.log(filterString);

//  ******* Задача ****
//При разработке веб-сайта вы обнаруживаете, что некоторые участники имеют проблемы со входом в систему. Просматривая код, вы обнаружите, что все входы, оканчивающиеся на «_», создают проблемы. Итак, вы хотите написать функцию, которая берет массив пар имен входа и адресов электронной почты и выводит
// массив всех пар имен входа и адресов электронной почты из имен входа, оканчивающихся на "_".

function searchNames(logins){

  let rr = (logins.toString()).split('');
  console.log(rr);

  let breakLog = logins.filter((elem,index,arr)=>{

    // if (HTMLPreElement)

  });
}

function searchNames(logins){
  let breakLog = logins.filter((elem,index,arr)=>{

    if ((elem[0][elem[0].length - 1]) == '_')
    return true;
  });

  return breakLog;
}
// console.log(searchNames ([ [ "foo", "foo@foo.com" ], [ "ййййbar_", "bar@bar.com" ] ]));

// alert( null || 2 && 3 || 4 );

//**Учитывая различное количество целочисленных аргументов, вернуть цифры, которых нет ни в одном из них. */

function unusedDigits(Arr) {
  let digitArr = [0,1,2,3,4,5,6,7,8,9]
  inputArr = Arr.toString().replace(/,/g,'').split('');
    inputArr = inputArr.map(item => item = Number(item));
      digitArr = digitArr.filter((elem) => { 
        if (!(inputArr.includes(elem))) return true;});
  return digitArr.sort().toString().replace(/,/g,'');
  
};
///console.log (unusedDigits ([034, 56, 789] ));


//***Учитывая строку, состоящую из цифр [0-9], вернуть строку, 
//в которой каждая цифра повторяется количество раз, равное ее значению. 
//explode("312")   "333122"*/

function explode(s) {
    let output = [];
    s = s.split('');
    s = s.map((elem,index) => {
      // console.log(Number(elem));
        for (let step = 0;  step < (Number(elem));  step++) {
          output.push(elem);

        };
    });
  return output.join('');
};
// console.log(explode("312"));  

const numbers = [0,1,2,3,4,5];

numbers.sort((a,b)=> { 

  if (a>b) return -1; 
   if (a===b) return 0; 
    if (a<b) return 1;  });

    
// console.log(numbers);

//**оздайте функцию, которая принимает целое число в качестве аргумента 
//  и возвращает значение "Even"для четных или "Odd"нечетных чисел.

function evenOrOdd(number) {
  return number%2==0 ? 'Even' : 'Odd'
}
// console.log(evenOrOdd(9));

// function flowerArr (arr) {
//   console.log(arr);
//      arr = arr.reduce((acc,elem)=> acc+elem
//       , 0);
// }

// console.log(flowerArr([1,5,3]));

// let arr1 = [1, 5, 3];
// let result = arr1.reduce((sum, current) => sum + Math.pow(current,3), 0);
// console.log(arr1);

// function narcissistic(value) {
//   return value.reduce((accum, current, index,_arr)=>accum + Math.pow(current,_arr.length),0) == value.join('') ? console.log(value.join(''),",True") : console.log (value.join(''),",False")
// }

function narcissistic(value) {
  return ((String(value)).split('')).map(elem =>Number(elem)).reduce((accum, current, index,_arr)=>accum + Math.pow(current,_arr.length),0) === value;
}

// function narcissistic(value) {
//   const digits = value.toString().split(''); // преобразуем число в массив цифр
//   const n = digits.length; // находим количество цифр
//   const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, n), 0); // суммируем цифры, возведенные в n-ю степень
//   return sum === value; // возвращаем true, если сумма равна исходному числу, иначе false
// }
// console.log(narcissistic(153));



// //*****Meerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
//     assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
//     assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
//     assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]); ****///


function fixTheMeerkat(arr) {
  //your code here 
  return arr.reverse();
 }
// console.log(["tails", "body", "heads"]);


///***Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. 
// Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения! */
//  ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  return (words.join(' '))
};
/// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

///Примеры:  Вход: 42145 Выход:54421   Вход: 145263 Выход:654321  Вход: 123456789 Выход:987654321

function descendingOrder(n){
  console.log(String(n))
  return   Number(((((n.toString()).split('')).map(elem =>Number(elem))).sort((a,b) => b-a)).join(''))

}
// console.log(typeof(descendingOrder(42145)));

//  Возвращает количество (количество) гласных в заданной строке.
//Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).
//Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
  const yap = (str.split('')).filter(elem => {
    if (elem == 'a' ||  elem == 'e' ||  elem === 'i' || elem === 'o')
    return elem;
  })
  return yap.length 
}
// console.log(getCount('o a kak ushakov lil vo kashu kakao'));

///Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на заданный делитель. 
//Первый аргумент — это массив numbers, а второй — divisor.
// Пример (Ввод1, Ввод2 --> Выход)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
function divisibleBy(numbers, divisor){
  return numbers = numbers.filter(elem => elem%divisor===0)
}

//console.log(divisibleBy([1, 2, 3, 4, 5, 6],2))

//Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).
//Правильный ответ будет 17.
// Подсказка: не забудьте проверить наличие неправильных значений, таких как null/undefined

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(elem=>elem===true).length;
}
// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]));

// Что, если нам нужно, чтобы длина слов, разделенных пробелом, была добавлена ​​в конце того же слова
// и возвращена в виде массива?
// Пример (ввод --> вывод)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова,
// добавленного к каждому элементу.
// Примечание. Строка будет содержать как минимум один элемент; слова всегда будут разделены пробелом.

// function addLength(str) {
//    console.log(str.split(' '));
//     str = (str.split(' ')).reduce((accum, elem)=> accum + elem + ' '+ (elem.split('')).length + ',',"")
//    return (str.split(',')).slice(0,-1)
//   }

  // function addLength(str) {
  //   str = str.split(' ').map(elem => elem + ' '+elem.length)
  //   return str
  // }
 
 
 function addLength(str) {
  str = str.split(' ').map(elem => {
  console.log(`${elem} ${elem.length}`)
  })
  return str
}

// console.log(addLength("you will win"));

//ОПИСАНИЕ:
// Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список,
// содержащий те же элементы, но с удаленными «гусями».
// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// Например, если этот массив был передан в качестве аргумента:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Ваша функция вернет следующий массив:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном
//  вашей функции, хотя и с удаленными «гусями». Обратите внимание, что все строки будут в том же регистре, 
//  что и предоставленные, а некоторые элементы могут повторяться.

// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   let str = birds.join(',');
//   geese.forEach(gees => str = str.replaceAll(gees+',',''))
//   return str.split(',');
// };
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  birds = birds.filter(bird =>!geese.includes(bird))
  return birds;
};

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))


// var stroka = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish", "African"];
// var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// console.log(stroka.join(','))
// let rte = (stroka.join(',')).replaceAll(geese[0], " ")
//  console.log(rte)

// //**ОПИСАНИЕ:
// / Результаты матчей нашей команды записываются в виде набора строк. Каждый матч представлен
// строкой в ​​формате "x:y", где x— счет нашей команды, а y— счет наших противников.
// Например: ["3:1", "2:2", "0:1", ...]
// Очки за каждый матч начисляются следующим образом:
// если x > y: 3 очка (победа)
// если x < y: 0 очков (проигрыш)
// если x = y: 1 балл (ничья)
// Нам нужно написать функцию, которая берет этот набор и возвращает количество очков, 
// которое наша команда ( x) набрала в чемпионате по приведенным выше правилам.
// Примечания:
// наша команда всегда играет 10 матчей в чемпионате
// 0 <= х <= 4
// 0 <= у <= 4 */

function points(games) {
  const gamePoints = games.reduce((summ, current) =>{
    let curElem = current.split(':')
    return summ+= (curElem[0] > curElem[1]) ? 3:(curElem[0] === curElem[1])?1:0;
  },0)
  return gamePoints
}
//console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]));

//Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
// Примеры (ввод -> вывод):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Удачи!

// function doubleChar(str) {
//   return (str.split('').reduce((doublesumm, current)=>doublesumm + current.repeat(2),''))
// }
function doubleChar(str) {
  let outputStr='';
  for (let i=0; i < str.length; i++) {
      outputStr += str[i].repeat(2)
  }
  return outputStr
}
// console.log(doubleChar("Hello World"))

function updateLight(current) { 
  return (current ==="red") ? "green": (current ==="yellow") ? "red": "yellow"
}
//console.log(updateLight("green"))

function monkeyCount(n) {
  let numberMonk =[];
  while (n>0) {
    numberMonk.unshift(n)
    n--
  }
  return numberMonk
}
//console.log(monkeyCount(5))

/* возвращает результирующую строку.

Примеры:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"//
 */

function noSpace(x){
  return x.replaceAll(' ','')
}
// console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"))

/* Формат
Телефонные номера хранятся в виде строк и состоят из 11 цифр, например '02078834982', всегда должны начинаться с 0.

Однако произошло нечто странное, и теперь все телефонные номера содержат множество случайных символов,
 пробелов, а некоторые вообще не являются телефонными номерами!

Например, '02078834982'как-то стало 'efRFS:)0207ERGQREG88349F82!'и есть еще много строк, 
которые нам нужно проверить.

Задание
Учитывая строку, вы должны решить, содержит ли она действительный номер телефона. 
Если это так, верните исправленный
 номер телефона в виде строки, т.е. '02078834982'без пробелов или специальных символов, иначе верните
  "Not a phone number".
 */

  function isItANum(str) {
    const regex = /^[0-9]+$/;
    const cleanedStr = str.replace(/[^0-9]/g, '');
  
    if (regex.test(cleanedStr) && cleanedStr.length === 11 && cleanedStr.startsWith('0')) {
      return cleanedStr;
    } else {
      return "Not a phone number";
    }
  }
  //console.log(isItANum("020788349(((82()"));

/*   ОПИСАНИЕ:
Напишите функцию, которая принимает строку скобок и определяет, допустим ли порядок скобок. 
Функция должна возвращать значение true, если строка действительна и falseнедействительна.

Примеры
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */


// function validParentheses(parenStr) {
  
//   return (parenStr[0]===')') ? false: ((parenStr.replaceAll('(','1,')).replaceAll(')','-1,').slice(0,-1).split(',').reduce ((accum,current) => accum+Number(current),0) === 0) ? true : false
// }

function validParentheses(parenStr) {

parenStr = parenStr.split('')
console.log(parenStr)
parenStr = parenStr.map((elem,index) => {
    if (elem==='(') {
      parenStr.slice(parenStr.indexOf(')'),1)
      console.log(parenStr)
      parenStr.shift()
      console.log(parenStr)
    }
   
  })
  return 
}
//console.log(validParentheses("())(()")) */

/* ИИ заразил текст персонажем!!

Этот текст теперь полностью изменен на этот символ.

Если текст или символ пусты, вернуть пустую строку.
Никогда не будет случая, когда оба пусты, так как ничего не происходит!!

Примечание. Символ представляет собой строку длиной 1 или пустую строку.

Пример
text before = "abc"
character   = "z"
text after  = "zzz" */


function contamination(text, char){
    if ((text !=='') || (char !=='')) {
      n = text.length
      text =''
      text = char.repeat(n)  
    }   
    else    text =''
return text
}
//console.log(contamination("abc","z"))

/* ОПИСАНИЕ:
Напишите функцию, которая принимает целое число nи строку sв качестве параметров и возвращает строку,
 sповторяющуюся ровно столько nраз.
Примеры (ввод -> вывод)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

function repeatStr (n, s) {
  return s.repeat(n);
}
//console.log(repeatStr(5, "Hello"))

/* Ваша задача - создать разменную машину.

Автомат принимает определенный диапазон монет и банкнот, возвращает сдачу монетами 20 и 10 пенсов
в минимальном количестве штук. Например, 50 пенсов вернут две части по 20 пенсов и одну 10 пенсов. 

Машина всегда будет пытаться вернуть сдачу, например, если вы введете 20 пенсов, она вернет «10 пенсов 10 пенсов».
Автомат принимает следующие монеты и банкноты: 5 фунтов стерлингов, 2 фунта стерлингов, 1 фунт стерлингов,
50 пенсов, 20 пенсов. Любые монеты и купюры, не принятые автоматом, будут возвращены. 

Если бы вы, например, положили банкноту в 20 фунтов стерлингов в автомат, она была бы вам возвращена,
а не разобрана на сдачу.
Эта разменная машина запрограммирована на прием и выдачу строк, а не чисел. 
Изменение будет возвращено как одна строка с изменением, разделенным одиночными пробелами и без запятых. 
Значения строки будут убывающими. */

function changeMe(moneyIn){ 
 // console.log(moneyIn)
  switch (moneyIn) {
    case '£5': {moneyIn = '20p '.repeat(25);
                //console.log(moneyIn.slice(0,-1))
                return moneyIn.slice(0,-1)
    }
    break;
    case '£2': {moneyIn = '20p '.repeat(10);
               //console.log(moneyIn.slice(0,-1))
               return moneyIn.slice(0,-1)
    } 
    break;
    case '£1': {moneyIn = '20p '.repeat(5);
               //console.log(moneyIn.slice(0,-1))
               return moneyIn.slice(0,-1)
    } 
    break;
    case '50p': {moneyIn = '20p '.repeat(2) + '10p';
                //console.log(moneyIn)
                return moneyIn
    } 
    break;
    case '20p': {moneyIn = '10p '.repeat(2);
                //console.log(moneyIn.slice(0,-1))
                return moneyIn.slice(0,-1)
    } 
    break;
    default: return moneyIn
  }

}
console.log(changeMe('20p'))