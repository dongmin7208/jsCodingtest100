/*
    문자열 만들기

    취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 

    혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.
 */

function moji(s) {
    // s.includes()
    let count = s.split(" ").length;
    console.log(count);
}

moji("fff sdijie. cijeijc 222eji eid.");

function moji2(s2) {
    let count = s2.match(/ /g).filter(function (item) {
        return item !== "";
    }).length;
    console.log(count);
}

moji2("fff sdijie. cijeijc 222eji eid.");
