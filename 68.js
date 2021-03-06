/*

# 문제68 : 버스 시간표

학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

**버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램**을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 **"01시간 03분"**으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 **"지나갔습니다."**라고 출력합니다.


입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
*/
function sol(tb, rt) {
    let answer = [];
    rt = rt.split(":").map((n) => parseInt(n, 10));

    for (let i = 0; i < tb.length; i++) {
        let time = tb[i].split(":").map((n) => parseInt(n, 10));
        let time_to_min = time[0] * 60 + time[1] - (rt[0] * 60 + rt[1]);

        if (time_to_min < 0) {
            answer.push("pass");
        } else {
            let a = parseInt(time_to_min / 60, 10);
            let b = time_to_min % 60;
            answer.push(
                String(a).padStart(2, 0) +
                    "time " +
                    String(b).padStart(2, 0) +
                    "min"
            );
        }
        return answer;
    }
}
console.log(sol(["12:30", "13:20", "14:13"], "12:40"));
