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
var conn, marked, n, ans, conn_num;
function dfs(v) {
    if(marked[v] == 1) return;
    marked[v] = 1;
    conn_num++;
    for (var i=0;i<conn[v].length;i++) {
        if (marked[conn[v][i]] == 0) {
            dfs(conn[v][i]);
        }
    }
}
function main() {
    var n_temp = readLine().split(' ');
    n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var route = [];
    conn_num = 0, ans = 0;
    conn = new Array(n);
    marked = new Array(n);
    for(var i = 0; i < n; i++) {
        marked[i] = 0;
        conn[i] = [];
    }
    for(route_i = 0; route_i < m; route_i++){
       route[route_i] = readLine().split(' ');
       route[route_i] = route[route_i].map(Number);
       var v = route[route_i][0] - 1;
       var w = route[route_i][1] - 1;
       if (conn[v].indexOf(w) == -1 && v != w) conn[v].push(w);
       if (conn[w].indexOf(v) == -1 && v != w) conn[w].push(v);
    }
    for (var i = 0; i < marked.length; i++) {
        if(marked[i]==0) {
            conn_num = 0;
            dfs(i);
            ans = conn_num>ans ? conn_num : ans;
        }
    }
    console.log(ans);
}
