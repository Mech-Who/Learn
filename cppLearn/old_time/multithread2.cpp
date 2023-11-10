#include <iostream>
#include <thread>
#include <map>
#include <chrono>

using namespace std::chrono_literals;
using namespace std::this_thread;

void RefreshForecast(std::map<std::string, int> forecastMap)
{
    std::cout << "Refreshing forecasts..." << std::endl;
    while (true)
    {
        for (auto &item : forecastMap)
        {
            item.second++;
            std::cout << item.first << "-" << item.second << std::endl;
        }
        sleep_for(2000ms);
    }
}

int main()
{
    std::map<std::string, int> forecastMap = {
        {"New York", 15},
        {"Mumbai", 20},
        {"Berlin", 18}};
    std::thread bgWorker(RefreshForecast, forecastMap);
    bgWorker.join();
    system("pause>nul");
}