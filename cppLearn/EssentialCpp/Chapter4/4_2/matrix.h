/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-11-22 14:13:52
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-11-22 14:17:47
 * @FilePath: \EssentialCpp\Chapter4\4_2\matrix.h
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Matrix
{
public:
    Matrix(int row, int col);
    Matrix(const Matrix &rhs);

    ~Matrix();

private:
    int _row, _col;
    double *_pmat;
};
