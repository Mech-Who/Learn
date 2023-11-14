// 编译时需要添加 -mfma 选项

#include <immintrin.h>
#include <stdio.h>
#include <pthread.h>
#include <time.h>

#define MATRIX_SIZE 2048
#define NUM_THREAD 24

struct Param
{
	float matA[MATRIX_SIZE][MATRIX_SIZE];
	float matB[MATRIX_SIZE][MATRIX_SIZE];
	float matC[MATRIX_SIZE][MATRIX_SIZE];
	float matD[MATRIX_SIZE][MATRIX_SIZE];
};

float matA[MATRIX_SIZE][MATRIX_SIZE];
float matB[MATRIX_SIZE][MATRIX_SIZE];
float matC[MATRIX_SIZE][MATRIX_SIZE];
float matD[MATRIX_SIZE][MATRIX_SIZE];

int step = 0;

void *AVX(void *args)
{
	Param *param = (Param *)args;
	__m256 vecA, vecB, vecC;
	int thread = step++;
	// 任务分配
	for (int i = thread * MATRIX_SIZE / NUM_THREAD;
		 i < (thread + 1) * MATRIX_SIZE / NUM_THREAD; i++)
	{
		// 赋初值
		for (int j = 0; j < MATRIX_SIZE; j++)
		{
			(param->matC)[i][j] = 0.0f;
		}
		//
		for (int j = 0; j < MATRIX_SIZE; j++)
		{
			vecA = _mm256_set1_ps((param->matA)[i][j]);
			for (int k = 0; k < MATRIX_SIZE; k += 8)
			{
				vecB = _mm256_loadu_ps(&(param->matB)[j][k]);
				vecC = _mm256_loadu_ps(&(param->matC)[i][k]);
				vecC = _mm256_fmadd_ps(vecA, vecB, vecC);
				_mm256_storeu_ps(&(param->matC)[i][k], vecC);
			}
		}
	}
	return 0;
}

void Normal(Param *param)
{
	for (int i = 0; i < MATRIX_SIZE; i++)
	{
		for (int j = 0; j < MATRIX_SIZE; j++)
		{
			for (int k = 0; k < MATRIX_SIZE; k++)
			{
				param->matD[i][j] += param->matA[i][k] * param->matB[k][j];
			}
		}
	}
}

// 赋初值
void generate_matrix(Param *param)
{
	for (int i = 0; i < MATRIX_SIZE; i++)
	{
		for (int j = 0; j < MATRIX_SIZE; j++)
		{
			param->matA[i][j] = i + j * 2;
			param->matB[i][j] = i * 2 + j;
			param->matC[i][j] = 0.0f;
			param->matD[i][j] = 0.0f;
		}
	}
}

int main()
{
	pthread_t threads[NUM_THREAD];
	clock_t start, end, sum = 0, start1, end1, sum1 = 0;
	Param *abc = new Param();

	// 优化运算
	generate_matrix(abc);

	start = clock();
	for (int i = 0; i < NUM_THREAD; i++)
	{
		pthread_create(&threads[i], NULL, AVX, abc);
	}
	for (int i = 0; i < NUM_THREAD; i++)
	{
		pthread_join(threads[i], NULL);
	}
	end = clock();

	sum = 1000 * (end - start);

	// 普通运算
	generate_matrix(abc);

	start1 = clock();
	Normal(abc);
	end1 = clock();
	sum1 = 1000 * (end1 - start1);

	delete abc;

	printf("线程数 -> %d\n", NUM_THREAD);
	printf("矩阵大小 -> %d\n", MATRIX_SIZE);
	printf("优化运行时间: %lf\n不优化运行时间: %lf", (double)sum / CLOCKS_PER_SEC, (double)sum1 / CLOCKS_PER_SEC);
}
