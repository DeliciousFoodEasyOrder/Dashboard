<template lang="pug">
  div.positioner
    div.container
      div(class="logo")
      el-form(:model="form")
        el-form-item
          el-input(v-model="form.id" type="text" placeholder="请输入用户账户")
        el-form-item
          el-input(v-model="form.password" type="password" placeholder="请输入用户密码")
        el-form-item
          el-button.button(type="primary" @click="submit") 登录
</template>
<script>
export default{
  data() {
    return {
      form: {
        id: null
      }
    };
  },
  methods: {
    submit() {
      this.$router.push({name: 'Home'});
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
  margin-bottom: 100px;
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

.button {
  width: 100%;
}
</style>
