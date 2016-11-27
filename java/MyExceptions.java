class MyExceptions{
    public static void main(){
        System.out.println(getCallerClassAndMethodName());
    }
    public static String getCallerClassAndMethodName() {
        for (StackTraceElement arr:new Throwable().getStackTrace()){
            System.out.println(arr.getMethodName());
        }
        return "asa";
    }
}
