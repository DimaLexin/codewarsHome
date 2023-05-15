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

function reverseWords1(str){
   
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

/* numbers.sort((a,b)=> { 

  if (a>b) return -1; 
   if (a===b) return 0; 
    if (a<b) return 1;  }); */

    
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
/* function divisibleBy(numbers, divisor){
  return numbers = numbers.filter(elem => elem%divisor===0)
}
 */
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
///console.log(changeMe('20p'))

/* Таким образом легко соединить две строки вместе string1 + string2.
Другой способ получить желаемый результат - этоstring1.concat(string2)
ES6 представил еще один способ соединения строк. Ваша задача — выяснить, что это такое, 
и написать функцию, которая будет складывать две строки вместе, между двумя строками должен быть пробел.
+, .concat()& .join()нельзя использовать в этом упражнении. Я также удалил некоторые другие методы,
которые можно использовать для обмана!
Если один из аргументов является числом, ваш код должен преобразовать его в строку. */

function joinStrings(string1, string2){
  return `${string1} ${string2}`
}
//console.log(joinStrings(134, 234))

/* Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
Если вхождений не найдено, должно быть возвращено число 0.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0 */

function strCount(str, letter){  
   return str = str.split(letter).length-1
}
//console.log(strCount("Hello", 'l'))

//Создайте функцию, вызываемую shortcutдля удаления строчных гласных ( a, e, i, o, u) 
/* //в заданной строке. 
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO" */

function shortcut (string) {
  console.log(Array.from(string))
  return (Array.from(string).filter(elem => (elem!=='a') && (elem!=='e') && (elem!=='i') && (elem!=='o')&&(elem!=='u'))).join('');
}
//console.log(shortcut("codewars"))

//Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные
//знаки из заданной строки.
function removeExclamationMarks(s) {
  return ((s.split('!')).join(''))
}
//console.log(removeExclamationMarks("Hello World!"))

/*   ОПИСАНИЕ:
Напишите функцию, которая принимает строку скобок и определяет, допустим ли порядок скобок. 
Функция должна возвращать значение true, если строка действительна и falseнедействительна.
Примеры
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */

function validParentheses(parenStr) {
  return ((parenStr.replaceAll('(','1,')).replaceAll(')','-1,').slice(0,-1).split(',').reduce ((accum,current) => {    
    if (accum >= 0) return  accum+Number(current)   
   },0) === 0) ? true : false
}
  //console.log(validParentheses(")("))

  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "");
  }
  //console.log(disemvowel("This website is for losers LoL!"))

/* Дана строка s. Вы должны вернуть другую строку, чтобы символы s
с четным и нечетным индексом были сгруппированы, а группы разделены пробелами (см. Пример ниже)
Примечание:
0 считается четным индексом.
Все входные строки действительны без пробелов */

function sortMyString(S) {
  let str1=''
  let str2=''
  for (let i=0; i<S.length; i++){
    (i%2!==0) ? str2 += S[i] : str1 += S[i]
  }
  return `${str1} ${str2}`;
}
//console.log(sortMyString("YCOLUE'VREER"))

const str = 'YCOLUE  VllEER';
const newStr = str.replaceAll('l', 'L');
//console.log(newStr);

/* Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной карты, номер телефона или ответ
на ваш самый секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите,
чтобы это отображалось на вашем экране. Вместо этого мы маскируем его.
Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'. */


const maskify = cc => {
  return (cc.length > 4) ?  cc = cc.substr(cc.length-4,4).padStart(cc.length,'#') : cc
}
//console.log(maskify("1"));

/* Учитывая смешанный массив числовых и строковых представлений целых чисел, сложите нестроковые целые числа 
и вычтите сумму строковых целых чисел.
Возврат как число. */

const divCon = (x)=> {
  return x.reduce((accum, current) => (typeof(current) === 'number') ? accum+=current : accum-=current, 0)
}
///console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));

/* Задача
Напишите функцию, которая принимает fightстроку, состоящую только из строчных букв, и возвращает, кто победил в битве. Когда побеждает левая сторона, возвращаются Left side wins!, когда выигрывает правая сторона, возвращаются Right side wins!, в остальных случаях возвращаются Let's fight again!.
Левые боковые буквы и их сила:
 w - 4
 p - 3
 b - 2
 s - 1
Правые боковые буквы и их сила:
 m - 4
 q - 3
 d - 2
 z - 1
Остальные письма не имеют силы и являются только жертвами.
Пример
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins! */

// const alphabetWar = (fight) => {
//   const valueArr = [['s', 'b', 'p', 'w'], ['z', 'd', 'q', 'm']];
//   let result = Array.from(fight).reduce((accum, elem) =>{
//     if (valueArr.findIndex(numArr =>numArr.includes(elem))) return accum+= ((valueArr[valueArr.findIndex(numArr =>numArr.includes(elem))]).indexOf(elem))+1
//     else if (valueArr.findIndex(numArr =>numArr.includes(elem))< 0) return accum+=0
//     else  return accum-= (valueArr[valueArr.findIndex(numArr =>numArr.includes(elem))].indexOf(elem))+1},0)
//    return (result > 0) ? "Right side wins!" :(result < 0) ? "Left side wins!" : "Let's fight again!"
// }

// const alphabetWar2 = (fight) => {
//   const valueArr = [['s', 'b', 'p', 'w'], ['z', 'd', 'q', 'm']];
//   let result = Array.from(fight).reduce((accum, elem) => {
//     if (valueArr.findIndex(numArr =>numArr.includes(elem)) < 0) {
//       return accum+=0;
//     }
//       else if (valueArr.findIndex(numArr =>numArr.includes(elem)) > 0) {
//       return  accum+= ((valueArr[valueArr.findIndex(numArr =>numArr.includes(elem))]).indexOf(elem))+1 
//     } else {
//       return accum-= ((valueArr[valueArr.findIndex(numArr =>numArr.includes(elem))]).indexOf(elem))+1 
//     }
//   }, 0);
//   return (result > 0) ? "Right side wins!" :(result < 0) ? "Left side wins!" : "Let's fight again!"
// }
// console.log(alphabetWar("zwpjwsbkpwttzbopxa"));

const alphabetWar = (fight) => {
  const valueArr = [['s', 'b', 'p', 'w'], ['z', 'd', 'q', 'm']];
  let result = Array.from(fight).reduce((accum, elem) =>
    (valueArr.findIndex(numArr =>numArr.includes(elem)) < 0) ? accum+=0 :
    (valueArr.findIndex(numArr =>numArr.includes(elem)) > 0) ? accum+= ((valueArr[valueArr.findIndex(numArr =>numArr.includes(elem))]).indexOf(elem))+1 
    :accum-= ((valueArr[valueArr.findIndex(numArr =>numArr.includes(elem))]).indexOf(elem))+1 ,0);
  return (result > 0) ? "Right side wins!" :(result < 0) ? "Left side wins!" : "Let's fight again!"
}
//console.log(alphabetWar("zwpjwsbkpwttzbopxa"));

