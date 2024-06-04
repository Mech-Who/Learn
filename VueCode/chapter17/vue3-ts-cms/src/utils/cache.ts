// src/utils/caches.ts 本地缓存工具类，是对window.localStorage的封装
class LocalCache {
  setCache(key: string, value: any) {
    // 先将value转成 JSON String，再存储到 localStorage 中
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value) // 转成 JSON 对象格式
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
