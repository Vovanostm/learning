import java.util.*;

/**
 * Created by vovanostm on 21.10.16.
 */
public class StreamSchet {
    public static <K, V extends Comparable<V>> SortedMap<K, V>  sortByValues(final Map<K, V> map) {
        Comparator<K> valueComparator =
                new Comparator<K>() {
                    public int compare(K k1, K k2) {
                        int compare =
                                map.get(k2).compareTo(map.get(k1));
                        if (compare == 0)
                            return 1;
                        else
                            return compare;
                    }
                };
        SortedMap<K, V> sortedByValues =
                new TreeMap<K, V>(valueComparator);
        sortedByValues.putAll(map);
        return sortedByValues;
    }
    public static void main(String[] args){
        SortedMap<String, Integer> words = new TreeMap<>();
        Scanner scanner = new Scanner(System.in, "UTF-8").useDelimiter("[^\\p{L}\\p{Digit}]+");
        while(scanner.hasNext()){
            String word = scanner.next().toLowerCase();
            if(words.containsKey(word)) words.put(word,words.get(word)+1);
            else words.put(word,1);
        }
        words = sortByValues(words);
        words.keySet().stream().limit(10).forEach(k -> System.out.println(k));
    }

}
//
//Та же задача - выво слов по ких кол-ву
//        import java.io.BufferedReader;
//        import java.io.InputStreamReader;
//        import java.util.Map;
//        import java.util.TreeSet;
//        import java.util.function.Function;
//        import java.util.stream.Collectors;
//        import java.util.stream.Stream;
//
///**
// * Created by dmitin on 21.10.16.
// */
//public class Main {
//    public static void main(String[] args) {
//        new BufferedReader(new InputStreamReader(System.in))
//                .lines()
//                .flatMap(s -> Stream.of(s.split("[^\\p{L}\\p{Digit}]+")))
//                .map(String::toLowerCase)
//                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
//                .entrySet()
//                .stream()
//                .collect(Collectors.toCollection(() ->
//                        new TreeSet<Map.Entry<String, Long>>(
//                                Map.Entry.<String, Long>comparingByValue()
//                                        .reversed()
//                                        .thenComparing(Map.Entry.comparingByKey())
//                        ) {
//                            @Override
//                            public boolean add(Map.Entry<String, Long> entry) {
//                                if (size() < 10) {
//                                    return super.add(entry);
//                                } else if (comparator().compare(last(), entry) > 0) {
//                                    pollLast();
//                                    return super.add(entry);
//                                } else {
//                                    return false;
//                                }
//                            }
//                        }))
//                .stream()
//                .map(Map.Entry::getKey)
//                .forEachOrdered(System.out::println);
//    }
//}

