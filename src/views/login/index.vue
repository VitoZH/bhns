<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="登录" />
    <form action="/" method="POST">
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          v-validate="'required|phone'"
          name="phone"
          :error-message="errors.first('phone')"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <van-button type="info" :loading="loading" block @click.prevent="handleLogin">登录</van-button>
    </form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
import { mapMutations } from 'vuex'
export default {
  name: 'LoginIndex',
  data () {
    return {
      loading: false,
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async handleLogin () {
      this.loading = true
      try {
        this.$validator.validate().then(async valid => {
          if (!valid) {
            this.loading = false
            return
          }
          const data = await login(this.user)
          console.log(data)
          this.$store.commit('setUser', data)
          this.loading = false
        })
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #1989fa;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
