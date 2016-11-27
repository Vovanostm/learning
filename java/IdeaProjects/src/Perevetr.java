/**
 * Created by vovanostm on 18.10.16.
 */
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;


public class Perevetr {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        List<Integer> intList = new ArrayList<>();
        while(sc.hasNext()){
            if (sc.hasNextInt()){
                intList.add(Integer.valueOf(sc.nextInt()));
            }
            else{
                sc.next();
            }
        }
        Iterator <Integer> it = intList.iterator();
        int counter = 0;
        List<Integer> ansList = new ArrayList<>();
        while(it.hasNext()){
            Integer element = it.next();
            if (counter % 2 == 1){
                ansList.add(element);
            }
            counter++;
        }
        for(int i = ansList.size()-1; i>=0; i--){
            System.out.print(ansList.get(i));
        }

    }
}