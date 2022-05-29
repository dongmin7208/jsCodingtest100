/*
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.


입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2
 */

// function reversInt(s) {
//     const result = s.split(" ").reverse().join("");
//     // let result = "";
//     for (let i = 0; i < s.length; i++) {
//         result += s[i];
//     }
//     console.log(result);
// }
// reversInt(21313);

// function reversInt(s) {
//     let reversed = s.toString().split("").reverse().join("");
//     return parseInt(reversed) * Math.sign(s);
// }
// reversInt(1);
// reversInt(123456);
// console.log(s);

// function reverseInt(n) {
//     let reversed = n.toString().split("").reverse().join("");
//     return parseInt(reversed) * Math.sign(n);
// }
// reverseInt(981);
// console.log(reversed);
// console.log(reverseInt.n);

const reverseInt = function reverseInt(s) {
    const data = Math.abs(s).toString();
    const result = +data
        .split("")
        .reverse()
        .reduce((a, b) => a + b);
    if (s < 0) {
        return -result;
    } else {
        return result;
    }
};
console.log(reverseInt(12345));
console.log(reverseInt(-54321));