/* Завершите решение так, чтобы оно возвращало true, если первый переданный 
аргумент (строка) заканчивается вторым аргументом (тоже строкой).
Примеры:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */


/* const  solution = (str, ending) =>{
return str.endsWith(ending)
} */
//console.log(solution('abcde', 'cde'));

/* Учитывая строку слов (x), вам нужно вернуть массив слов, отсортированных в алфавитном порядке
по последнему символу в каждом.
Если два слова имеют одинаковую последнюю букву, возвращаемый ими массив должен отображать их в том порядке, 
в котором они появились в данной строке.
Все входы будут действительными. */

const last1 =(x) => x.split(' ').sort((a,b) => a.slice(-1) > b.slice(-1))

const last2 = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))

const last =(x) => {
  return x.split(' ').sort((a,b)=> (a.split('').slice(-1) >b.split('').slice(-1) ? 1:
                                   (a.split('').slice(-1) < b.split('').slice(-1) ) ? -1: 0)) }

// console.log(last1('man i need a taxi up to ubud'));
// console.log(last2('man i need a taxi up to ubud'));

/* Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
Пример: (Ввод --> Вывод)
"Дерматоглифика" --> истина "аба" --> ложь 
"moOse" --> ложь (игнорировать регистр букв) */

const isIsogram = (str) => !str || /^(?!.*(.).*\1)[a-z]+$/i.test(str)
 
//console.log(isIsogram(""))

// ОПИСАНИЕ:
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. 
// Все пробелы в строке должны быть сохранены.
// Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


const reverseWords = (str) =>str.split(' ').map(elem => Array.from(elem).reverse().join('')).join(' ')
 


//console.log(reverseWords("This is an example!"))

/* Ваша задача состоит в том, чтобы вернуть выходную строку, которая преобразует входную строку, s 
заменив каждый символ s числом, представляющим количество раз, в котором этот символ встречается, 
s и разделив каждое число символом sep(символами).

Пример (s, sep --> Вывод)
"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1" */



// function freqSeq(str, sep) {
//   console.log(Array.from(str))
//   let counter;
//   let erw = Array.from(str).map((elem,index,_arr) => {
//     console.log('повторение след  '+_arr.indexOf(elem,index+1))
//     if (_arr.indexOf(elem,index+1) < 0)  {
//       console.log(elem + ' не повторяется больше')
//       elem = 1
//       return elem
//     }
//     else {
//       // console.log(elem + ' повторяется')
//       // counter = 1
//       // _arr.indexOf(elem,index+1)
//       // while (index) {
//       //   console.log(elem + ' мы тут')
        
//       // } 
//       return elem
//     }
//   })
// }
/* function freqSeq(str, sep) {
  console.log(Array.from(str))
  Array.from(str).forEach ((elem) => {
      let dublic = Array.from(str).reduce((acc,current,index)=> {
        console.log('эталон  '+elem +'  текущий сравниваемвый  '+ current)
        console.log('его  '+ index)
        console.log('значение аккум   '+acc)
      }, [])
      console.log('результат' + dublic)
  })

} */
/* Ваша задача состоит в том, чтобы вернуть выходную строку, которая преобразует входную строку, s 
заменив каждый символ s числом, представляющим количество раз, в котором этот символ встречается, 
s и разделив каждое число символом sep(символами).

Пример (s, sep --> Вывод)
"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1" */



/* function freqSeq(str, sep) {
    let dublicatIndex;
    console.log(Array.from(str))
      for (let i = 0; i < str.length; i++)  {
           dublicatIndex = []
           let dublicatLetters = Array.from(str).filter((elem,index) =>{
            // console.log('результат  '+ typeof(str))
            // if ((elem === str[i])) 
            if ((elem === str[i]) && (isNaN(str[i]) || str[i] === ' '))
              dublicatIndex.push(index)
              return true
            })
            console.log(dublicatIndex)


                for (let step = 0; step < dublicatIndex.length; step++) {
                  str = str.replaceAll(str[dublicatIndex[step]], dublicatIndex.length)
                }  
                //console.log('результат строки  '+ str)    
      }
return str.replaceAll('',sep).slice(1,-1)
} */

/* function freqSeq(str, sep) {
  const freq = [];
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    freq.push(count);
  }
  return freq.join(sep);
} */

/* function freqSeq(str, sep) {
  return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
} */

function freqSeq(str, sep) {
  return str.split('').map((v, i, arr) => {
      if (v=== '9') return v=5
  })

}

//console.log(freqSeq('919','x'))

/* Обычно у нас есть имя, отчество и фамилия, но в имени может быть более одного слова, например, в южно-индийском.
Подобно этим типам имен, нам нужно инициализировать имена.
См. образец ниже:
initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Завершите функциональные инициалы.Имена во входных данных разделяются ровно одним пробелом
без начальных и конечных пробелов. Имена всегда будут строчными, за исключением, возможно, их первой буквы. */


const initials = (n) => {
  console.log(n.trim().toUpperCase().split(' '))
return n.trim().toUpperCase().split(' ').map((elem,index) => 
{
  if (index != n.trim().split(' ').length-1) {
    console.log(elem.split('')[0])
    elem = elem.split('')[0]
    return elem
  }else {
    console.log(elem.split(''))
    elem = elem.toLowerCase().split('').map((current, ind) => {
        if (ind===0) return current.toUpperCase()
        else return current
    }).join('')

    return elem
  }
   

}).join('.')
}

// console.log(initials('Barack Hussain obama'))

/* Возьмите строку и верните хеш со всеми значениями ascii символов в строке. 
Возвращает nil, если строка пуста. Ключ — это символ, а значение — это значение символа в формате ascii. 
Повторяющиеся символы следует игнорировать, а также неалфавитные символы.  {"A":65, "B":66, "a":97} */



const charToAscii = (string) => {
  if (string !="") {
   // console.log('нас не наебали')
   // console.log(string.replace(/(.)\1+/g, '$1').replace(/[^a-zA-Z]/g, '').replace(/(.)(.*)/, (_, c1, c2) => c1 + c2.replace(/ /g,'')))
    string =string.replace(/(.)\1+/g, '$1').replace(/[^a-zA-Z]/g, '').replace(/(.)(.*)/, (_, c1, c2) => c1 + c2.replace(/ /g,''))
    string = string.split('').map(elem => {
      elem = elem+ ':'+elem.codePointAt(0)
      console.log(elem)
      return elem
    })
    //console.log(string)
    return string
  }
  else {
    //console.log('нас наебали')
    return string= null;
  }
    // string.replaceAll( /(.)\1/g,'')
  // console.log( string.replace(/(.)\1+/g, '$1'))
}

//console.log(charToAscii("a"))

