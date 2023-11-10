import java.net.*;
import java.io.*;

public class TCPReceiver implements Runnable{
    public static void main(String[] args){
        try{
            ServerSocket ss = new ServerSocket(3000);
            ss.setSoTimeout(10000);
            ss.accept();
            DataInputStream dis = new DataInputStream(ss.getInputStream());
        }catch(Exception e){
            System.out.error(e);
        }
    }  
}