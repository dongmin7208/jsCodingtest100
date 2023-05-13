// 21_Structure.js
function sumRest(a, b) {
  let result = Math.floor(a / b);
  let remainder = a % b;
  return console.log(result), console.log(remainder);
}
console.log(sumRest(13, 5));

// /*
//     공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
//  */

// function sumRest(a, b) {
//     let result = a / b;
//     let remainder = a % b;
//     console.log(`result:${result} remainder:${remainder}`);
// }
// sumRest(10, 2);
