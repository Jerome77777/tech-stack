<template>
  <div class="wrapper" id="nice-links">
    <div class="panel-default">
      <div class="panel-body">
        <div class="main-container">
          <div class="entry-list">
            <div class="links-list">
              <el-card shadow="hover" class="article-card">
                <div class="content">
                  <div class="info-block mb-normal">
                    <a class="user-info" target="_blank" rel="noopener">
                      <el-avatar
                        :size="50"
                        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                      />
                    </a>
                    <div class="meta-block">
                      <div class="meta-box"></div>
                      <div class="meta-box">
                        <span class="item" style="margin-right: 1rem"
                          >作者 {{ article.articleAuthorName }}</span
                        >
                        <span>文章字数 {{ article.numOfWords }}</span>
                      </div>
                    </div>
                  </div>
                  <Editor
                    style="overflow-y: hidden; text-align: initial; width: 100%"
                    v-model="article.articleContent"
                    :defaultConfig="{
                      readOnly: true
                    }"
                    mode="default"
                  />
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import { Editor } from '@wangeditor/editor-for-vue'
import { $post } from '@/plugins'
import { onBeforeMount } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Aritcle } from '../home/type'

const article = ref<Aritcle>({} as Aritcle)
const router = useRouter()

onBeforeMount(() => {
  const id = router.currentRoute.value.params.id
  $post('article/getContent', { articleId: id }).then((res: Aritcle[]) => {
    article.value = res[0]
  })
})
</script>

<style media="screen" lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';
// @import '@/assets/scss/editor.scss';

.medium-zoom-image--opened {
  z-index: 10000;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .title-link {
    font-size: 1.8rem;
    font-weight: bolder;
    line-height: 1.2;
    text-decoration: none;
    color: $link-title;
    transition: color 0.5s ease-in;

    &:hover {
      transition: color 0.4s ease-out;
      color: $link-title-hover;
    }
  }

  .abstract {
    width: 100%;
    font-size: $font-small;
    color: $black-grey;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    @include text-ellipsis-multiline(3);
  }

  .btns-group {
    @include flex-box-center(row, center, center);
    margin: 2.1rem auto;

    .btn {
      margin: 0 2rem;
      padding: 1rem 3rem;
      border-radius: 2rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

      &:hover {
        transform: scale(1.1) rotate(-1deg);
      }
    }
  }

  .link-keywords,
  .link-review {
    margin: 15px 0;
    color: $black-grey;
    font-size: $font-small;
    line-height: 1.6;

    strong {
      font-weight: 700;
      color: $link-title;
    }
  }

  .link-keywords {
    word-break: break-all;
  }

  .link-desc {
    color: $silver-grey;
    margin: 15px auto;
    padding-left: 10px;
    word-break: break-all;
    line-height: $font-large;
    font-size: $font-small;
    word-spacing: 4px;
    border-left: 2px solid $border-grey;
  }

  .segmenting-line {
    border-top: 1px solid #8c8b8b;
    border-bottom: 1px solid #ffffff;
  }

  .link-screenshot {
    margin-bottom: 15px;
    filter: drop-shadow(0px 0px 15px lightgrey);

    .screenshot {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }

  .info-block {
    @include flex-box-center(row, start, center);

    .avatar {
      position: relative;
      float: left;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      box-shadow: 0px 10px 30px 0px rgba(0, 64, 128, 0.1);
      margin: 0;
      aspect-ratio: 1 / 1;
    }

    .user-info {
      margin-right: 15px;
    }
  }

  .meta-box + .meta-box {
    margin-top: 15px;
  }

  .meta-box {
    font-size: $font-small;
    color: $silver-grey;

    .pitem {
      &:after {
        content: '\B7';
        margin: 0 0.4em;
      }
    }

    .classify {
      color: $brand;
      font-size: 500;
      margin-right: 1rem;
    }

    .username {
      color: $black-grey;

      &:hover {
        color: $brand;
      }
    }

    .tag {
      color: $silver-grey;
      cursor: pointer;

      &:hover {
        color: $brand;
      }
    }

    .tag + .tag {
      &:before {
        margin: 0 1rem;
        content: '/';
        color: $silver-grey;
      }
    }
  }

  .action-list {
    display: inline-flex;
    display: -webkit-flex;

    .action-pitem {
      @include flex-box-center(row, start);
      cursor: pointer;
      padding: 0;
      height: 100%;
      text-align: center;
      min-width: 3.6rem;
      font-size: $font-small;

      .icons {
        width: 2.5rem;
        height: 2.5rem;
        margin-left: 0;
        margin-right: 0.5rem;
      }

      .icon-green {
        color: $green;
      }

      .pitem-num {
        color: $silver-grey;
        margin-left: 0.2em;
        font-weight: 400;
      }
    }

    .action-pitem + .action-pitem {
      margin-left: 3rem;
      border-left: none;
    }
  }
}

@media screen and (max-width: $mobile-screen) {
  .content .btns-group .btn {
    padding: 1rem 2rem;
  }
}
</style>
