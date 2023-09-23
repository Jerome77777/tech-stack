<template>
  <div class="links-list" ref="container">
    <el-card shadow="hover" v-if="articleList.length <= 0">
      <div class="content">
        <el-card class="tip-box-card" v-if="!isLoading">
          <template #header>
            <div class="clearfix">
              <h4>温馨提示</h4>
            </div>
          </template>
          <div class="no-result-tip">
            <div v-html="noResultTip"></div>
          </div>
        </el-card>
      </div>
    </el-card>
    <el-card
      v-else
      shadow="hover"
      :key="item.articleId"
      v-for="item in articleList"
      @click="handleArticleCardClick(item)"
      class="article-card"
    >
      <LinkItem :pitem="item"> </LinkItem>
      <slot name="link-share"></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import LinkItem from './ListItem.vue'
import { Aritcle } from '../../type'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { onMounted } from 'vue'

const router = useRouter()
const container = ref()

defineProps<{
  isLoading: boolean
  articleList: Aritcle[]
}>()

const emits = defineEmits(['searchMore'])

const noResultTip =
  '嘿，朋友，这儿暂未有相关数据；如果您想了解更多，请移步至<a class="no-result-tip-a" href="/">云端视野</a>主页 。'

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    if (scrollTop + windowHeight == scrollHeight) {
      emits('searchMore')
    }
  })
})

const handleArticleCardClick = (article: Aritcle) => {
  router.push({
    name: 'article',
    params: {
      id: article.articleId
    }
  })
}
</script>

<style media="screen" lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.el-pagination {
  :deep(.el-input__inner) {
    border: none !important;
    box-shadow: none !important;
  }
}

.pagination {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.main {
  .links-list {
    border-top: 1px solid $item-border-color;
    .single-moudle {
      // aspect-ratio: 2.8 / 1;

      &:hover {
        background-color: $white-grey;
      }
    }

    .el-card {
      text-align: left;
      border-bottom: 1px solid $item-border-color !important;
    }
  }
}

@media screen and (max-width: $mobile-screen) {
  .main {
    .links-list {
      .single-moudle {
        aspect-ratio: auto;
        height: 22rem;

        .el-card__body {
          height: 100%;
        }
      }
    }
  }
}
.article-card :hover {
  background-color: #f4f6fa;
}
</style>
