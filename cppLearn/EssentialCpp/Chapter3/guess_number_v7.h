/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-10-31 12:49:59
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-10-31 20:28:30
 * @FilePath: \EssentialCpp\Chapter1\guess_number.cpp
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>
#include <fstream>

const int seq_size = 8;
const int seq_count = 6;

extern std::vector<int> fib_seq;
extern std::vector<int> lucas_seq;
extern std::vector<int> pell_seq;
extern std::vector<int> tri_seq;
extern std::vector<int> squa_seq;
extern std::vector<int> penta_seq;

extern std::vector<int> *seq_addrs[seq_count];

template<typename elemType>
extern bool is_elem(std::vector<elemType> &vec, elemType elem);

extern bool grow_vec(std::vector<int>&, int);