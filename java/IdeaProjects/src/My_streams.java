/**
 * Created by vovanostm on 20.10.16.
 */
import java.util.stream.IntStream;
import java.util.Scanner;
public class My_streams {
    public static void main(String[] args){
        pseudoRandomStream(13);
    }
    public static IntStream pseudoRandomStream(int seed) {
            return IntStream.iterate(seed, n -> (int) Math.pow(n, 2) / 10 % 1000).limit(seed);
    }
}
