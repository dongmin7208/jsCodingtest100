/*
# 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
 */

function MyMax(myarr) {
    let al = myarr.length;
    maximum = myarr[al - 1];
    while (al--) {
        if (myarr[al] > maximum) {
            maximum = myarr[al];
        }
    }
    return maximum;
}

let myArray = [1, 5, 8, 20, 25];
let myArray2 = [1, 5, 8, 50, 25];
let m = MyMax(myArray);
console.log(m);

///////

function MyMax2() {
    let what = Math.max.apply(null, myArray2);
    console.log(what);
}
MyMax2(myArray2);
