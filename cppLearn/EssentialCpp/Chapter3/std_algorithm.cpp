int *find(const vector<int> &vec, int value){
    for(int ix=0;ix < vec.size(); ++ix)
        if(vec[ix]==value)
            return &vec[ix];
    return 0;
}

template<typename elemType>
elemType* find2(const vector<elemType> &vec, const elemType value){
    for (int ix=0; ix < vec.size(); ++ix)
        if (vec[ix]==value)
            return &vec[ix];
    return 0;
}