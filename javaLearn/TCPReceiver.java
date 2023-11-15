import java.net.*;
import java.io.*;

public class TCPReceiver implements Runnable{
    public static void main(String[] args){
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
            System.err.println(e);
        }
    }
    
    @Override
    public void run(){

    }
}