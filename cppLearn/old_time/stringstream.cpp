#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;

/**
 * @brief list all stream classes 
 * @return system error code
 */
int main()
{
    /// read and write from stream(console?)
    istream* is;
    ostream* os;
    iostream* ios;

    wistream* wis;
    wostream* wos;
    wiostream* wios;

    /// read and write from file
    ifstream ifs;
    ofstream ofs;
    fstream fios;

    wifstream wifs;
    wofstream wofs;
    wfstream wfs;

    /// read and write from string
    istringstream iss;
    ostringstream oss;
    stringstream ss;

    wistringstream wiss;
    wostringstream woss;
    wstringstream wss;

    return 0;
}