/*
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
 */
function bubble(arr) {
    let result = arr.slice();
    // let flag;
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
                // [result[j], result[j + 1]] = [result[j + 1], result[j]];
                // flag = 1;
                //빈칸을 채워주세요.
            }
        }
        // if (flag == 0) break;
    }
    return result;
}
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const items = prompt("입력해주세요.")
    .split(" ")
    .map((n) => {
        return parseInt(n, 10);
    });
console.log(bubble(items));
//   const items = prompt('입력해주세요.').split(' ').map((n) => {
//     return parseInt(n, 10);
//   });

// console.log(bubble(items));