let point = {}
point = {
  x: 10,
  y: 20,
'two words': true,
p : {
  err : 99,
  temp: 777}
}

/* console.log(point)
console.log(point.x)
console.log(point['x'])
console.log(point['two words'])
console.log(point.p.err)
 */
point.x = 15
//console.log(point.x)

point.z = 9
//console.log(point)

for (let field in point) {
  //console.log(`Поле ${field} равно  ${point[field]}`)
  // console.log(field)
  // console.log(point[field])
}

let person = {
  name: 'Dima',
  'second name': 'Ivanov'
}

let born = {
  date: 22.05,
  year: 1990,
}
let person2 = {}

for (let key in person) {
  person2[key] = person[key]
}
//console.log(person2)
//Object.assign()

/* Вам даны два массива a1и a2строки. Каждая строка состоит из букв от aдо z. 
Пусть x будет любая строка в первом массиве и y будет любой строкой во втором массиве.
Find max(abs(length(x) − length(y)))
Если a1и/или a2пусты, вернитесь -1  на каждом языке, кроме Haskell (F#), где вы вернетесь Nothing(Нет).
Пример:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Примечание Баша:
ввод: 2 строки с подстроками, разделенными,
вывод: число в виде строки */



const mxdiflg = (a1, a2) =>{
  if (a1=='' ||a2 =='') return -1 
  else {
      a1 = a1.sort((a,b)=>a.length-b.length)
      a2 = a2.sort((a,b)=>a.length-b.length)
          if ((a1[a1.length-1].length - a2[0].length) > (a2[a2.length-1].length - a1[0].length))
          return (a1[a1.length-1].length - a2[0].length)
          else return (a2[a2.length-1].length - a1[0].length)
  }
}
//console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))

/* Упорядочить людей по возрасту с помощью функции стрелки
Сортируйте и упорядочивайте людей по возрасту с помощью стрелочных функций
Задача
Ваша задача состоит в том, чтобы упорядочить список, содержащий объекты людей по возрасту, 
используя новые стрелочные функции Javascript.
Вход
Входными данными будет допустимый массив с объектами People, содержащими Age и Name.
Выход
Вывод будет действительным отсортированным массивом с объектами People, отсортированными 
по возрасту в порядке возрастания. */

var OrderPeople = function(people){
  return people.sort((a,b) =>a.age - b.age); //complete this function
}

// console.log(OrderPeople([ 
// { age: 83, name: 'joel' },
// { age: 46, name: 'roger' },
// { age: 99, name: 'vinny' },
// { age: 26, name: 'don' },
// { age: 74, name: 'brendan' } 
// ]))



/* Ваша задача — удалить из строки все повторяющиеся слова, оставив только одиночные (первые) слова.
Пример:
Вход:
«альфа-бета-бета-гамма-гамма-дельта альфа-бета-бета-гамма-гамма-дельта»
Выход:
«альфа-бета-гамма-дельта» */
 


const removeDuplicateWords = function(s) {
  let _arr =s.split(' ')
    return  _arr.filter((elem,index) => index === _arr.indexOf(elem)).join(' ')
}

//console.log(removeDuplicateWords("hYjElphXgv hYjElphXgv OQwvUoafl rVzbmNKh OQwvUoafl YIgOtAwf OaRw NnQxn hYjElphXgv XCHDVlCMv XCHDVlCMv hYjElphXgv OaRw jMAjFMH rVzbmNKh YIgOtAwf OaRw OaRw OaRw fJYEe fJYEe YIgOtAwf hYjElphXgv hYjElphXgv rVzbmNKh EVRUmXTDZi XCHDVlCMv OQwvUoafl dvsf OQwvUoafl YVMfntK hYjElphXgv OaRw dvsf OaRw YIgOtAwf zqfEBr fJYEe EVRUmXTDZi dvsf hYjElphXgv MxjpWz OaRw OaRw rVzbmNKh hYjElphXgv YIgOtAwf OQwvUoafl EVRUmXTDZi fJYEe jMAjFMH fJYEe EVRUmXTDZi YIgOtAwf EVRUmXTDZi jMAjFMH EVRUmXTDZi zqfEBr OQwvUoafl dvsf NnQxn OQwvUoafl"))

//var websites = ['codewars']
// websites = 'codewars '.repeat(10).split(' ').slice(0,-1)
websites = new Array(10)
//console.log(websites )

const squareFunc =(a) => Math.pow(a,2)
//console.log(squareFunc(5) )

/* Каждое животное приносит одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться теми же
буквами, что и имя животного. Например, большая голубая цапля приносит чесночный наан,
а синица приносит шоколадный торт.
Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов 
и возвращает true или false, чтобы указать, разрешено ли животному принести блюдо на пир.
Предположим, что beast и dish  всегда строчные строки, 
и каждая из них состоит как минимум из двух букв. 
beast и dish может содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки. 
Они не будут содержать цифр. */


/// "1 sheep...2 sheep..."

function feast(beast, dish) {
return (beast[0]===dish[0]) && (beast[beast.length-1]===dish[dish.length-1]) ? true : false
}

//console.log(feast("great blue heron", "garlic naan"))

var countSheep = function (num){
  let str='';
  for (let  count = 1 ; count <= num; count ++)
  str+=`${count} sheep...`
  return str
}
//console.log(countSheep(0))

var cubeChecker = function(volume, side){
  console.log (Math.pow(side,3))
  //return (side > 0) && (Math.pow(side,3) === volume) ? true : false
  return (side <= 0) || (Math.pow(side,3) !== volume) ? false  : true
};
//console.log(cubeChecker(56.3, 1))


/*   let result =weight/Math.pow(height,2)
  console.log(result)
  if (18,5 < result && result<= 25,0) return -1

  if (18.5 < result && result <= 25.0) */
  
  function bmi(weight, height) {
    return weight/Math.pow(height,2)<= 18.5 ? "Underweight" : 
          18.5 < weight/Math.pow(height,2)<= 25.0 ? "Normal" : 
          25 < weight/Math.pow(height,2)<= 30 ? "Overweight" : "Obese"
 }
//console.log(bmi(80, 1.80))

const flip=(d, a)=>{
  if (d==='R') return a.sort((a,b)=> a-b)
  else  return a.sort((a,b)=> b-a) 
}
//console.log((flip('R', [3, 2, 1, 2])))
//console.log(flip('L', [1, 4, 5, 3, 5]))

function toFreud(string) {
  return (string.length !== 0) ? result = string.split(' ').map(elem => elem='sex').join(' '):""
  }
//console.log(toFreud(""))
function positiveSum(arr) {
  // return (arr.lenght !== 0) ? arr.reduce((ac,elem) => (elem>=0) ? ac+=elem : false,0):0
  return (arr.lenght !== 0) ? arr.reduce((ac,elem) => {
    if (elem >= 0) ac+=elem
    return ac
  },0):0
 }

 //console.log(positiveSum([-2,42]))

