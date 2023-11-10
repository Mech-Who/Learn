#include <opencv2/opencv.hpp>
#include <opencv2/dnn/dnn.hpp>

using namespace cv;
using namespace cv::dnn;

int main()
{
    // 读取预训练模型
    String modelFile = "pose_deploy.prototxt";
    String weightsFile = "pose_iter_584000.caffemodel";
    Net net = readNetFromCaffe(modelFile, weightsFile);

    // 读取图像并转换为blob格式
    Mat img = imread("test.jpg");
    Mat inputBlob = blobFromImage(img, 1.0 / 255, Size(368, 368), Scalar(0, 0, 0), false, false);

    // 将blob输入到模型中进行预测
    net.setInput(inputBlob);
    Mat output = net.forward();

    // 解析输出结果并绘制骨骼线
    int nParts = output.size[1];
    int nPairs = nParts - 1;
    int H = output.size[2];
    int W = output.size[3];
    std::vector<Point> points(nParts);

    for (int n = 0; n < nParts; n++)
    {
        Mat heatMap(H, W, CV_32F, output.ptr(0, n));
        Point maxLoc;
        double maxVal;
        minMaxLoc(heatMap, 0, &maxVal, 0, &maxLoc);
        points[n] = maxLoc;
    }

    std::vector<int> pairs = {
        1, 2, 2, 3, 3, 4, 1, 5, 5, 6, 6, 7, 1, 8, 8, 9, 9, 10,
        1, 11, 11, 12, 12, 13, 1, 0, 0, 14, 14, 16, 0, 15, 15, 17
    };

    for (int n = 0; n < nPairs; n++)
    {
        int partA = pairs[n * 2];
        int partB = pairs[n * 2 + 1];
        if (points[partA].x <= 0 || points[partA].y <= 0 || points[partB].x <= 0 || points[partB].y <= 0)
            continue;
        line(img, points[partA], points[partB], Scalar(0, 255, 255), 2);
    }

    // 显示结果图像
    imshow("Skeleton Tracking", img);
    waitKey(0);
    destroyAllWindows();

    return 0;
}
