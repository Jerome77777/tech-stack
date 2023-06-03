<template>
  <header class="header blur-effect">
    <nav class="nav">
      <div class="header-logo">
        <a href="/" rel="home" class="header-logo-a nicelinks-logo">
          <img src="../../assets/images/logo.png" alt="技术站" />
          <h1 class="title">技术站</h1>
        </a>
      </div>

      <a href="javascript:;" class="menu" @click="onToggleMenuClick">
        <span></span>
      </a>
      <div class="share-btn" @mouseenter="onShareBtnMouseover" @mouseout="onShareBtnMouseout">
        <a class="gradient-text" target="_blank" href="https://ai.classicbook.xyz/">AI 助手 </a>
      </div>
      <div class="search-area" id="search-area">
        <search />
      </div>
      <div class="user-account" v-if="false">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            <!-- <img class="avatar" :src="userAvatar" :alt="$t('niceLinksStr')" /> -->
            <span>{{ userSign }} </span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu class="user-account-dropdown-menu">
            <template #dropdown>
              <el-dropdown-item command="Logout" divided>
                <icon class="icons" name="logout"></icon>登出
              </el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-else class="not-loggedin">
        <el-button type="text" @click="onGotoLoginClick">登录</el-button>
        <span>/</span>
        <el-button type="text" @click="onGotoSignUpClick"> 注册 </el-button>
      </div>
    </nav>
    <SwitchTheme />
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SwitchTheme from './SwitchTheme.vue'
import { useRouter } from 'vue-router'

const userSign = ref('')
const router = useRouter()

const onToggleMenuClick = () => {}

const onGotoLoginClick = () => {
  router.push({
    path: '/login'
  })
}

const onGotoSignUpClick = () => {
  router.push({
    path: '/register'
  })
}

const handleCommand = () => {}

const onShareBtnMouseover = () => {}

const onShareBtnMouseout = () => {}
</script>

<style media="screen" lang="scss" scoped>
@use 'sass:math';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

#app .header {
  position: fixed;
  @include flex-box-center(row, space-between, start);
  width: 100%;
  height: $header-height;
  line-height: $header-height;
  padding: 0 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
  z-index: 9999;

  .nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: start !important;
    align-items: center;
    width: 100%;
    height: 100%;

    .header-logo {
      @include flex-box-center(row, center, center);
      margin-right: 2rem;

      .header-logo-a {
        @include flex-box-center;
        height: math.div($header-height, 2);
        line-height: math.div($header-height, 2);
      }
    }

    .operate-area {
      display: block;
      position: relative;
      font-size: $font-small;

      .nav-item {
        color: $black;
        margin: 0 1rem;

        &:hover {
          color: $brand;
        }
      }

      .nav-item.active {
        color: $brand;
      }
    }

    .share-btn {
      font-size: $font-small;

      .share-link {
        @include flex-box-center(row, space-around, center);
        font-weight: bold;

        .gradient-text {
          -webkit-text-fill-color: transparent;
          background: linear-gradient(90deg, #d3c357, #f1a76a, #cc6d2e);
          background-clip: text;
          -webkit-background-clip: text;

          &:hover {
            background-image: linear-gradient(0deg, #ff6768 38%, #a3cd39 81%);
          }
        }

        .icon-share {
          width: 16px;
          height: 16px;
          margin: 0 0.3rem;
          vertical-align: middle;
        }
      }
    }

    .share-btn,
    .find-more {
      display: block;
      cursor: pointer;
      // margin: 0 0 0 2rem;
    }

    .find-more,
    .user-account {
      height: 100%;

      .el-dropdown {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: $font-small;

        .el-dropdown-link {
          display: flex !important;
          align-items: center !important;
          line-height: $header-mobile-height;
          height: $header-mobile-height;
        }
      }
    }

    .user-account {
      display: block;
      cursor: pointer;

      .avatar {
        display: block;
        width: 4rem;
        height: 4rem;
        aspect-ratio: 1 / 1;
        box-shadow: 0 0 0 2px #fff;
        border-radius: 50%;
        position: relative;
        margin: 0;
        margin-right: 10px !important;
      }
    }

    .not-loggedin,
    .el-dropdown {
      display: block;
      .el-button {
        font-size: $font-small;
      }
    }

    .not-loggedin,
    .user-account {
      position: absolute;
      right: 0;
    }
  }
}

.el-dropdown-menu {
  min-width: 15rem;
  margin: 0;

  .icons {
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    margin: 0.1rem 0.5rem 0.1rem 0.1rem;
    color: #130c0e;
  }

  .vector-icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    color: #130c0e;
  }
}

.find-more-dropdown-menu {
  .el-dropdown-menu__item {
    display: flex !important;
    align-items: center !important;
    padding: 0 20px;
  }
}

.find-more-dropdown-menu {
  .el-dropdown-menu__item--divided {
    margin: 3px 1px;

    &:before {
      height: 0;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .about-website {
    color: $dropdown-grey;
  }
}

@media screen and (max-width: $mobile-screen) {
  #app .header {
    height: $header-mobile-height;
    z-index: $zindex-header-mobile;
    padding: 0;

    .nav {
      padding: 0;

      .header-logo {
        position: absolute;
        left: 50%;
        right: 50%;
        width: 15rem;
        transform: translate(-50%);
        text-align: center;
        margin: 0px;
      }

      .header-logo-a {
        width: 100%;
        height: $header-mobile-height;
        line-height: $header-mobile-height;

        .header-logo-img {
          margin: 10px 0;
        }
      }

      .menu {
        display: block;
        padding: 20px 15px;
        width: $header-mobile-height;
        height: $header-mobile-height;
      }

      .not-loggedin,
      .el-dropdown-link {
        display: flex !important;
        align-items: center !important;
        line-height: $header-mobile-height;
        height: $header-mobile-height;
        margin-right: 1rem;
      }

      .operate-area {
        display: none;
      }

      .share-btn,
      .find-more {
        font-size: $font-small;
        display: none;
      }
    }
  }
}

.search-area {
  display: block;
  position: absolute;
  right: 23rem;

  .el-autocomplete {
    .el-input {
      font-size: $font-medium;
    }
  }
}

@media (max-width: 1200px) {
  .search-area {
    display: none;
  }
}
</style>
