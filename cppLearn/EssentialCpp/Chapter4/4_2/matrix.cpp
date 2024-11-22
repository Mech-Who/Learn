/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-11-22 14:14:04
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-11-22 14:21:34
 * @FilePath: \EssentialCpp\Chapter4\4_2\matrix.cpp
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
#include "matrix.h"

Matrix::Matrix(int row, int col)
    : _row(row), _col(col)
{
    _pmat = new double[row * col];
}

// 主动编写 复制赋值构造函数，避免浅复制的问题（主要针对具有深浅复制问题的成员）
Matrix::Matrix(const Matrix &rhs)
    : _row(rhs._row), _col(rhs._col)
{
    // 主动进行深复制
    int elem_cnt = _row * _col;
    _pmat = new double[elem_cnt];
    for (int ix = 0; ix < elem_cnt; ++ix)
        _pmat[ix] = rhs._pmat[ix];
}

Matrix::~Matrix()
{
    delete[] _pmat;
}