import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        //  Return the index of the catcher who gets the catch, or -1 if no one gets the catch.
        int n = in.nextInt();
        int x = in.nextInt();
        int[] X = new int[n];
        int[] dist = new int[n];
        int min = 9999999;
        int minX = -1;
        for(int X_i=0; X_i < n; X_i++){
            X[X_i] = in.nextInt();
            dist[X_i] = X[X_i] >= x ? X[X_i] - x : x - X[X_i];
        }
        int[] V = new int[n];
        int[] seconds = new int[n];
        boolean flag = false;
        for(int V_i=0; V_i < n; V_i++){
            V[V_i] = in.nextInt();
            int tmp = dist[V_i]/V[V_i];
            if (min == tmp) {
                flag = true;
            } else if (min > tmp) {
                min = tmp;
                minX = V_i;
                flag = false;
            }
        }
        if(flag) {
            System.out.println(-1);
        } else {
            System.out.println(minX);
        }
    }
}
