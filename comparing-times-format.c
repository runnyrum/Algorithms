#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

char* timeCompare(char* t1, char* t2){
    // Complete this function
}

int main() {
    int q;
    scanf("%d", &q);
    for(int a0 = 0; a0 < q; a0++){
        char* t1 = (char *)malloc(512000 * sizeof(char));
        char* t2 = (char *)malloc(512000 * sizeof(char));
        scanf("%s %s", t1, t2);
        int result_size;
        char* result = timeCompare(t1, t2);
        printf("%s\n", result);
    }
    return 0;
}
