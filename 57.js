/*

# 문제57 : 1의 개수

0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 1000까지 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.


*/

const obj = {};
for (let i = 0; i <= 1000; i++) {
    let tmp = i;
    while (tmp > 0) {
        let num = tmp % 10;
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
        tmp = parseInt(tmp / 10, 10);
    }
}
console.log(obj[1]);

let s = "";
for (let i = 0; i <= 1000; i++) {
    s += i;
}
// console.log(s);
console.log(s.match(/1/g).length);

let b = "";
for (let i = 0; i <= 1000; i++) {
    b += i;
}
let count = 0;
for (let j in b) {
    if (b[j] == 1) {
        count++;
    }
}
console.log(count);

let c = "";
for (let i = 0; i <= 1000; i++) {
    c += i;
}
let count1 = 0;
for (let j of c) {
    if (j == 1) {
        count1++;
    }
}
console.log(count1);
