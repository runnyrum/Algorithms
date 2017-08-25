#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main() {
    int n;
    int m;
    scanf("%d %d", &n, &m);
    int route[m][2];
    for(int route_i = 0; route_i < m; route_i++){
       for(int route_j = 0; route_j < 2; route_j++){
          scanf("%d",&route[route_i][route_j]);
       }
    }
    // Write Your Code Here
    return 0;
}
