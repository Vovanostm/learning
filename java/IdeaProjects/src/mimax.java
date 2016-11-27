/**
 * Created by vovanostm on 20.10.16.
 */
import java.util.*;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import  java.util.function.BiConsumer;
public class mimax {
    public static void main(String[] args){

        ArrayList<Integer> list = new ArrayList<>();
        list.add(12);
        list.add(20);
        list.add(28);
        BiConsumer<Integer, Integer> tester1 = (min, max) -> {
        };
        Stream<Integer> str = Stream.iterate(1,n->n+1).limit(10).peek(e -> System.out.println("Filtered value: " + e));
        findMinMax(str,Integer::compareTo,tester1);
        System.out.println("Filtered value:");
        int max=0;
        Stream.iterate(1, n -> 1+n).limit(10).peek(e -> Integer.compare(e,max)).peek(e -> System.out.println("Filtered value: " + e)).count();
    }
    public static <T> void findMinMax(
            Stream<? extends T> stream,
            Comparator<? super T> order,
            BiConsumer<? super T, ? super T> minMaxConsumer) {
          class minMax{
            T max;
            T min;
            minMax(){
                max=null;
                min=null;
            }
            void setMax(T new_max){
                if (max==null) max = new_max;
                else{
                    if (order.compare(max,new_max)<0) max = new_max;
                }
            }
            void setMin(T new_min) {
                if (min == null) min = new_min;
                else {
                    if (order.compare(min, new_min) > 0) min = new_min;
                }
            }

        }
        minMax my_ans = new minMax();;
        if(stream.peek(e -> my_ans.setMax(e)).peek(e->my_ans.setMin(e)).count()==0) minMaxConsumer.accept(null, null);
        else minMaxConsumer.accept(my_ans.min, my_ans.max);

    }
}
