/**
 * Created by vovanostm on 04.09.16.
 */

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Arrays;

public class Quiz {
    public static void main(String[] args) throws Exception {
        int[] digest = {0,1};
        for (int a : digest)
            for (int b : digest)
                for (int c : digest)
                    for (int d : digest){



                }
//        System.out.println(flipBit(3,1));
//        System.out.println(charExpression(1));
//        System.out.println(isPowerOfTwo(9));
//        System.out.println(  'A' + "12" );
        String[] arr1={"Городничий","Аммос Федорович","SDsdsd","SDsdssdsdd"}, arr2={"Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.", "Аммос Федорович: Как ревизор?" };
        System.out.println(printTextPerRole(arr1, arr2));
        int[] arr={};
        sqrt(23);
        sum();
        System.out.println(getCallerClassAndMethodName());
    }
    public static boolean booleanExpression(boolean a, boolean b, boolean c, boolean d) {
        return (((a&b)^(a&c)^(a&d))||((b&c)^(b&d)^(b&a))||((c&b)^(c&a)^(c&d)))&(!(a&b&c&d));
    }
    public static boolean doubleExpression(double a, double b, double c) {
        return Math.abs((a + b) - c) < 1E-4;
    }
    public static int flipBit(int value, int bitIndex) {
        int pwdTwo = 1;
        pwdTwo = pwdTwo << (bitIndex-1);
        value = value ^ pwdTwo;
        return value; // put your implementation here
    }
    public static char charExpression(int a) {
        return (char)('\\' + a);
    }
    public static boolean isPowerOfTwo(int value) {
        System.out.println(Integer.bitCount(value));
        return Integer.bitCount(value)==1; // you implementation here
    }
    public static boolean isPalindrome(String text) {
        text = text.toLowerCase().replaceAll("[^a-z0-9]", "");
        String first = text.substring(0,text.length()/2);
        System.out.println(first);
        StringBuilder second = new StringBuilder(text.substring(text.length()-text.length()/2,text.length()));
        System.out.println(second);
        return first.equals(second.reverse().toString()); // your implementation here
    }

    public static BigInteger factorial(int value) {
        BigInteger fac = BigInteger.valueOf(1);
        for (int i = 1; i<= value; i++) {
            fac = fac.multiply(BigInteger.valueOf(i));
        }

        return fac; // your implementation here
    }

    public static int[] mergeArrays(int[] a1, int[] a2) {
        int[] mrg = new int[a1.length+a2.length];
        for (int i = 0; i< a1.length; i++){
            mrg[i] = a1[i];
        }
        for (int i = 0; i< a2.length; i++){
            mrg[i+a1.length] = a2[i];
        }
        Arrays.sort(mrg);
        return  mrg;// your implementation here
    }
    private static String printTextPerRole(String[] roles, String[] textLines) {
        StringBuilder[] ans = new StringBuilder[roles.length];
        for (int i = 0; i < roles.length; i++){
            ans[i] = new StringBuilder("");
            ans[i].append(roles[i]).append(":\n");
        }
        for (int i = 0; i < textLines.length; i++)
        {
            for (int j = 0; j < roles.length; j++) {
                if (textLines[i].startsWith(roles[j]+":")) {
                    ans[j].append(i+1).append(textLines[i].replaceFirst(roles[j]+":",")")).append("\n");
                }
            }
        }
        StringBuilder out = new StringBuilder("");
        for (int i = 0; i < roles.length-1; i++){
            out.append(ans[i]).append("\n");
        }
        out.append(ans[roles.length-1]);
        return out.toString();
    }
    public static class A extends java.lang.Object{
        public int gr = 56;
        public A(){

        }
    }
    public static class B2 extends A{
        public int fr = 56;
        public B2(){}
    }
    public static void sum(){
        sqrt(23);
    }
    public static double sqrt(double x) {
        double ans = 0;
        if (x < 0) throw new IllegalArgumentException("Expected non-negative number, got "+x);
        else ans = Math.sqrt(x);
        System.out.println(getCallerClassAndMethodName());
        return ans; // your implementation here
    }
    public static String getCallerClassAndMethodName() {
        StackTraceElement[] paths = new Throwable().getStackTrace();
        if (paths.length <= 2) return null;
        else return paths[2].getClassName()+"#"+paths[2].getMethodName();
    }
}
