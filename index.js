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

let str1  = 'Переходите на мой лучший сайт http:www.govno.ru - не пожалеете';
let str2  = ' Спасибо за информацию';
function isHaveLink (str) {
  let reg = /https?:\/\/.+?\.[a-z]{2,}\s/im;
  return str.match(reg);
}
if (isHaveLink(str1)) {
  console.log(str1);
  console.log('Найдена ссылка в строке');
}
if (isHaveLink(str2)) {
  console.log(str2);
  console.log('Найдена ссылка в строке');
}

let money = 'У мня в кармане 150 руб и 200 рублей на карте';
let reg = /\d+/g;
let matches = money.match(reg);
console.log(matches);
money.replace(reg, 'N');

