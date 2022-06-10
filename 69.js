/*

# 문제69 : 골드바흐의 추측

골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

**2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요. 

* 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.

*/
function prime_list(n) {
    //에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    let sieve = [];
    for (let i = 2; i < n; i++) {
        sieve.push(true);
    }
    // console.log(sieve);

    //n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    let m = parseInt(n ** 0.5, 10);
    // console.log(m);
    for (let i = 2; i < m + 1; i++) {
        if (sieve[i] == true) {
            // i가 소수인 경우
            for (let j = i + i; j < n; j += i) {
                // i이후 i의 배수들을 False 판정
                sieve[j] = false;
            }
        }
    }
    // 소수 목록 산출
    let 소수목록 = [];
    for (let i = 2; i < n; i++) {
        if (sieve[i] == true) {
            소수목록.push(i);
        }
    }
    return 소수목록;
}
// console.log(prime_list(10000));

// let 소수 = [];
// let 소수판별 = true;

// for(let i=2; i<100; i++){
//   for(let j=2; j<i; j++){
//     if(i%j == 0){
//       소수판별 = false;
//     }
//   }
//   if (소수판별){
//     소수.push(i);
//   }
//   소수판별 = true;
// }

// console.log(소수);
let 입력숫자 = parseInt(prompt("숫자를 입력하세요:"), 10);

const 소수 = prime_list(입력숫자 + 1);
const 숫자 = 입력숫자;
let 순회 = 0;
let 골드바흐파티션 = [];
for (let n of 소수) {
    // console.log(n);
    if (소수.includes(숫자 - n)) {
        골드바흐파티션.push([n, 숫자 - n]);
    }
    if (순회 > parseInt(소수.length / 2, 10)) {
        break;
    }
    순회++;
}
console.log(골드바흐파티션);
let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);
console.log(차.indexOf(Math.min.apply(null, 차)));
let 차의인덱스 = 차.indexOf(Math.min.apply(null, 차));
console.log(골드바흐파티션[차의인덱스]);
