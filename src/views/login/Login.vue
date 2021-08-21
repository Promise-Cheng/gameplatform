<template>
  <div class="gameplatform">
    <div class="gameplatform-head"></div>
    <div class="gameplatform-login-logo">
      <div class="item">
        <img src="@/assets/images/wangzhan-logo.png"/>
        <span class="gameplatform-divider"></span>
        <span class="gameplatform-login-logo-title">登录</span>
      </div>
    </div>
    <div class="gameplatform-main">
      <div class="gameplatform-login-box">
        <div class="gameplatform-login-title">登录</div>
        <div v-show="errorMsg" class="error-msg">{{ errorMsg }}</div>
        <div class="gameplatform-login-form">
          <el-input
              v-model="query.userName"
              prefix-icon="el-icon-user"
              class="gameplatform-login-input"
              :class="{'validate-error': checked1}"
              placeholder="用户名/手机号"
              @blur="handleBlur(query.userName, 1)"
          ></el-input>
          <el-input
              v-model="query.password"
              type="password"
              prefix-icon="el-icon-lock"
              class="gameplatform-login-input"
              :class="{'validate-error': checked2}"
              placeholder="密码"
              @blur="handleBlur(query.password, 2)"
          ></el-input>
          <el-checkbox
              v-model="query.autoLogin"
              class="gameplatform-login-input"
          >下次自动登录
          </el-checkbox>
          <el-button
              type="primary"
              class="margin-top-16 gameplatform-login-input"
              @click="handleSubmit"
          >登录
          </el-button>
        </div>
        <div class="gameplatform-login-bottom">
          <div class="gameplatform-login-bottom-button">找回密码</div>
          <div class="gameplatform-login-bottom-divider"></div>
          <div class="gameplatform-login-bottom-button">注册账号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        checked1: false,
        checked2: false,
        query: {
          userName: '',
          password: '',
          autoLogin: true,
        }
      }
    },
    computed: {
      errorMsg() {
        let errorMsg = ''
        if (this.checked1) {
          errorMsg = '用户名'
        }
        if (this.checked2) {
          if (errorMsg) errorMsg += '与'
          errorMsg += '密码'
        }
        if (errorMsg) errorMsg += '不能为空'
        return errorMsg
      }
    },
    methods: {
      handleBlur(val, type) {
        this['checked' + type] = !val
      },
      handleSubmit() {
        if(!this.query.userName) this.checked1 = true
        if(!this.query.password) this.checked2 = true

      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .gameplatform {
    height: 100%;

    &-head {
      height: 6%;
    }

    &-login-logo {
      position: relative;
      height: 104px;
      padding: 0 32px;

      .item {
        position: absolute;
        left: 50%;
        margin-left: -630px;

        > img {
          width: 188px;
          height: 60px;
          top: -23%;
          position: relative;
          object-fit: contain;
          float: left;
        }
      }

      &-title {
        height: 84px;
        line-height: 84px;
        font-size: 32px;
        color: #676767;
        vertical-align: top;
      }
    }

    &-divider {
      height: 84px;
      width: 1px;
      background: #dcdcdc;
      margin: 0 24px;
      display: inline-block;
    }

    &-main {
      height: 532px;
      background: url('~@/assets/images/login-bg.jpg') no-repeat center;
      background-size: cover;
      min-width: 1260px;

      .gameplatform-login {
        &-box {
          position: relative;
          left: 50%;
          top: 46px;
          padding: 16px;
          margin-left: 155px;
          width: 354px;
          height: 440px;
          background: #fff;
          box-sizing: border-box;
          border-radius: 16px;
          box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);

          .error-msg {
            font-size: 12px;
            color: $red;
            position: absolute;
            top: 50px;
            left: 46px;
            width: 265px;
          }
        }

        &-title {
          color: #676767;
          font-size: 16px;
          padding-bottom: 45px;
        }

        &-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &-input {
          width: 258px;

          & + .gameplatform-login-input {
            margin-top: 8px;
          }
        }

        &-bottom {
          position: absolute;
          bottom: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          &-button {
            font-size: 12px;
            color: #939393;
            cursor: pointer;

            &:hover {
              color: $primary;
              text-decoration: underline;
            }
          }

          &-divider {
            height: 10px;
            width: 1px;
            margin: 3px 16px;
            background: #939393;
          }
        }
      }
    }
  }
</style>