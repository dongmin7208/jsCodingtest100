// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

const level = 5;
for (let i = 1; i <= level; i++) {
  let star = "";
  for (let k = 1; k <= level - i; k++) {
    star = star + " ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    star = star + "*";
  }
  console.log(star);
}
