// 编写表单验证规则
export const rules = {
  // key 需与 :model 绑定对象（account）属性的键名一样
  name: [
    {
      required: true,
      message: '用户名是必传内容~', // 错误提示
      trigger: 'blur' // 失去焦点触发验证
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/, // 通过正则来验证表单
      message: '用户名必须是5-10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ]
}
