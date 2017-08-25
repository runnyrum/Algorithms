//https://www.hackerrank.com/contests/rookierank-3/challenges/find-the-bug
/*
Consider an  grid where the top-left coordinate is  and the bottom-right coordinate is . We define the contents of the grid as an array of  strings of length , where the index  of a string corresponds to a row in the grid and the index  of a character in a string corresponds to a column. Each string consists of the characters O and/or X, where an O denotes an empty cell and an X denotes a cell containing a bug.
Given an array of strings defining a grid with  bug in it, print the bug's location in the format r,c (where  is the row and  is the column).

Input Format

The first line contains an integer denoting  (the length and width of the grid).
Each line  of the  subsequent lines contains a string of  characters describing row  in the grid.

Constraints

Output Format

Print the bug's location in the format r,c, where  is its row and  is its column.

Note: If using the code stubs in the editor, return an array of two integers where index  contains the value of  and index  contains the value of .

Sample Input 0

5
OOOOO
OXOOO
OOOOO
OOOOO
OOOOO
Sample Output 0

1,1
*/
#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int* findTheBug(int grid_size, char** grid, int *result_size){
    // Complete this function
}

int main() {
    int n;
    scanf("%d", &n);
    char* *grid = malloc(sizeof(char*) * n);
    for(int grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = (char *)malloc(10240 * sizeof(char));
       scanf("%s",grid[grid_i]);
    }
    // Return an array containing [r, c]
    int result_size;
    int* result = findTheBug(grid);
    for(int result_i = 0; result_i < result_size; result_i++) {
        if(result_i) {
            printf(",");
        }
        printf("%d", result[result_i]);
    }
    puts("");


    return 0;
}
