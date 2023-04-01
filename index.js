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

// console.log(explode("3612"));
///српрапр
//// реверт