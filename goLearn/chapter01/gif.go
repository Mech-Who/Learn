package main

import (
	"image"
	"image/color"
	"image/gif"
	"net/http"
	"io"
	"math"
	"math/rand"
	"os"
	"time"
	"log"
	"strconv"
)

var green = color.RGBA{0x00, 0xff, 0x00, 0xff}
var red = color.RGBA{0xff, 0x00, 0x00, 0xff}
var blue = color.RGBA{0x00, 0x00, 0xff, 0xff}

var palette = []color.Color{color.White, color.Black, red, green, blue}

const (
	whiteIndex 	= 0  // 白色索引
	blackIndex 	= 1  // 黑色索引
	redIndex 	= 2	// 红色索引
	greenIndex 	= 3  // 绿色索引
	blueIndex 	= 4	// 蓝色索引
)

/*
lissajous产生随机利萨茹图形的GIF动画
go run gif.go web -> localhost:8000 查看生成的图像
go run gif.go -> 在控制台输出图像数据（基本就是乱码）
*/
func main() {
	rand.Seed(time.Now().UTC().UnixNano())
	// 根据参数是否有web判断是用web显示还是控制台输出
	// web显示
	if len(os.Args) > 1 && os.Args[1] == "web" {
		handler := func(w http.ResponseWriter, r *http.Request) {
			if err := r.ParseForm(); err != nil {
				log.Print(err)
			}
			var new_cycles int = 5
			if r.Method == "GET" && r.ParseForm() == nil {
				str_cycles := r.Form.Get("cycles")
				if str_cycles != "" {
					cycles, _ := strconv.Atoi(str_cycles)
					new_cycles = cycles
				}
			}
			lissajous(w, new_cycles)
		}
		http.HandleFunc("/", handler)
		log.Fatal(http.ListenAndServe("localhost:8000", nil))
		return
	}
	// 控制台输出
	lissajous(os.Stdout, 5)
}

func lissajous(out io.Writer, cycles int) {
	const (
		// cycles 	= 5		// 完整的x振荡器变化的个数
		res		= 0.001	// 角度分辨率
		size	= 100	// 图像画布包含 [-size..+size]
		nframes	= 64	// 动画中的帧数
		delay	= 8		// 以10ms为单位的帧间延迟
	)
	freq := rand.Float64() * 3.0	// y振荡器的相对频率
	anim := gif.GIF{LoopCount: nframes}
	phase := 0.0	// phase difference
	for i := 0; i < nframes; i++ {
		rect := image.Rect(0, 0, 2*size+1, 2*size+1)
		img := image.NewPaletted(rect, palette)
		// 绘制背景
		for j := 0; j < 2*size+1; j++ {
			for k := 0; k < 2*size+1; k++{
				img.SetColorIndex(j, k, blueIndex)
			}
		}
		// 绘制利萨茹图像
		for t := 0.0; t < float64(cycles) * 2 * math.Pi; t += res {
			x := math.Sin(t)
			y := math.Sin(t*freq + phase)
			img.SetColorIndex(size+int(x*size+0.5), size+int(y*size+0.5), redIndex)
		}
		phase += 0.1
		anim.Delay = append(anim.Delay, delay)
		anim.Image = append(anim.Image, img)
	}
	gif.EncodeAll(out, &anim)	// 注意：忽略编码错误
}
