<template>
  <div class="login-wrap">
    <div class="login-box" ref="login-box" v-loading.body="isLoading">
      <h2 class="box-title">账号密码登录/注册</h2>
      <div class="form-group">
        <el-alert
          v-if="tipMessageObj.message"
          :title="tipMessageObj.message"
          :type="tipMessageObj.type"
        >
        </el-alert>
      </div>
      <el-form :model="account" :rules="rules" ref="validateForm">
        <el-form-item prop="uid">
          <el-input placeholder="请输入账号 ID" v-model.trim="account.uid">
            <template #prepend>
              <icon class="icons" name="login-user"></icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="passwd">
          <el-input placeholder="请填写密码" v-model="account.passwd" type="password">
            <template #prepend>
              <icon class="icons" name="password"></icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button type="primary" @click="onLoginClick" size="large"> 登录 </el-button>
      </el-form>

      <div class="form-group login-tip">
        <p class="text-center">
          {{ '您还未拥有一个账号？' }}
          <a class="el-button--text" href="javascript:;" @click="onBottomClick"> {{ '注册' }}</a>
        </p>
      </div>
      <div class="footer">
        <a href="/all" class="route-to-main"> 云端视野 </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import type { TipMessage } from './type'
import { useRouter } from 'vue-router'
import Icon from '@/components/icons/Icon.vue'
import { $post } from '@/plugins'
import { toRaw } from 'vue'
import { setLocalStorage } from '@/utils/storage'
import { USER_INFO } from '@/utils/constants'

const router = useRouter()

const isLoading = ref(false)
const tipMessageObj = ref<TipMessage>({} as TipMessage)

const account = reactive<{
  uid: string
  passwd: string
}>({
  uid: '',
  passwd: ''
})

const rules = {
  uid: [{ required: true, trigger: 'change,blur' }],
  passwd: [{ required: true, trigger: 'change,blur' }]
}

const onBottomClick = () => {
  router.push({
    path: '/login'
  })
}

const onLoginClick = () => {
  $post('user/login', toRaw(account)).then((res) => {
    setLocalStorage(USER_INFO, res)
    router.push({
      path: '/all'
    })
  })
}

const onSignupClick = () => {
  $post('user/login', toRaw(account)).then((res) => {
    setLocalStorage(USER_INFO, res)
    router.push({
      path: '/all'
    })
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

#qrcode {
  width: 300px;
  height: 300px;
  display: block !important;
  canvas {
    display: inline-block;
  }
  img {
    width: 132px;
    height: 132px;
    background-color: #ffffff;
    padding: 6px;
  }
}

.login-wrap {
  width: 40rem;
  margin: 0 auto;
  padding-top: 20rem;
  position: relative;
  padding-bottom: 17rem;

  :deep(.el-input__wrapper) {
    width: 100%;
  }

  .forgot-pwd {
    margin: 0 auto !important;
  }

  .login-tip {
    font-size: 1.4rem;
  }

  .display-none {
    display: none;
  }

  .box-title {
    margin: 2rem auto;
    font-size: $font-large;
    font-weight: 600;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 3.5rem;
    margin-top: 2rem;
    background: #c9ffbf;
    background: -webkit-linear-gradient(to right, #ffafbd, #c9ffbf);
    background: linear-gradient(to right, #ffafbd, #c9ffbf);
    .route-to-main {
      color: $black;
      font-size: $font-small;
    }
  }

  .wechat-box {
    width: 40rem;
    height: 100%;
    background-color: $white;
    border: 1px solid #d7dce5;
    font-size: $font-small;
    .switch-to-account {
      display: block;
      padding: 1rem 0;
      text-align: right;
      color: $brand;
    }
    .scan-desc {
      font-size: 1.4rem;
      color: $silver-grey;
      padding: 2rem 0;
    }
    .qrcode-area {
      position: relative;
      width: 186px;
      height: 186px;
      margin: auto;
      .expired-area {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f7f8f9f6;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .expired {
          color: $black;
          line-height: 2rem;
        }
      }
    }
  }

  .login-box {
    width: 40rem;
    height: 100%;
    background-color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    clear: both;
    border-radius: 3px;
    border: 1px solid #d7dce5;
    .form-group,
    .el-form {
      padding: 0 2rem;
    }
    .heading {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.4rem;
      color: $black;
    }

    .el-form-item {
      margin-bottom: 30px;
    }

    .el-button {
      display: block;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 15px;
      font-size: $font-small;
    }
    :deep(.el-input__wrapper) {
      padding: 0;
    }
    :deep(.el-input__inner) {
      padding: 1px 11px;
    }

    .el-input {
      .icons {
        display: block;
        width: 20px;
        height: 20px;
        margin: 0;
        padding: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .login-wrap {
    width: 100%;
    padding-top: 60px;
    .login-box,
    .wechat-box {
      width: 100%;
      border: 0 none;
      .switch-to-account {
        text-align: center;
      }
    }
  }
}
</style>
