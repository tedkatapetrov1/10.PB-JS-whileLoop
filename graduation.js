function graduation(input) {
    let index = 0;
    let name = input[index];
    index++
    let year = 1;
    let sumGrade = 0;
    let excluded = 0
    let expelled = false;

    while (year <= 12) {
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade < 4) {
            excluded++;
            if (excluded === 2) {
                expelled = true;
                break;

            }
            continue;
        }
        sumGrade = sumGrade + currentGrade;
        year++;
    }
    if (expelled == false) {
        let averageGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${year} grade`);
    }

}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])