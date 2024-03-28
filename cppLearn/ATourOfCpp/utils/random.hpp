#ifndef __RANDOM_HPP__
#define __RANDOM_HPP__

#include <random>

class Rand_int
{
public:
    Rand_int(int low, int high): dist(low, high) {}
    int operator()() { return dist(re); }
    void seed(int s) { re.seed(s); }
private:
    std::default_random_engine re;
    std::uniform_int_distribution<> dist;
};

#endif