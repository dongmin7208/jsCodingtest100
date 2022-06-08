/*

# 문제61 : 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
*/

const prees = "aaabbbbcdddd";
let s = "";
let storeString = prees[0];
console.log(storeString);
let count = 0;

for (let i of prees) {
    if (i === storeString) {
        count += 1;
    } else {
        s += storeString + String(count);
        storeString = i;
        count = 1;
    }
}

s += storeString + String(count);
console.log(s);
