// /*
//     Metody do wykorzystania:
//     charAt()
//     includes()
//     replace()* podchwytliwe 🙂
//     slice()
//     split()
//     toLowerCase()
//     toUpperCase()
// */

// // const text1 = 'powiększ mnie!';

// // console.log(text1.toLocaleUpperCase('Pl'));

// // const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI';

// // console.log(text2.toLocaleLowerCase('Pl'));

// // const text3 = '$#%#^ wytnij te dziwne znaki na początku!';
// // console.log(text3.slice(6));

// // const text4 = 'Kotek wlazł na płotek'

// // const word = 'płotek';

// // console.log(`The word "${word}" ${text4.includes(word) ? 'is' : 'is not'} in the sentence`);

// // console.log(text4.includes('Kotek'));

// // const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'

// // console.log(text5.charAt(2));

// // const text6 = 'kotek wlazł na płotek';

// // console.log(text6.replace('kotek', 'piesek'));

// // const text7 = 'podziel, ten, string, od, przecinków';

// // const words = text7.split("");
// // console.log(words[5]);

// // const add = 5 + 6;

// // console.log(`Wynik dodawania = ${add}`);

// // const only = 11 - 4;

// // console.log(`Wynik odejmowania = ${only}`);

// // num++
// // num++
// // num--

// // let x = 10
// // let y = 16

// // x = x + y

// // console.log(x);

// // x+=y

// // console.log(x);
// // -------
// // operatory porównania

// // const x = 8;

// // const y = '8';

// // const z = 9;

// // if (x === y) {

// //  console.log('lolo');
// // }

// //  else {

// //     console.log('ulala');

// //  }

// //  if (x > 100  ||  y > 15) {

// //     console.log('tak');
// //  }

// //  else {
// // console.log('nie');

// //  }

// // const score = 15 % 2;

// // console.log(score);

// // // Skorzystaj z modulo. Zmienną "SCORE" wyloguj w konsoli (powinna zostać wylogowana cyfra 1).

// // let num1 = 8

// // num1++
// // num1++

// // console.log(num1);

// // let x = 5
// // const y = 10

// // console.log(`Wynik działania to ${x*=y}`);

// // const passLength = 11

// // if (passLength >= 10) {

// // console.log('Your password is very strong!');
// // }

// // else if (passLength > 5 && passLength < 10 ) {
// // console.log('Your password is strong enough');
// // }
// // else {

// //     console.log('Your password is not strong enough!');
// // }

// // const fruits = ['pear', 'apple', 'banana'];

// // console.log(fruits);

// // for (let i = 0; i <= 4; i++) {

// //     console.log(i);

// // }

// function substractNumbers (x, y) {

// console.log(x - y);
// }

// substractNumbers(90, 10);

// function showName (name) {

//     console.log(`Podane imię to ${name}`);

// }

// showName('Dave');

// function giveNumber (number) {

//     console.log(`Given number is ${number * number}`);
// }

// giveNumber (20);

// let age = prompt ("Ile masz lat?");
// if(age>=18) {

// console.log('Pamiętaj, że alkohol szkodzi zdrowiu');
// }
// else {
// console.log('Nie masz ukończonych 18 lat');
// }

// const ola = prompt ('Ile masz lat?');
// if (ola > 18) {

//     console.log(object);

// }

// zad.1

// const numbers = [1, 2, 3, 4, 5];

// // // zad.2

// for (let i = 0; i< numbers.length; i++) {
// console.log(numbers[i]);

// }

// // // zad.3
// function giveScore (arg1, arg2, arg3) {
//     console.log(arg1 + arg2 * arg3);

// }

// giveScore(1, 2, 23);

// // zad.4

// if(numbers.length > 5){
//     console.log('True');
// }
// else {
// console.log('False');

// }

// const name = numbers.length
// console.log(`Tablica z cyframi ma ${name} elementów`);

//

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('.btn2')
// const square = document.querySelector('.color')
// const removeColorBtn = document.querySelector('.remove-color')

// function redColor() {
// 	square.classList.add('red')
// 	square.classList.remove('blue')
// }

// function blueColor() {
// 	square.classList.add('blue')
// 	square.classList.remove('red')
// }

// function deleteColor() {
// 	square.classList.remove('red')
// 	square.classList.remove('blue')
// }

// btn1.addEventListener('click', redColor)
// btn2.addEventListener('click', blueColor)
// removeColorBtn.addEventListener('click', deleteColor)
// -----------------
// projekt 1

// const buttonIcon = document.querySelector('.fas')
// const btn = document.querySelector('.arrow')
// const img = document.querySelector('.item1')

// function addRemoveShow() {
// 	img.classList.toggle('show')

// 	if (img.classList.contains('show')) {
// 		buttonIcon.style.rotate = '180deg'
// 	} else {
//         buttonIcon.style.rotate = '360deg'	}
// }

// btn.addEventListener('click', addRemo('veShow)

// -------------------------------

// projekt2

const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20

function bigText() {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}
function smallText() {
	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}
function changeColor () {
    p.style.color = 'gold'
}

sizeUp.addEventListener('click', bigText)
sizeDown.addEventListener('click', smallText)
color.addEventListener('click', changeColor)


