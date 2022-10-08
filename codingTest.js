// /*

// # 문제70 : 행렬 곱하기

// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력
// a = [[1, 2],
//         [2, 4]]

// b = [[1, 0],
//         [0, 3]]

// 출력
// [[1, 6], [2, 12]]
// */
// function solution(i) {
//     if (i < 10) {
//         return [i]
//     } else {
//         let tmp = [];
//         let x = i;
//         while (true) {
//             tmp.push(x % 10);
//             x /= 10;
//             x = Math.floor(x);
//             if (x < 10) {
//                 tmp.push(x);
//                 break;
//             }
//         }
//         return tmp;
//     }
// }
// let resCnt = 0;
// for (let i = 1; i < 1000001; i++) {
//     tmp = i;
//     for (let j = 1; j < 8; j++) {
//         let res = solution(tmp);
//         let sum = 1;
//         for (let k = 0; k < res.length; k++) {
//             sum *= res[k]
//         }
//         tmp = sum;
//         if (tmp < 10) {
//             if (j == 7) {
//                 resCnt += 1;
//                 break
//             } else {
//                 break;
//             }
//         }
//     }
// }
// console.log(resCnt)



// //     let c = [];
// //     const len = a.length;

// //     if (len === b[0].length) {
// //         for (let i = 0; i < len; i++) {
// //             let row = [];
// //             for (let j = 0; j < len; j++) {
// //                 let x = 0;
// //                 for (let k = 0; k < len; k++) {
// //                     x += a[i][k] * b[k][j];
// //                 }
// //                 row.push(x);
// //             }
// //             c.push(row);
// //         }
// //         return c;
// //     } else {
// //         return -1;
// //     }
// // }
// // const a = [
// //     [1, 2],
// //     [2, 4],
// // ];
// // const b = [
// //     [1, 0],
// //     [0, 3],
// // ];

// // console.log(solution(a, b));



// let input = 387420489;

// for (let i = 0; i < 48; i++) {
//     input *= 0.8;
//     input = Math.floor(input);
// }
// console.log(input);

// let sum = 0  // += 2151
// while (true) {
//     sum += 2151
//     let str = String(sum);
//     let tmp = new Set();
//     for (let j = 0; j < str.length; j++) {
//         tmp.add(str[j]);
//     }

//     if (tmp.size == 1) {
//         console.log(str);
//         break;
//     }
// }

// let baseNum;
// for (let i = 4; i < 10; i++) {
//     let currentNum = String(1).repeat(i);//1111
//     for (let j = 1; j < 10; j++) {
//         baseNum = Number(currentNum) * j;//1111,2222,3333....
//         if (baseNum % 2151 === 0) {
//             console.log(baseNum);
//             return;
//         }
//     }
// }

for (let i = 847213569; i > 0; i--) {
    if (Math.sqrt(i) % 1 === 0) {
        console.log(i)
        break;
    }
}