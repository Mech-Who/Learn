import java.util.concurrent.*;
import java.net.*;
import java.io.*;

public class MultiThread{
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        executor.execute(new Runnable(){
            @Override
            public void run(){
                try{
                    ServerSocket ss = new ServerSocket(3000);
                    ss.setSoTimeout(10000);
                    Socket s = ss.accept();
                    DataInputStream dis = new DataInputStream(s.getInputStream());
                    int status = dis.read();
                    while (status > 0){
                        System.out.print(status);
                    }
                }catch(Exception e){
                    e.printStackTrace();
                }
            }
        });
        executor.execute(new Runnable(){
            @Override
            public void run(){
                try{
                    DatagramSocket ds = new DatagramSocket();
                    String str = "Hello World";
                    InetAddress ip = InetAddress.getByName("localhost");
                    DatagramPacket dp = new DatagramPacket(str.getBytes(), str.length(), ip, 3000);
                    ds.send(dp);
                    ds.close();
                }catch(Exception e){
                    e.printStackTrace();
                }
            }
        });
        executor.shutdown();
    }
}