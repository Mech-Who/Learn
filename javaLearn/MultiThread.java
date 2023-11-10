import java.util.concurrent.*;

public class MultiThread{
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor(2);
        executor.execute(new Runnable(){
            @Override
            public void run(){
                try{
                    ServerSocket ss = new ServerSocket(3000);
                    ss.setSoTimeout(10000);
                    ss.accept();
                    DataInputStream dis = new DataInputStream(ss.getInputStream());
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