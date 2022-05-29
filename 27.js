/*
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}
 */

function objectt(name, scores) {
    name = name.split(" ");
    scores = scores.split(" ");
    const obj = {};

    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = parseInt(scores[i], 10);
    }
    console.log(obj);
}

objectt("park", "50");
objectt("bbbu", "40");
objectt("dd", "430");
objectt("ff", "420");