//  function makeNegative(num) {
//   return (num===0) ? 0:(num > 0) ? num: Math.abs(num)
// }

const makeNegative = num => (num < 0) ? num:(num > 0) ? - num : num
//console.log(makeNegative(-1))

function opposite(number) {
  return -number
}
//console.log(opposite(-1))

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
const finder = new SmallestIntegerFinder();
//console.log(finder.findSmallestInt([34, -345, -1, 100]))


// const array1 = [2, 3, 1, 6, 8 , 9 , 11];
// console.log(Math.min(0,2));

function century(year) {
  return (String(year).length <= 2) ? 1 :  (String(year).slice(-2) == "00") ? +String(year).slice(0,-2): +String(year).slice(0,-2) + 1
}
//console.log(century(123456));

function litres(time) {
  return Math.floor(time * 0.5);
}
//console.log(litres(1.4));

const abbrevName = (name) =>{
return name.toUpperCase().split(' ')[0][0]+'.'+name.toUpperCase().split(' ')[1][0]
}
//console.log(abbrevName('patrick feeney'));

function digitize(n) {
  return n.split('').map(elem =>+elem).reverse()
}
//console.log(digitize(32687));

const findNeedle = haystack => {
  haystack = haystack.findIndex((elem) => elem==='needle')
return `found the needle at position ${haystack}`;
}
//console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

const strick ='1,2,3,4,5'
let strick1 = strick.replaceAll(',','+')
//console.log(eval(strick1))

//'use strict';

// первый и второй элементы не нужны
let tt = "Юлий Цезарь Император Рима"
//console.log(Array.isArray(tt.split(' '))); // Император
let [,,,title] = "Юлий Цезарь Император Рима".split(" ");
 

/* console.log(typeof(title));
console.log(title); // Император */

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//console.log(rest)

/* Тролли атакуют ваш раздел комментариев!
Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!». */

function disemvowel(str) {
  const vowels =['a', 'e', 'i', 'o', 'u']
/*   vowels.forEach(elem=> {
    str= str.replaceAll(elem,"")
  })
  return str */
  return Array.from(str).filter(el =>!vowels.includes(el.toLowerCase())).join('')
}

//console.log(disemvowel("This website is for losers LOL!"))

/* ОПИСАНИЕ:
У вас есть приложение для группового чата, но кто онлайн!?
Вы хотите показать своим пользователям, кто из их друзей онлайн и доступен для чата!
Получив ввод массива объектов, содержащих имена пользователей, статус и время с момента последнего 
действия (в минутах), создайте функцию для определения, кто есть online, offline и away.

Если кто-то есть online, но они lastActivity были более 10 минут назад, их следует учитывать away.
Входные данные имеют следующую структуру:
Соответствующий вывод должен выглядеть следующим образом:
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
Если, например, нет пользователей, online вывод должен выглядеть следующим образом:
{
  offline: ['Lucy'],
  away: ['Bob']
}
имя пользователя всегда будет string, статус всегда будет либо 'online'или 'offline'
(перечисление UserStatus в C#), а lastActivity всегда будет number >= 0.
Наконец, если у вас нет друзей в приложении чата, входными данными будет пустой массив []. 
В этом случае вы должны вернуть пустой объект {}(пустой слов */

 /*  const whosOnline = (friends) => {
    StatusObj = {}

  
    if (!friends.length) {
      return StatusObj
    } else {
      StatusObj = friends.filter(elem =>{
          if (elem === 'online') {

          } else {
            // StatusObj.offline = StatusObj.offline || []
            elem.push(elem.username)
            return elem
            }  
      })
    }

  return   StatusObj
  } */

/*  console.log(whosOnline([
  {
    username: 'Dima',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, 
  {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, 
  {
    username: 'Max', 
    status: 'offline',
    lastActivity: 22
  },
   {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  } ]))  
 */
/* Вам дан массив значений.
Суммируйте каждое числовое значение в массиве и любых вложенных массивах (до любой глубины).
Игнорировать все другие типы значений. */
const arraySum = arr => {
return arr.flat().reduce ((accum,elem)=>{
  if (typeof(elem)==='number') {
    return accum+elem
  }
    return accum
},0)
}
//console.log(arraySum([[1, 2], [3, 'test'], [4, 5], [6, [7, 8, 9]], [], 0]))

/* Питер живет на холме и всегда стонет по дороге домой. «Это всегда только вверх. Я никогда не отдыхаю». 
Но вы почти уверены, что по крайней мере в одной точке высота Питера не увеличивается, а падает. 
Чтобы заполучить его, вы используете гнусный план: прикрепляете к его рюкзаку альтиметр и считываете 
данные с его обратного пути на следующий день. 
isMonotone([])     == True
isMonotone([1,2,3]) == true
isMonotone([1,1,2]) == true
isMonotone([1])     == true
isMonotone([3,2,1]) == false
isMonotone([3,2,2]) == false */

var isMonotone = function(arr){
  return arr.every((el,i)=> i === 0 || arr[i-1] <= arr[i] ); 
}

// console.log(isMonotone([1,2,3]))


//console.log(isMonotone([3,2,1]))






const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const Sumnum = [0,...num1,...num2,7];
//console.log(Sumnum)

function bigSum (a,b,...arg) {
  let res =a + b;
  for (let i=0; i<arg.length; i++){
    res+=arg[i]
  }
  return res
}
/* console.log(bigSum (1,2))
console.log(bigSum (1,2,3,4)) */

/* function largestPairSum (numbers) {
  numbers.sort((a,b)=> b-a)

  return numbers[0]+numbers[1]
}
//console.log(largestPairSum([-100,-29,-24,-19,19]))

/* Овцы возвращаются группами каждый день -> вам будут предоставлены два массива с этими числами 
(один для пятницы и один для ночи субботы). Записи всегда являются положительными целыми числами, выше нуля.
Фермер знает общее количество овец, это третий параметр. Вам необходимо вернуть количество 
потерянных (не возвращенных на ферму) овец после окончательного подсчета овец в субботу.
Пример 1: Ввод: {1, 2}, {3, 4}, 15 --> Вывод: 5
Пример 2: Ввод: {3, 1, 2}, {4, 5}, 21 --> Вывод: 6
Удачи! :-) */

function lostSheep(friday,saturday,total){
  //return total - friday.reduce((accum, elem) => accum + elem,0)  - saturday.reduce((accum, elem) => accum + elem,0)
  return total - [...friday,...saturday].reduce((a,b)=>a+b,0)
}
//console.log(lostSheep([],[],15))
//console.log(lostSheep([1, 2],[3,4],15))

/* Вам дан несортированный массив, содержащий все целые числа от 0 до 100 включительно. 
Однако отсутствует одна цифра. Напишите функцию, которая находит и возвращает это число.
Каковы временные и пространственные сложности вашего решения? */

