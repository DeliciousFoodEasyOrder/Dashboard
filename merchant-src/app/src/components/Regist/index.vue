<template lang="pug">
  div.positioner
    div.container
      div(class="logo")
      div(class="app-name")
        span 好吃易点
      el-form(:model="form", :rules="rules", ref="form")
        el-form-item(prop="phone")
          el-input(v-model="form.phone" type="text" placeholder="手机号码")
        el-form-item(prop="email")
          el-input(v-model="form.email" type="text" placeholder="邮箱")
        el-form-item(prop="password")
          el-input(v-model="form.password" type="password" placeholder="密码")
        el-form-item(prop="reEnterPassword")
          el-input(v-model="form.reEnterPassword" type="password" placeholder="确认密码")
        el-form-item
          el-button.button(type="primary" @click="submit") 注册
      div(class="hint")
        span 已有账户？
        router-link(:to="{name: 'Login'}") 登录
</template>
<script>
export default{
  data() {
    return {
      form: {
        id: '',
        phone: '',
        password: '',
        reEnterPassword: ''
      },
      rules: {
        phone: [{validator: this.validatePhone, trigger: 'blur'}],
        email: [{validator: this.validateEmail, trigger: 'blur'}],
        password: [{validator: this.validatePass, trigger: 'blur'}],
        reEnterPassword: [{validator: this.validatePass2, trigger: 'blur'}]
      }
    };
  },
  methods: {
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$router.push({name: 'Login'});
        }
      });
    },
    validatePhone(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入手机号'));
      } else {
        let pattern = /\D+/g;
        if (value.length !== 11 || pattern.test(value)) {
          callback(new Error('手机号格式不正确'));
        }
      }
    },
    validateEmail(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else {
        let pattern = /^[a-zA-Z0-9\-_]+@(?:[a-zA-Z0-9\-_]+\.)+[a-zA-Z0-9\-_]+$/;
        if (!pattern.test(value)) {
          callback(new Error('邮箱格式不正确'));
        }
      }
    },
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        value = value.replace(/\s/g, '');
        if (value.length < 6) {
          callback(new Error('密码长度不能小于6位'));
        }
      }
    },
    validatePass2(rule, value, callback) {
      if (value !== this.form.password) {
        callback(new Error('密码不一致'));
      }
    }
  }
};
</script>

<style scoped>
.positioner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.container {
  width: 300px;
  margin-bottom: 10px;
}

.logo {
  margin: 0 auto;
  width: 150px;
  height: 150px;
  background: url("../../assets/logo.jpeg");
  background-size: contain;
  border-radius: 50%;
  margin-bottom: 20px;
}

.app-name {
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 20px;
}

.button {
  width: 100%;
  height: 40px;
  text-align: center;
}
</style>
