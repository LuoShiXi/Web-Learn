<template>
  <body>
    <div class="container">
      <!-- 导航栏 -->
      <div class="navigation">
          <ul>
              <li><a href="#">链接1</a></li>
              <li><a href="#">链接2</a></li>
              <li><a href="#">链接3</a></li>
              <li><a href="#">链接4</a></li>
              <li><a href="#">链接5</a></li>
              <li><a href="#">链接6</a></li>
          </ul>
      </div>
      <!-- 主体内容 -->
      <div class="main">
          <!-- 左边信息栏 -->
          <div class="sideleft">
              <h1>Hello World</h1>
              <h3>HHH WWW</h3>
              <p>我的第一个web项目，你相信吗？！</p>
              <p>反正我信了，哈哈哈</p>
          </div>
          <!-- 右侧登录界面 -->
          <div class="sideright">
              <div class="index">
                  <div class="lqrcode">
                    <img src="../assets/image/loginqrcode.png">
                  </div>
                  <form action="#" method="GET">
                      <p class="instyle">用户名：</p>
                      <input type="text" placeholder="请输入您的账号或手机号" v-model="username">
                      <p class="instyle">密码：</p>
                      <input type="text" placeholder="请输入6位密码">
                      <!-- <input type="submit" value="登录" name="login"> -->
                      <router-link to='first'>
                        <button @click="tofather(); loginok()" class="test-one">登录</button>
                      </router-link>
                      <br>
                      <p class="cbstyle"><input type="checkbox" name="rempas"> 记住密码</p>
                      <p class="cstyle">忘记密码</p>
                      <br><br>
                      <p class="cstyle">没有账号？<a href="index.html">立即注册</a></p>
                  </form>
              </div>
          </div>
      </div>
      <!-- 底部设置 -->
      <div class="footer">
          <ul>
              <li><a href="#">关于我们</a></li>
              <li><a href="#">版权所有</a></li>
              <li><a href="#">上海市长宁区凌空SOHO</a></li>
          </ul>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      username: '123'
    }
  },
  methods: {
    tofather () {
      // 通过$emit进行触发
      // 第一个参数为父组件监听的事件名，后续参数为传递给父组件的方法的参数
      this.$emit('tofather', '登陆成功');
      // this.$router.push({path: '/hello'});
    },
    loginok () {
      this.$emit('loginok', this.username);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/child.scss"
</style>