/* function missingNo(nums) {
  let numsSort = nums.sort((a,b) => a-b)
  numsSort = numsSort.filter((el,index) => el !== numsSort[index+1]-1 && numsSort[index+1]!==undefined)
  return  (numsSort.length) ? numsSort[0]+1 : 100
  //return 

} */


function missingNo(nums) {
return nums.find((el,index)=>!nums.includes(index))
}
//console.log(missingNo([0,1,2,4]))
//console.log(missingNo([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]))// 26)
//console.log(missingNo([15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20, 43]))

function incrementer(nums) { 
  return nums = nums.map((el,i) => (el+i+1 < 9) ? el+i+1 : (el+i+1)%10)
}
//console.log(incrementer([4, 6, 9, 1, 3]))


/* Создайте функцию strCount (принимает объект в качестве аргумента), которая будет подсчитывать 
все строковые значения внутри объекта. Например:
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3 */

/*   function strCount(obj){
    let count =0
    for (let field in obj) {
      console.log(obj[field] + " c типом данных " + typeof(obj[field]))
      if (typeof(obj[field])==="string") {
        count++
        console.log('cчетчик изменен ' + count)
      } else if (typeof(obj[field]) === "object") {
            for (let subfield in obj[field]) {
              console.log('анализ объектов '+subfield+'  ' +obj[field][subfield] + " c типом данных " + typeof(obj[field][subfield]))
              if (typeof(obj[field][subfield])==="string") {
                count++
                console.log('cчетчик изменен ' + count)
                break
              }
              
            }
      }
    }
    return count
    } */


    function strCount(obj) {
      let count = 0;
      for (let key in obj) {
        console.log('если  '+obj[key])
        if (typeof obj[key] === 'string') {
          count++;
        } else if (typeof obj[key] === 'object') {
          console.log('если объект  '+obj[key])
          count += strCount(obj[key]);
        }
      }
    
      return count;
    }
  
/*   console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    })) */

    var greet = function(name) {
      //name.toLowerCase()
      return `Hello `+ name[0].toUpperCase() + name.toLowerCase().slice(1,name.length)+'!'
    };

    //console.log(greet('NAME'))

/* Вам будет передан массив объектов ( list) — вы должны отсортировать их в порядке убывания 
на основе значения указанного свойства ( sortBy).
Пример
При сортировке по "a", это: 
[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]должен вернуться:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
] */
/* 
function sortList (sortBy, list) {

  return list.sort((a,b)=>b-a[sortBy])
}

console.log(sortList("a",
{"a": 1, "b": 3},
{"a": 3, "b": 2},
{"a": 2, "b": 40},
{"a": 4, "b": 12})) */

/* Реализуйте функцию , multiples(m, n)которая возвращает массив первых m кратных действительного числа n.
Предположим, что mэто положительное целое число.
Бывший.
multiples(3, 5.0)
должен вернуться
[5.0, 10.0, 15.0] */

function multiples(m, n){
  let arr = []
  for (let i=1; i<=m;i++) {
    arr.push(n*i)
  }
  return arr
}
//console.log(multiples(3,5))

function sortGiftCode(code){
  return code.split('').sort((a,b)=>a.codePointAt()-b.codePointAt()).join('')
}

//console.log(sortGiftCode("pqksuvy"))

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +((discountedPrice/(100 - salePercentage)* 100).toFixed(2))
}
//console.log(discoverOriginalPrice(75.75,25));

function calculate(num1, operation, num2) {
 switch (operation) {
  case "-" : return num1 - num2
  case "+" : return num1 + num2
  case "*" : return num1 * num2
  case "/" : return num2 === 0 ? null: num1 / num2
  default : return null
 }

 }
 //console.log(calculate(6,"-", 1.5));

/*  function trouble(x, t){
  return x.findIndex((_,index)=> {
    if  ((x[index+1] + x[index]) === t ) {
      return true
    } 
  } )
 } */

 function trouble(x, t){
    for (let index = 0; index < x.length;index++) { 
      if  ((x[index+1] + x[index]) === t )  {
        x.splice(index+1,1) 
        index--
      }   
    }
    return x
 }
 //console.log(trouble([4, 1, 1, 1, 4],2))  //[4, 1, 1, 4]  [4, 1, 4])

 function getMissingElement(superImportantArray){
  for (let i = 0 ; i < superImportantArray.length; i++ ) {
    if (!superImportantArray.includes(i)) {
      return i
    } return i
  }
}
//console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]))

/* function evenNumbers(array, number) {
   let outputArr =array.filter(el => el%2===0)
   return outputArr.reverse().splice(0,number) 
} */
//console.log((evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))) //[-8, 26]

/* function removeSmallest(numbers) {
  let newList =[ ...numbers]
  if (numbers.length >0) {
    newList.splice(newList.indexOf(Math.min(...newList)), 1);
     return newList 
  } 
  return [];
} */
//console.log(removeSmallest([5, 3, 2, 1, 4]))
/* let i = 3
let array1 = [1, 2, 3, 4, 5];
array1.splice(-3);
console.log(array1) */


/* 
Учитывая двумерный массив, вернуть новый массив, который переносит только те массивы из оригинала, 
которые не были пустыми и элементы которых все одного типа (т.е. однородные). 
Для простоты массивы внутри массива будут содержать только символы и целые числа.
Пример:
Учитывая [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], ваша функция должна возвращать [[1, 5, 4], ['б']].
Приложение:
Пожалуйста, имейте в виду, что для этого ката мы предполагаем, что пустые массивы неоднородны.
Результирующие массивы должны быть в том порядке, в котором они были изначально, и их значения не должны изменяться.
Неявное приведение типов не допускается. Подмассив [1, '2'] будет считаться недопустимым и должен быть отфильтрован. */

/* function filterHomogenous(arrays) {
  return arrays
      .filter ((el,index)=> {
          if (el.length !==0) {
              let flag = true;
              for (let j = 0; j < el.length; j++) {
                    if (typeof(el[0]) !== typeof(el[j])) {
                        flag =  false 
                        break
                    }                                
              } 
          return  flag      
          } 
          return  false
      } 
        ) 
} */

function filterHomogenous(arrays) {
    return arrays.filter(el =>el.length!== 0 && el.every(e=> typeof(e)===typeof(el[0])))
}
//console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))
//console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]))

const number = function (...arg) {
  return Array.from([...arg]).every(el =>typeof(el)==="number")
  }

//console.log(number(1, "a", 3))

function vaporcode(string) {
  return string.toUpperCase().replaceAll(' ','').split('').join('  ')
}
//console.log(vaporcode("Why isnt my code working"))

