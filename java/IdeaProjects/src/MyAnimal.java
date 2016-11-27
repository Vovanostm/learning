/**
 * Created by vovanostm on 21.10.16.
 */
import java.io.*;
import java.nio.ByteBuffer;
import java.util.Objects;
public class MyAnimal {
    public static Animal[] deserializeAnimalArray(byte[] data) {
        // your implementation here

        try(ObjectInputStream ois = new ObjectInputStream(new BufferedInputStream(new ByteArrayInputStream(data)))){
            int i = 0;
//            int length = ois.readInt();
            Animal[] ans = new Animal[2];
            while (i<2){
//                ans[i] = (Animal)ois.readObject();
                i++;
            }
            return ans;
        }
        catch (Exception e){
            throw new java.lang.IllegalArgumentException(e);

        }
        //return null;

    }
    public static void main(String[] args){
       Animal an1 = new Animal("Hello");
        byte[] my_data = new byte[100];
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        try {
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeInt(1);
            oos.writeObject(an1);
            oos.write(my_data);
            baos.write(my_data);
        }
        catch (Exception e){
            System.out.println("error");
        }
        System.out.println(my_data[1]);
        System.out.println(deserializeAnimalArray(my_data));
    }




}
class Animal implements Serializable {
    private final String name;

    public Animal(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Animal) {
            return Objects.equals(name, ((Animal) obj).name);
        }
        return false;
    }
}
