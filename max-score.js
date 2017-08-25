process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function modulus(a,b) {
    return a%b;
    if (a<b) return a;
    if (a==b) return 0;
    if (a>b) {
        if(m[a][b]) return m[a][b];
    }
}
function operation(num){
    a.splice(a.indexOf(num), 1);
    totalScore += modules(runningSum, num);
    runningSum = runningSum + num;
}
var n;
function getMaxScore(a){
    var matrix=[];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; i++) {
            matrix[i][j] = {
                "val": a[i],
                "status": "unexplored" // blocked,solution,explored
            }
        }
    }
    console.log("Matrix:");
    for (var i = 0; i < a.length; i++) {
        console.log(matrix[i].toString());
    }
    var working = [];
    var totalScore = 0;
    // till when?
        while(working.length!=n) {
            var currentIndex;
            for (var i = 0; i < n; i++) {
                if(matrix[working.length][i].status == "unexplored") {
                    currentIndex = i;
                    break;
                }
            }
            if(currentIndex) {
                matrix[working.length][currentIndex].status = "explored";
                working.push(currentIndex);
                currTotalScore = calcTotalSum(); //based on working
                if(currTotalScore < totalScore) {
                    matrix[working.length][currentIndex].status = "blocked";
                    working.pop();
                } else if (currTotalScore > totalScore) {
                    totalScore = currTotalScore;
                }
            } else {
                for (var i = 0; i < n; i++) {
                    matrix[i][working.length].status = "unexplored";
                }
                var indexToBeBlocked = working.pop();
                matrix[indexToBeBlocked][working.length].status = "blocked";
            }
        }
        solutions.push({
            "array": working.toString(),
            "totalScore": totalScore
        });
    }
}

function main() {
    n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var maxScore = getMaxScore(a);
    process.stdout.write(""+maxScore+"\n");

}