function solve(arr){
  let solveArr = [];
  arr = arr.sort((a,b) => b-a)
    while (arr.length) {
      solveArr.push(arr.shift())
      solveArr.push(arr.pop())
    }  
    return  solveArr.filter(el=>el!==undefined)
};
//console.log(solve([15,11,10,7,12])) //,[15,7,12,10,11,]))

const  alternateCase = (s) => s.split('').map(el => (el === el.toUpperCase()) ? el.toLowerCase() : el.toUpperCase()).join('')
//console.log(alternateCase('Hello'))

/* Для заданной последовательности целых чисел вернуть сумму всех целых чисел с четным индексом 
(нечетный индекс в COBOL), умноженную на целое число с последним индексом.
Индексы в последовательности начинаются с 0.
Если последовательность пуста, вы должны вернуть 0. */

function evenLast(numbers) {
  if (numbers.length !==0)  {
    return numbers[numbers.length-1] * numbers.filter((el,index) => (index%2=== 0) || (index === 0) ).reduce((ac,elem) => ac + elem ,0)
  }
  return 0
}
//console.log(evenLast([2, 3, 4, 5]))

/* Это достаточно просто - вам будет предоставлен массив. Значения в массиве будут либо числами, либо строками, 
либо их сочетанием. Вы не получите ни пустой массив, ни разреженный.
Ваша задача состоит в том, чтобы вернуть один массив, в котором сначала числа отсортированы в порядке возрастания
, а затем строки, отсортированные в алфавитном порядке. Значения должны сохранять свой исходный тип.
Обратите внимание, что числа, записанные в виде строк, являются строками и должны быть отсортированы вместе с
 другими строками. */

 function dbSort(a){
   const numArr = a.filter(el=> typeof(el)==='number').sort((a,b)=>a-b)
  const strArr = a.filter(el=> typeof(el)==='string').sort((a,b)=>a.localeCompare(b))
  return [...numArr, ...strArr]
  }

  //console.log(dbSort(["aa","abb",'aav']))
  const str1 = "bpple2";
  const str2 = "apple10";
  //console.log(str1.localeCompare(str2, undefined, { numeric: true }))

 /*  Возьмите 2 строки s1и s2включите только буквы от aдо z. Возвращает новую отсортированную строку, 
  максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
  a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy" */



const longest = function(s1, s2) {
    return [...s1,...s2].filter((el,index,_arr)=> index ===_arr.indexOf(el)).sort((a,b)=> a.localeCompare(b)).join('')
}
//console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty")

function f(n){
  if ((n > 0) && (n%2===0)) {
    let numArr = []
      for (let i = 1; i <= n; i++ ) {
        numArr.push(i)
      }
  return numArr.reduce((ac,el) => ac+el,0)
  }
  return false
};
//console.log(f(100)) //5050

function reverseLetter(str) {
//console.log('a'.charCodeAt())
  //return Array.from(str).filter(el => (el.charCodeAt() > 48 || el.charCodeAt() < 57) && (el.charCodeAt() > 65 || el.charCodeAt() < 90) && (el.charCodeAt() > 97 || el.charCodeAt() < 122));
  return Array.from(str).filter(el => (el.charCodeAt() <= 90 && el.charCodeAt() >= 65) || (el.charCodeAt() <= 122 && el.charCodeAt() >= 97)).reverse().join('')
  
}

//console.log(reverseLetter("krish21an")) //5050

function minValue(values){
  return +(values.filter((el,index,_arr)=> index === _arr.indexOf(el)).sort((a,b)=>a-b).join(''))
}
//console.log(minValue([1, 3, 1]))

function sortByLength (array) {
  return array.sort((a,b)=>a.length-b.length)
};
//console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

function reverseNumber(n) {
  if (n%10===0) {
    n = Number(n.toString().replace(/0+$/, ''));
  }
  return (n >= 0) ? +Array.from(String(n)).reverse().join(''): -+Array.from(String(n)).reverse().join('').slice(0,-1)
}
 //console.log(reverseNumber(-1022))
// let n = "555000000"

// console.log(parseFloat(n))

function findLongest(array){
  const maxlength = String(Math.max(...array)).length
  return  +array.map(elem=>String(elem)).find(el=>el.length ===maxlength)
}
//console.log(findLongest([168630, 430272 ]))

function sumDigits(number) {
  return Array.from(String(Math.abs(number)),Number).re
}
//console.log(sumDigits(-753915))

function inAscOrder(arr) {
  return arr.every((el,i)=> {
    return arr[i-1] <= arr[i] || i=== 0
  })
}
//console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))

let awert ='werty'
// console.log(awert.codePointAt(0)); 
// console.log(awert[0].charCodeAt()); 

const strCount1 = {
      first :  "1",
      second : "2",
      third :  false,
      fourth : ["anytime",2,3,4]  
}


// let parts = Object.entries(strCount1);
// //console.log(Array.isArray(parts))
// for (let i = 0; i < parts.length; i++) {
//   let [key, value] = parts[i];
//   key = key + "  new name"
//   //console.log(parts[i])
//   // делать что-то с key и value
// }
// console.log(strCount1)
// console.log(parts)

// let keys = Object.keys(strCount1);
// console.log(keys)
// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   console.log(key)
//   // делать что-то с object[key]
// }

// Вы хотите показать своим пользователям, кто из их друзей онлайн и доступен для чата!
// Получив ввод массива объектов, содержащих имена пользователей, статус и время с момента последнего
// действия (в минутах), создайте функцию для определения, кто есть online, offline и away.
// Если кто-то есть online, но они lastActivity были более 10 минут назад, их следует учитывать away.
// Входные данные имеют следующую структуру:
// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// Соответствующий вывод должен выглядеть следующим образом:
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если, например, нет пользователей, onlineвывод должен выглядеть следующим образом:
// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// имя пользователя всегда будет string, статус всегда будет либо 'online'или 'offline
// перечисление UserStatus в C#), а lastActivity всегда будет number >= 0.
// Наконец, если у вас нет друзей в приложении чата, входными данными будет пустой массив [].
// В этом случае вы должны вернуть пустой объект {}(пустой словарь в C#).


// const whosOnline = (friends) => {
//   if (friends.length > 0) {
//       const friendsOnline ={}
//       friends.forEach(element => {
//           if (element.status==='online' && element.lastActivity <= 10) {
//               friendsOnline.online = friendsOnline.online || []
//               friendsOnline.online.push(element.username)

//           } else if (element.status==='offline') {
//                     friendsOnline.offline = friendsOnline.offline || []
//                     friendsOnline.offline.push(element.username)
//                 } else {
//                       friendsOnline.away = friendsOnline.away || [] 
//                       friendsOnline.away.push(element.username)
//                   }
//       });
//       return friendsOnline
//   } 
//   return []
// }

