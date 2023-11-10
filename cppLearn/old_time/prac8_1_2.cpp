#include <iostream>
using namespace std;

istream& func(istream& is)
{
    auto old_state = is.rdstate();
    is.clear();
    int s;
    // iostate sequence: goodbit, failbit, eofbit, badbit
    while(true){
        is >> s;
        if(is.eof()){
            break;
        }
        if(is.fail())
        {
            // 置位错误标志
            is.clear(is.rdstate()&~is.failbit&~is.badbit);
            // 略过错误字符
            is.ignore(1);
        }
        cout << s << endl;
    }
    
    is.setstate(old_state);
    return is;
}

int main()
{
    /**
     * @brief test the function of func
    */
    cout << "Please input some words: " << endl;

    istream& is = func(cin);
    
    cout << "function over." << endl;

    /**
     * @brief test the state of stream
    */
/*     int num=0;
    cin.clear();
    auto old_state = cin.rdstate();
    string ss="0000";
    for(int i=0;i<5;++i){
        cin.clear();
        switch(i){
            case 0:
                old_state = old_state;
                break;
            case 1:
                ss="1000";
                old_state = old_state^~cin.goodbit;
                break;
            case 2:
                ss="0100";
                old_state = old_state^~cin.failbit;
                break;
            case 3:
                ss="0010";
                old_state = old_state^~cin.eofbit;
                break;
            case 4:
                ss="0001";
                old_state = old_state^~cin.badbit;
                break;
        }
        cout << "gfeb-" << ss << ":" << endl;
        cin.setstate(old_state);
        if(cin>>num){
            cout << "normal"<< endl;
        }else{
            cout << "error" << endl;
        }
    } */
    return 0;
}