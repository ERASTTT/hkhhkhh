//задания со страницы 68
//основной способ составления дразнилки
var randomBodyParts = ["скулы", "ноги", "руки", "глаза", "щечки", "родинки"]
var randomAdjectives = ["удивительные", "необычные", "красивые", "обворожительные"]
var randomWords = ["актрисы Анджелина Джоли", "актрисы Мерлин Монро", "актрисы Марго Робби", "акртисы Кира Найтли"]
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 6)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
var randomWord = randomWords[Math.floor(Math.random() * 4)];
var randomInsult = "У тебя " + randomAdjective + " " + randomBodyPart + " , прям как у " + randomWord + "!!!";
randomInsult;
alert( randomInsult );
// способ с оператором join
var randomBodyParts = ["скулы", "ноги", "руки", "глаза", "щечки", "родинки"]
var randomAdjectives = ["удивительные", "необычные", "красивые", "обворожительные"]
var randomWords = ["актрисы Анджелина Джоли", "актрисы Мерлин Монро", "актрисы Марго Робби", "актрисы Кира Найтли"]
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 6)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
var randomWord = randomWords[Math.floor(Math.random() * 4)];
var randomInsult = ["У тебя " + randomAdjective, randomBodyPart + " , прям как у " + randomWord + "))"].join(" ");
randomInsult;
alert( randomInsult );

//задание 4 соединение чисел
var humb = [3, 2, 1];
alert(humb.join(" больше , чем "));


//страница 82
//задание 1
var scores = {
  "Полина": 0,
  "Андрей": 0
};
scores["Полина"] += 1000;
scores["Андрей"] += 100;
alert(scores["Андрей"]);


//задание 2
var myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [ 7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
};
myCrazyObject["some array"][2].number;
alert(myCrazyObject["some array"][2].number);
  

//страница 108
// задание 1
var animals = ["Кот", "Лемур", "Рыба","Комодский варан"];
for (var i = 0; i < animals.length; i++)
{
  animals[i] = animals[i]+" - прекрасное животное ";
}
alert(animals);

//задание 2
var alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
    var randomString = "";
    var stringLength = 6;
    while (randomString.length < stringLength) 
    {
      randomString += alphabet[Math.floor(Math.random() *   alphabet.length)];
    }
alert(randomString);

//страница 109 задание 3
var input = "javascript is awesome";
var output = "";
for (let i = 0; i<input.length; i++) {
  let symbol = input[i]
  switch (symbol) {
    case 'a': output += '4'; break;
    case 'e': output += '3'; break;
    case 'i': output += '1'; break;
    case 'o': output += '0'; break;
    default: output += symbol;
  }
}
alert(output);

//страница 140
//задание 1
function add( a, b ) 
{ c = a + b; 
  return c;
 }
  function multiply( a, b ) 
  { c = a * b; 
    return c;
   } 
   result = add(multiply(36325, 9824), 777);
   alert(result);


//задание 2
var areArraysSame = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
document.write((areArraysSame ([arr1], [arr2])));

