/*
    새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무  번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는    프로그램을 작성하기로 하였습니다.


    입력
    원범 원범 혜원 혜원 혜원 혜원 유진 유진

    출력
    혜원(이)가 총 4표로 반장이 되었습니다.
 */

let s = [
  "원범",
  "원범",
  "혜원",
  "혜원",
  "혜원",
  "혜원",
  "유진",
  "유진",
  "원범",
  "원범",
  "혜원",
  "혜원",
  "혜원",
  "혜원",
  "유진",
  "유진",
];
let result = {};
let winner = "";

for (let index in s) {
  let value = s[index];
  result[value] =
    result[value] === undefined ? 1 : (result[value] = result[value] + 1);
}
console.log(result);

winner = Object.keys(result).reduce(function (a, b) {
  console.log(a, b);
  return result[a] > result[b] ? a : b;
});

console.log(winner);
console.log(`${winner}가 총 ${winner[]}로 반장이 되었습니다.`);
// function banzang(s) {
//     let result = {};
//     let winner = "";

//     for (let index in s) {
//         let val = s[index];
//         result[val] =
//             result[val] === undefined ? 1 : (result[val] = result[val] + 1);
//     }
//     winner = Object.keys(result).reduce(function (a, b) {
//         return result[a] > result[b] ? a : b;
//         console.log(result);
//         console.log(winner);
//     });
//     console.log(`${winner}(ga)chon${result[winner]} 반장`);
// }
// console.log(
//     banzang("원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진")
// );
// // console.log(banzang(`${winner}(ga)chon${result[winner]} 반장`));
