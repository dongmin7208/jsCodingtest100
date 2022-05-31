/*
# 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
 */

function dec(s) {
    let result = [];
    let b = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            result.push(s[i].toUpperCase());
        } else {
            result.push(s[i].toLowerCase());
        }
    }
    for (let j = 0; j < result.length; j++) {
        b += result[j];
    }
    return b;
}
console.log(dec("AAABBBcccddd"));
