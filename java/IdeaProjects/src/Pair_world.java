import java.util.function.Supplier;

/**
 * Created by vovanostm on 20.10.16.
 */
class Pair <T,U> {
    private final T first;
    private final U second;
    private Pair(T first, U second){
        this.first = first;
        this.second = second;
    }
    public T getFirst(){
        return first;
    }
    public U getSecond(){
        return second;
    }
    public boolean equals(Pair <T,U> pair2){
        boolean var1, var2;
        if (first == null){
            var1 = pair2.getFirst()==null?true:false;
        }
        else var1 = first.equals(pair2.getFirst());
        if (second == null){
            var2 = pair2.getSecond()==null?true:false;
        }
        else var2 = second.equals(pair2.getSecond());
        return var1&&var2;
    }
    public static <T,U> Pair<T,U> of( T first, U second){
        return new Pair(first, second);
    }
    @Override
    public int hashCode(){
        int hash1 = first==null?0:first.hashCode();
        int hash2 = second==null?0:second.hashCode();
        return hash1 + hash2;
    }
}

public class Pair_world {
    public static void main(String[] args){
        Pair<Integer, String> pair = Pair.of(1, "hello");
        Pair<Integer, String> pair2 = Pair.of(null, null);
        Integer i = pair2.getFirst(); // 1
        String s = pair2.getSecond(); // "hello"
        System.out.println(i);
        System.out.println(s);

        boolean mustBeTrue = pair.equals(pair2); // true!
        boolean mustAlsoBeTrue = pair.hashCode() == pair2.hashCode(); // true!
        System.out.println(mustBeTrue);
        System.out.println(mustAlsoBeTrue);
    }
}
