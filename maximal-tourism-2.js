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
var adj, marked, n=8, ans, conn_num;
function dfs(v) {
    if(marked[v] == 1) return;
    marked[v] = 1;
    conn_num++;
    for (var i=0;i<n;i++) {
        if (adj[i][v] == 1) {
            if (marked[i] == 0) {
                dfs(i);
            }
        }
    }
}
function main() {
    var n_temp = readLine().split(' ');
    n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var route = [];
    conn_num = 0, ans = 0;
    adj = new Array(n);
    marked = new Array(n);
    for(var i = 0; i < n; i++) {
        marked[i] = 0;
        adj[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            if ( i == j ) {
                adj[i][j] = 1;
            } else {
                adj[i][j] = 0;
            }
        }
    }
    for(route_i = 0; route_i < m; route_i++){
       route[route_i] = readLine().split(' ');
       route[route_i] = route[route_i].map(Number);
       var v = route[route_i][0] - 1;
       var w = route[route_i][1] - 1;
       adj[v][w] = 1;
       adj[w][v] = 1;
    }
    for (var i = 0; i < n; i++) {
        if (marked[i] == 0) {
            conn_num = 0;
            dfs(i);
            ans = conn_num>ans ? conn_num : ans;
        }
    }
    console.log(ans);
}