// const whosOnline = (friends) => {
//   const onlineFriends = friends.filter(friend => friend.status === 'online' && friend.lastActivity < 10).map(friend => friend.username);
//   const awayFriends = friends.filter(friend => friend.status === 'online' && friend.lastActivity >= 10).map(friend => friend.username);
//   const offlineFriends = friends.filter(friend => friend.status === 'offline').map(friend => friend.username);
  
//   const result = {};
//   if (onlineFriends.length > 0) {
//     result.online = onlineFriends;
//   }
//   if (awayFriends.length > 0) {
//     result.away = awayFriends;
//   }
//   if (offlineFriends.length > 0) {
//     result.offline = offlineFriends;
//   }
  
//   return result;
// };

const whosOnline = (friends) => {
  if (friends.length > 0)  {
    const friendsOnline ={}
    ArrOnline = friends.filter(el => el.lastActivity <= 10 && el.status === 'online').map(el=>el = el.username)
    ArrAway = friends.filter(el=> el.lastActivity > 10 && el.status === 'online').map(el=>el = el.username)
    ArrOffline = friends.filter(el=> el.status === 'offline').map(el=>el = el.username)
      if (ArrOnline.length > 0) {
        friendsOnline.online = ArrOnline
      } 
      if (ArrAway.length > 0) {
        friendsOnline.away = ArrAway
      } 
      if (ArrOffline.length > 0) {
        friendsOnline.offline = ArrOffline
      } 
      return friendsOnline
  } else return []
}


// //console.log(whosOnline([
// {
//   username: 'David',
//   status: 'online',
//   lastActivity: 1
// }, 
// {
//   username: 'Dima',
//   status: 'online',
//   lastActivity: 1
// }, 
// {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]))

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

//console.log(animal({name:"dog",legs:4,color:"white"}))//,"This white dog has 4 legs.")

function greet1(language) {
      const langObj= {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
      }
    return (Object.keys(langObj).some(el=>el===language)) ? langObj[language] : langObj.english
}
//console.log(greet('sadfs'))
//console.log(greet1('dutch'))

// 'Welkom', "Your function should have returned 'Welkom'. Try again.")

function combine(...args) {
  let resObj ={}
      for (const obj of args) { 
          for (const [key, value] of Object.entries(obj)) {
            resObj[key] = resObj[key]||0
            resObj[key]+=value
          }
      }
  return  resObj

}

const objA = {}
const objB = {}
const objC = { a: 5, d: 11, e: 8 }
const objD = {}

//console.log(combine(objA, objB))


const smallEnough =(a, limit)  => {
    return a.every(el=>el <= limit)
}


//console.log(smallEnough([66, 101], 200))

var isAnagram = function(test, original) {
  const testSort = Array.from(test).map(el=>el=el.toLowerCase()).sort((a,b)=>a.charCodeAt()-b.charCodeAt()) 
  const originalSort =Array.from(original).map(el=>el=el.toLowerCase()).sort((a,b)=>a.charCodeAt()-b.charCodeAt())
  console.log(testSort) 
  console.log(originalSort) 
  return testSort.every((el,index)=>el===originalSort[index]) && testSort.length ===originalSort.length
};
//console.log(isAnagram("iIEEqikWOAO", "EyWIOEOAkqii"))


const sumOfMinimums = function(arr) {
    return arr.reduce((acc,current,index)=>  acc += Math.min(...arr[index]),0)
}

//console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

const rowWeights =(array) =>{
  let [first, second] = [0,0]
  first = array.filter((el,i)=>i%2===0).reduce((acc,current)=>acc+=current,0)
  second = array.filter((el,i)=>i%2!==0).reduce((acc,current)=>acc+=current,0)
   console.log(second)
   return [first,second]
}
//console.log(rowWeights([50,60,70,80]))

//console.log(!1)


// function cakes(recipe, available) {
//   if (Object.keys(recipe).every(el=>available.hasOwnProperty(el))) {
//         let cakeNumb = []
//         for (key in recipe) {
//           //console.log(key)
//           cakeNumb.push(Math.floor(available[key]/recipe[key]))
//           //console.log(cakeNumb)
//         }
//         return Math.min(...cakeNumb)
//   }
//   return 0 
// }

function cakes(recipe, available) {
   return Math.min(...Object.keys(recipe).map(el=>Math.floor(available[el]/recipe[el]))) || 0
}
//console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

const roundToNext5 = function (n){
    let i=0;
    while (true) {
      if (n%5 != 0) {
        [i , n] = [i++, n+i]
      } else 
        break
    }
    return n
}
//console.log(roundToNext5(12))

// function sentence(List) {
//   return  list
//   .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
//   .map(item => Object.values(item)[0])
//   .join(' ')
// }

// List = [
//   {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//   {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//  ]

//console.log(sentence(List))

function killer(suspectInfo, dead) {
  for ( const suspectkiller of Object.entries(suspectInfo)) {
      if (dead.every(elem => suspectkiller[1].includes(elem))) {
        return  suspectkiller[0]
      }
  }
}

// console.log(killer({
//   'James': ['Jacob', 'Bill', 'Lucas'],
//   'Johnny': ['David', 'Kyle', 'Lucas'],
//   'Peter': ['Lucy', 'Kyle']},
//   ['Lucas', 'Bill']))

function sortList (sortBy, list9) {
return  list9.sort((a,b)=> b[sortBy] - a[sortBy] )}
// console.log(sortList('a',[
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]))

function myLanguages(results) {
  return Object.entries(results).sort((a,b) => b[1] - a[1]).filter(([key, value])=>value >=60).map(([key, values]) => key)
}
// console.log(myLanguages(
//   { 

//   }))

   let student = {
        name: "Семён",
        age: 21,
        skills: {
            html: true,
            css: true,
            react: false,
        },
    };
        
    //console.log(Object.getOwnPropertyNames(student));
  //   for (let key in student) {
  //     console.log(key);
  //     console.log(student[key]);
  // }  

  const basket = {
    buy1: 'Гречка',
    buy2: 'Хлеб', 
    buy3: 'Помидор'
  };

//const PriceTotal = basket.reduce((total, item)=> total + item.price * item.quantaty,0)
//console.log(PriceTotal)
// const PriceTotal = cartItems.reduce (
//   const Total = cartItems.reduce (
//     (total, item) => total + item.price * item.quantaty, 0);
//     console.log(const PriceTotal = cartItems.reduce (
//       );

const strCount11 = {
  first:  "1",
  second: "2",
  third:  false,
  fourth: ["anytime",2,3,4]    }

// for (let [key, value] of Object.entries(strCount11)) {
//   console.log(`${key}: ${value}`);
// }

const students = [
  {name: 'Вася', age: 18},
  {name: 'Маша', age: 28},
  {name: 'Катя', age: 8},
];
//console.log(students.find (student=>student.name ==='Вася'&& student.age === 28 ));


//console.log(students.findIndex (student=>student.name ==='Вася'&& student.age === 18 ));

