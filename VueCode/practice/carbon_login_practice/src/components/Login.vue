<template>
  <video autoplay muted loop id="background-video">
    <source src="../assets/CarbonCredit.webm" type="video/webm">
  </video>
  <div class="main">
    <div class="main-content"></div>
    <div class="side-bar" id="login_board">
      <div class="username">
        账号：<input type="text" v-model.lazy="username" />
      </div>
      <div class="password">
        密码：<input type="text" v-model.lazy="password" />
      </div>
      <div class="validator">
        验证码：<input type="text" v-model.lazy="validate_code" />
        <img src="../assets/logo.png" id="validate_image" alt="" srcset="">
      </div>
      <div class="button_group">
        <button @click="login">登录</button>
        <button @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      validate_code: ""
    }
  },
  watch: {
    username: {
      handler() { },
      validate() { }
    }
  },
  methods: {
    login() {
      console.log(`登录中，账号：${this.username}, 密码：${this.password}, 验证码：${this.validate_code}`);
    },
    register() {
      console.log("跳转到注册页...");
    }
  }
}
</script>

<style scoped>
#background-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.main {
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 1;
}

.main-content {
  width: 70%;
}

.side-bar {
  width: 30%;
  /* 设置占位宽度 */
  outline: 2px solid rgba(237, 252, 242, 0.384);
  /* 设置轮廓线 */
  background-color: rgba(180, 225, 142, 0.435);
  /* 设置背景颜色和透明度 */
  border-radius: 15px;
  /* 设置圆角矩阵 */
  border: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.validator {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

#validate_image {
  height: 25px;
}

.button-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>