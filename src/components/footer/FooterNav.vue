<template>
  <footer class="footer">
    <div class="footer-body">
      <div class="container">
        <div class="list-item show-on-big-screen"></div>
        <div class="list-item">
          <p class="title">产品</p>
          <a class="nice-link" target="_blank" href="https://www.classicbook.xyz"
            >典阅故事会官网
          </a>
          <a class="nice-link" target="_blank" href="https://ai.classicbook.xyz/"
            >典阅故事会快应用
          </a>
          <a class="nice-link" target="_blank" href="https://ai.classicbook.xyz/"
            >云端视野快应用
          </a>
        </div>
        <div class="list-item">
          <p class="title">合作</p>
        </div>
        <div class="list-item"></div>
      </div>
      <div class="icp">
        <span>{{ copyright }}</span>
        <a
          class="link"
          target="_blank"
          rel="external noopener"
          :href="assembleExternalLink('https://www.jeffjade.com/')"
          >龙岩创客科技有限公司</a
        >
        出品
        <br class="show-on-small-screen" />
        <a
          class="beian-link"
          target="_blank"
          :href="assembleExternalLink('https://beian.miit.gov.cn/')"
          rel="external noopener"
          >闽ICP备2022018170号-2</a
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const copyright = ref('')

onMounted(() => {
  let currentYear = new Date().getFullYear()
  copyright.value = `Copyright © ${currentYear}`
})

const assembleExternalLink = (url: string) => {
  return `${url}?ref=nicelinks.site`
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.footer {
  position: relative;
  padding: 2rem 0;
  // 参见：https://uigradients.com/
  @include get-gradient-background(#ece9e6, #ffffff, top);

  .footer-body {
    width: 100%;
    max-width: 1280px;
    height: $footer-height;
    @include flex-box-center(column);
    margin: auto;
    padding: 15px 20px;
    color: $footer-grey;

    .container,
    .icp {
      margin: 6px auto;
    }

    .container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      font-size: $font-small;
      text-align: left;
      font-weight: 500;
      text-shadow: 1px 1px 0px #fff;

      .list-item {
        .title {
          margin-bottom: 1rem;
          text-align: left;
          color: $black;
        }

        .image {
          display: block;
          width: 10rem;
          height: auto;
          aspect-ratio: 1 / 1;
        }

        .nice-link {
          display: block;
          padding: 0.6rem 0;
          font-weight: 400;
          color: $footer-grey;
        }
      }
    }

    .icp {
      font-size: $font-small;
      line-height: 1.6;

      .beian-link {
        margin-left: 15px;
        color: $black-grey !important;
      }

      .zero {
        height: 1.5rem;
        width: 1.1rem;
        margin-left: 0.5rem;
      }
    }

    .link {
      color: $common-link;
      font-weight: 500;

      &:link,
      &:visited {
        color: $common-link;
        text-decoration: none;
      }

      &:hover,
      &:active {
        color: $common-link-hover;
        text-decoration: none;
      }
    }
  }
}

/* Tooltip 容器 */
.tooltip {
  position: relative;
  display: inline-block;
}

.footer .tooltip .pannel {
  position: absolute;
  top: -19rem;
  left: -7rem;
  width: 18rem;
  height: 18rem;
  z-index: 1;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  visibility: hidden;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: $white;

  .qr-code {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  &::after {
    content: '';
    position: absolute;
    right: 50%;
    top: 100%;
    transform: translateX(50%);
    border-top: 1rem solid $white;
    border-right: 1rem solid transparent;
    border-left: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
  }
}

.footer .tooltip:hover .pannel {
  visibility: visible;
}

.show-on-big-screen {
  display: block;
}

.show-on-small-screen {
  display: none;
}

@media (max-width: 960px) {
  .show-on-big-screen {
    display: none;
  }

  .show-on-small-screen {
    display: block;
  }
}
</style>