function myLanguages(results) {
  return Object.entries(results).filter(([keys,values])=> values >= 60).map(([keys,values])=>[keys,values]= keys)}
  
  // console.log(myLanguages({"Java": 10, 
  //                          "Ruby": 80, 
  //                          "Python": 65}
  //                         ))
// код стороннего разработчика//
  let point5 = {
    x:10,
    y:15,
    z: 25
  }
// конец код стороннего разработчика//
let z = Symbol ();
point5[z] = 30
//console.log(point5)








//console.log(ObjRectangle.ObjPrint())

//console.log(ObjRectangle.distance())


let ParObj =  {
  x: 20,
  y : 30,
  t: 99
}

let t = Symbol();

//console.log(par1, par2)
ParObj[t] = 8
//console.log(ParObj)

// for (let field in ParObj) {
//   console.log(field, ParObj[field])
// }


let point51 = {
  x:10,
  y:15,
  z1: 25
}
// конец код стороннего разработчика//

let z1 = Symbol ();
point51[z] = 30
// console.log(point51)

function Rectangle (leftPoint, h, w)  {
  this._leftPoint = leftPoint;
  this._h = h;
  this._w = w;
  this.ObjPrint = function () {
    for (let field in this) {
    console.log(field, this[field])
    }
  };
  this.distance = function () {
    return this._leftPoint * this._h * this._w
  };
  this.toString = function () {
    return `Прямоугольник с координатами (Х,Y) шириной ${this._h} и высотой ${this._w}`
  };
  this.valueOf = function() {
    return this._h * this._w
  }
}
let wert = new Rectangle(1, 2, 3)
// console.log(String(wert))
// console.log(+wert)


let p1 = new Point(10,20)


function PointZ (x, y){
     this.x = x;
     this.y = y;
    //  this.print  = function () {
    //   console.log ('${this.x}+${this.y}')
    //  } ;
     this.distance  = function () {
                  return Math.sqrt(this.x **2 + this.y **2) }
     this.toString  = function () {
           return ` точка с координ ${this.x} и ${this.y}`}

     this.valueOf  = function () {
          return Math.sqrt (this.x**2 +this.x**2);
}
}

let r = new PointZ(10,20)
//alert(r)




// figuObj.x = 1;
// figuObj['y'] = 1;
// figuObj.width = 1;


function newFigure (obj) {
    for (let field in obj) {
      //console.log(`Имя св-ва: ${field}  значение св-ва:` obj['field'] )
      console.log( field+"  " + obj[field])
    }
} 

//newFigure(figuObj)

//console.log(JSON.stringify(figuObj))

function newFigObj (x,y, width, height) {
  this.x = x,
  this.y = y,
  this.width = width,
  this.height = height,
  this.square = function () {
      return this.x  * this.y * this.width * this.height 
  }
  this.toString = function () {
    return `Прямоугольник с координатами ${this.x} и ${this.y} шириной ${this.width} и высотой ${this.height} `
  }
  this.valueOf = function ()  {
    return this.square()
  }
}

let quantaty = new newFigObj (1,1,1,2);
//console.log(quantaty.square())

let x = Symbol();
let y = Symbol();

[quantaty[x],quantaty[y]] = [20,30]
//console.log(String(quantaty))
//console.log(Number(quantaty))




// console.log(String(quantatyClass))

// try {
//     quantatyClass.Width = -8
// }
// catch (e) {
//   console.log(e)
// }
//console.log(quantatyClass.Height)
 //console.log(quantatyClass.getCount())

class Rect {
  static counter = 0
  constructor (x, y, width, height) {
    this.x = x,
    this.y = y
    this.width = width,
    this.height = height,
    Rect.counter++
  }

  static getCounter() {
    return  Rect.counter
  }
}

let quantityClass = new Rect(1, 1, 1, 1)
//console.log(quantityClass.getCount())




class Point9 {
  static counter = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Point9.counter++;
  }

  static getCounter () {
    return  Point9.counter
  }
}

let p9 = new Point9(5, 10);
let p10 = new Point9(6, 10);
let p3 = new Point9(7, 1);
//console.log(Point9.getCounter()); // Output: 3


//console.log(ObjClass.getCount())
//let newItem = new ObjClass (1,2,3,4)
//console.log(ObjClass.getCount())

class modelCar {
  constructor (x,y,maxspeed) {
    this.x = x,
    this.y = y,
    this.maxspeed = maxspeed
  }

  move (point1,point2)  {
    this.x = point1,
    this.y = point2
    console.log('движение на машине')
  }
}

class Truck extends modelCar {
  constructor (x,y,maxspeed,capacity) {
    super (x,y,maxspeed),
    this.capacity = capacity
  }

  move (point1,point2) {
    super.move (point1,point2)
    console.log('движение на грузовике') 
  }
}
let kamaz = new Truck(7,8,10,'15 000')
//console.log(kamaz.move(1,2))
//console.log(kamaz)

class ObjClass {
  static counter = 0
  constructor (x,y, width, height) {
    this.x = x,
    this.y = y
    this._width = width,
    this._height = height,
    ObjClass.counter ++
  }

  static getCount() {
    return  ObjClass.counter
  }

  get Square () {
    return this.x  * this.y * this.width * this.height 
  }

  set Width (point) {
      if (point < 0) throw new Error('Ширина отрицательная') 
      this.width = point
  }

  get Width () {
    return this.width
  }

 set Height (point) {
      if (point < 0) throw new Error('Высота отрицательная') 
      this.height
  }

  get Height () {
    return this.height
  }
  
  toString () {
    return `Прямоугольник с координатами ${this.x} и ${this.y} шириной ${this.width} и высотой ${this.height} `
  }

  valueOf () {
    return this.square()
  }
}

class ObjClass5 {
    constructor (x,y, width, height) {
    this.x = x,
    this.y = y
    this._width = width,
    this._height = height
    }

    getWidth () {
      return this._width 
    }

    setWidth(w) {
      if (this.check(w)) this._width  = w
    }

    getHeight () {
      return this._height 
    }

    setHeight (h) {
      if  (this.check(h)) this._height = h
    }

    check (data) {
      return data > 0
    }
}
let testItem = new ObjClass5(5,10,15,20)

let randomNumb = {
  toRandomNumb () {
    return Math.random()*100
  }
}

class RandomRec {
  constructor (x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  getX () {
    return this.x 
  }

  setX (x) {
    if (x === undefined) this.x = this.toRandomNumb ()
    else this.x = x
  }
}
Object.assign(RandomRec.prototype, randomNumb);
let moon = new RandomRec ()
let ret;
moon.setX(ret)
console.log(moon.getX())


// console.log(Object.getOwnPropertyDescriptors(testItem))
// console.log(Object.defineProperties(testItem, {
//   field: {
//   writable :false,
//   enumerable : true,
//   configurable:false }
// }))

// console.log(Object.getOwnPropertyDescriptors(testItem))


