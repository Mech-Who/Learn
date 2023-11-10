package main

import (
	"fmt"
	// "io"
	"io/ioutil"
	"net/http"
	"os"
	"time"
)

func main() {
	start := time.Now()
	ch := make(chan string)
	for _, url := range os.Args[1:] {
		go fetch(url, ch)	// 启动一个goroutine
	}
	for range os.Args[1:] {
		fmt.Println(<-ch)	// 从通道ch接收数据并打印
	}
	fmt.Printf("%.2fs elapsed\n", time.Since(start).Seconds())
}

// 测试数据命令
// go run goroutine_get_url.go google.com youtube.com baidu.com bilibili.com facebook.com qq.com twitter.com zhihu.com wikipedia.org amazon.com instagram.com linkedin.com reddit.com whatsapp.com openai.com yahoo.com bing.com taobao.com 163.com yandex.ru xvideos.com live.com pornhub.com microsoft.com vk.com zoom.us github.com jd.com weibo.com google.com.hk tiktok.com canva.com csdn.net fandom.com office.com t.co naver.com apple.comsina.com.cn aliexpress.com microsoftonline.com yahoo.co.jp xhamster.com paypal.com iqiyi.com spankbang.com pinterest.com mail.ru ebay.com douban.com msn.com imdb.com amazon.in netflix.com adobe.com telegram.org dzen.ru quora.com stackoverflow.com sohu.com spotify.com aliyun.com xnxx.com 1688.com myshopify.com tmall.com indeed.com deepl.com twimg.com pixiv.net feishu.cn duckduckgo.com amazon.co.jp google.co.in msn.cn tencent.com freepik.com etsy.com amazon.co.uk booking.com imgur.com jianshu.com
func fetch(url string, ch chan<- string) {
	start := time.Now()
	// 使用测试数据或是输入同样格式的域名时需要把以下代码启用，反之无需启用
	url = "https://www." + url
	resp, err := http.Get(url)
	if err != nil {
		ch <- fmt.Sprint(err)	// 发送到通道ch
		return
	}

	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		ch <- fmt.Sprintf("while reading %s: %v\n", url, err)
		return
	}
	err = ioutil.WriteFile("url_content.txt", b, 0666)
	if err != nil {
		ch <- fmt.Sprintf("while reading %s: %v\n", url, err)
		return
	}
	// nbytes, err := io.Copy(ioutil.Discard, resp.Body)	// 写入ioutil.Discard流用于丢弃数据
	resp.Body.Close()	// 不要泄露资源
	if err != nil {
		ch <- fmt.Sprintf("while reading %s: %v\n", url, err)
		return
	}
	secs := time.Since(start).Seconds()
	// ch <- fmt.Sprintf("%.2fs  %7d  %s", secs, nbytes, url)
	ch <- fmt.Sprintf("%.2fs  %s", secs, url)
}
