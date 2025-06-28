using System;

namespace Learn
{
    class Program{
        static void Main(){
            TemperatureDisplay display = new TemperatureDisplay();
            TemperatureAlarm alarm = new TemperatureAlarm();
            TemperatureSensor sensor = new TemperatureSensor(ref display, ref alarm);

            double[] DayTemperature = [35.6, 33.5, 27.5, 23.9, 20.1, 10.5, 7.3, 2.1, 0.5, -1.3, -4.6];
            foreach(double newTemp in DayTemperature){
                sensor.ReadTemperature(newTemp);
                Thread.Sleep(1000); // 当前线程休眠1秒
            }
        }
    }


    class TemperatureSensor{
        private double LastTemperature {get; set;}
        private TemperatureDisplay Display {get; set;}
        private TemperatureAlarm Alarm {get; set;}
        private Action<double, double> OnTemperatureChanged;
        public TemperatureSensor(ref TemperatureDisplay display, ref TemperatureAlarm alarm)
        {
            (Display, Alarm) = (display, alarm);
            LastTemperature = 0.0f;
            OnTemperatureChanged += Display.DisplayTemperature;
            OnTemperatureChanged += Alarm.AlarmTemperature;
        }

        public void ReadTemperature(double newTemperature){
            if ((newTemperature-LastTemperature) < 1e-9)
                OnTemperatureChanged?.Invoke(newTemperature, LastTemperature);
            LastTemperature = newTemperature;
        }
    }

    class TemperatureDisplay{
        public void DisplayTemperature(double newTemperature, double oldTemperature){
            Console.WriteLine($"Current Temperature: {newTemperature}, Last Temperature: {oldTemperature}.");
        }
    }
    class TemperatureAlarm{
        public void AlarmTemperature(double newTemperature, double oldTemperature){
            if (newTemperature > 30.0f)
                Console.WriteLine($"Alarm: Temperature is {newTemperature} (Too high!)");
            else if(newTemperature < 0.0f)
                Console.WriteLine($"Alarm: Temperature is {newTemperature} (Too low!)");
        }
    }
}