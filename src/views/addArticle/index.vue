<template>
  <div class="wrapper" id="nice-links">
    <div class="panel-default">
      <div class="panel-body">
        <div class="main-container">
          <div class="entry-list">
            <div class="links-list">
              <el-card shadow="hover" class="article-card">
                <div class="content">
                  <el-form :model="form">
                    <el-form-item label="标题">
                      <el-input v-model="form.articleName"></el-input>
                    </el-form-item>
                    <el-form-item label="标签">
                      <el-input v-model="form.articleLabel"></el-input>
                    </el-form-item>
                    <el-form-item label="类别">
                      <el-input v-model="form.articleCategory"></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                      <el-input
                        v-model="form.articleIntroduction"
                        :autosize="{ minRows: 4 }"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="内容"> </el-form-item>
                    <Editor ref="editorRef"></Editor>
                  </el-form>
                  <el-button type="primary" class="btn" @click="handleSubmit">提交</el-button>
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
import { reactive, ref, onBeforeMount } from 'vue'
import Editor from '@/components/editor/index.vue'
import { getLocalStorage } from '@/utils/storage'
import { USER_INFO } from '@/utils/constants'
import { $post } from '@/plugins'
import { toRaw } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  articleAuthorName: '',
  articleCategory: '',
  articleContent: '',
  articleIntroduction: '',
  articleLabel: '',
  articleName: '',
  authorId: ''
})

const editorRef = ref()

onBeforeMount(() => {
  const userinfo = getLocalStorage(USER_INFO)
  if (!userinfo) {
    router.push({
      path: '/login'
    })
  }
})

const handleSubmit = () => {
  const html = editorRef.value.editor.getHtml()
  form.articleContent = html
  const userinfo = getLocalStorage(USER_INFO)
  if (userinfo) {
    form.articleAuthorName = userinfo.userName
    form.authorId = userinfo.uid
  }
  $post('article/addArticle', toRaw(form)).then((res) => {
    ElMessage.success('添加成功')
    console.log('res', res)
  })
}
</script>
<style media="screen" lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

:deep(.el-input__wrapper) {
  padding: 0;
}
:deep(.el-input__inner) {
  padding: 1px 11px;
}

.medium-zoom-image--opened {
  z-index: 10000;
}

.content {
  .btn {
    margin-top: 10px;
  }
}

@media screen and (max-width: $mobile-screen) {
  .content .btns-group .btn {
    padding: 1rem 2rem;
  }
}
</style>
