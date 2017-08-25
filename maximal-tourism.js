var graph, marked, n=8, ans, conn_num;
function bfs(v) {
    var qu = [];
    qu.push(v);
    while(qu.length > 0) {
        vertex = qu.shift();
        if(marked[vertex] != 1) {
            marked[vertex] = 1;
            conn_num++;
            for (var i=0;i<graph[vertex].length;i++) {
                var next = graph[vertex][i];
                if (marked[next] == 0 && qu.indexOf(next) == -1) {
                    qu.push(next);
                }
            }
        }
    }
}
conn_num = 0, ans = 0;
graph = new Array(n);
marked = new Array(n);
for(var i = 0; i < n; i++) {
    marked[i] = 0;
    graph[i] = [];
}
var input = [[0,1], [6,3], [6,2], [4,7], [0,2]];
for ( var i=0;i<input.length;i++) {
	var v = input[i][0];
	var w = input[i][1];
	if (graph[v].indexOf(w) == -1 && v != w) graph[v].push(w);
	if (graph[w].indexOf(v) == -1 && v != w) graph[w].push(v);
}
console.log(graph);
debugger;
while(marked.indexOf(0) != -1) {
    var v = marked.indexOf(0);
    conn_num = 0;
    bfs(v);
    ans = conn_num>ans ? conn_num : ans;
}
console.log(ans);
