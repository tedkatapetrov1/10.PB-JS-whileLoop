function minNum(input) {
    let num = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (num !== "Stop") {
        let n = Number(num);
        if (n < min) {
            min = num
        }
        num = input[index];
        index++
    }
    console.log(min);

}

minNum(["100",
    "99",
    "80",
    "70",
    "Stop"])
