var vacation = {}, checked={}, children=[],burned=[], parent=[];
function DFS(emp) {
    if(checked[emp]) return;
    if(!checked[emp]) {
        checked[emp] = 1;
        for (var i = 0; i < children[emp].length; i++) {
            DFS(children[emp][i]);
        }
    }
    if(burned[emp] == 1) return;
    var isGoing = ~~vacation[emp];
    var isParentGoing = ~~vacation[parent[emp]];
    var isChildGoing = false;
    for (var i = 0; i < children[emp].length; i++) {
        if(vacation[children[emp][i]]) {
            isChildGoing = true;
            break;
        }
    }
    if(!isGoing && !isChildGoing && !isParentGoing) {
        vacation[parent[emp]]=1;
    }  
}
function getMinimumEmployees(e){
    // Complete this function
    burned[0]=1;
    for (var i = 1; i <= e.length; i++) {
        children[i] = [];
        burned[i]=1;
    }
    for (var i = 1; i <= e.length; i++) {
        var p = i;
        var q = e[i-1][0];
        children[q].push(p);
        parent[p] = q;
        burned[i] = e[i-1][1]; // 0 is burned, 1 is not
    }
    for (var i = children.length-1; i >=0 ; i--) {
        checked = {};
        DFS(i);
        console.log("vacation: " + Object.keys(vacation).toString());
    }
    console.log("Count : " + Object.keys(vacation).length);
}
// [[0, 1], [1, 0], [2, 0], [3, 0], [4, 0], [4, 0], [6, 1], [2, 0], [8, 1], [8, 0]]
// [[0,0],[1,0],[2,0],[3,0],[4,0]]; - 3

var e=[[0, 1], [1, 0], [2, 0], [3, 0], [4, 0], [4, 0], [6, 1], [2, 0], [8, 1], [8, 0]];
// Information for employees 1 through n - 1:
// The first value is the employee's supervisor ID
// The second value is the employee's burnout status (0 is burned out, 1 is not)
getMinimumEmployees(e);   


// minEmp(e) = min(minEmp(t-e), min(t) with e in vac)