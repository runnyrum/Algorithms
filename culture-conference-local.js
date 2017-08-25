var graph=[], bsum=[], burned=[], minEmp=0, emps=[], emp=0, burnedAndConn={};
function getMaxIndex(){
    var index=Object.keys(burnedAndConn)[0];
    for (var emp in burnedAndConn) {
        if(burnedAndConn[emp]>burnedAndConn[index]) index=emp;
    }
    return index;
}
function flip(i) {
    return i==0?1:0;
}
function recompute(emp) {
    sum=burned[emp];
    for (var i = 0; i < graph[emp].length; i++) {
        sum+=burned[graph[emp][i]];
    }
    if(sum == 0 && burnedAndConn[emp]) delete burnedAndConn[emp];
    else if (sum > 0) burnedAndConn[emp] = sum;
}
function BFS(emp) {
    for (var i = 0; i < graph[emp].length; i++) {
        var connected = graph[emp][i];
        recompute(connected);
        for (var j = 0; j < graph[connected].length; j++) {
            recompute(graph[connected][j]);
        }
    }
}
function getMinimumEmployees(e){
    // Complete this function
    for (var i = 0; i <= e.length; i++) {
        graph[i]=[];
        burned[i] = 0;
        bsum[i]=0;
    }
    burned[0]=0;
    for (var i = 1; i <= e.length; i++) {
        burned[i] = flip(e[i-1][1]);
        bsum[i]=burned[i];
    }
    for (var i = 1; i <= e.length; i++) {
        var p = i;
        var q = e[i-1][0];
        graph[p].push(q);
        graph[q].push(p);
        bsum[p] = bsum[p]+burned[q];
        bsum[q] = bsum[q]+burned[p];
        if(bsum[p]>0) burnedAndConn[p]=bsum[p];
        if(bsum[q]>0) burnedAndConn[q]=bsum[q];
    }
    while(Object.keys(burnedAndConn).length != 0) {
        emp = getMaxIndex();
        // send emp
        emps.push(emp);
        burned[emp]=0;
        delete burnedAndConn[emp];
        for(var i=0;i<graph[emp].length;i++){
            var connected=graph[emp][i];
            if(connected != emp) {
                burned[connected]=0;
            }
        }
        BFS(emp);
        console.log("emps: " + emps.toString());
        console.log("burned: " + burned.toString());
    }
    console.log("Emps sent : " + emps.toString());
    console.log("Count : " + emps.length);
}
// [[0, 1], [1, 0], [2, 0], [3, 0], [4, 0], [4, 0], [6, 1], [2, 0], [8, 1], [8, 0]]

var e=[[0,0],[1,0],[2,0],[3,0],[4,0]];
// Information for employees 1 through n - 1:
// The first value is the employee's supervisor ID
// The second value is the employee's burnout status (0 is burned out, 1 is not)
getMinimumEmployees(e);   


// minEmp(e) = min(minEmp(t-e), min(t) with e in vac)