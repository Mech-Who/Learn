import hyRequest from './index';

interface IResponseData {
  args: any;
  headers: any;
  orgin: string;
  url: string;
}

// 2. 发起网络请求, <IResponseData>用于指定res.data对象类型
hyRequest
  .request<IResponseData>({
    url: "/get",
    method: "get",
  })
  .then((res) => {
    console.log(res.data); // TypeScript会自动推导出res.data的类型为IResponseData
  })