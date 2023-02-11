function maxNum(input) {
    let num = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (num !== "Stop") {
        let n = Number(num);
        if (n > max) {
            max = num
        }
        num = input[index];
        index++
    }
    console.log(max);
}

maxNum(["100",
    "99",
    "80",
    "70",
    "Stop"])
