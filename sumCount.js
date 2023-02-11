function sumCount(input) {
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < n) {
        let totalSum = Number(input[index]);
        sum += totalSum;
        index++;
    }

    console.log(sum);
    
}

sumCount(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

