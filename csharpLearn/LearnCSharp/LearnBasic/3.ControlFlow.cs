using System;
using System.Collections.Generic;

// namespace
namespace Learn {
    class Multi{
        public int multi(int num){
            return num>0 ? num * multi(num-1) : 1;
        }
    }

    class ControlFlow{
        public static void ControlFlowMain(){
            Console.WriteLine("1. ");
            Multi n = new Multi();
            int res = n.multi(Convert.ToInt16(Console.ReadLine()));
            Console.WriteLine("Res is {0}", res);

            List<string> names = new List<string>();
            names.Add("Jack");
            names.Add("Mike");
            names.Add("Sarah");

            foreach(string s in names){
                Console.WriteLine(s);
            }
            Console.ReadKey();
        }
    }
}