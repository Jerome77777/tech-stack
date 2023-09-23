<template>
  <el-config-provider :locale="locale">
    <HeaderNav />
    <RouterView />
    <FooterNav />
  </el-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/header/HeaderNav.vue'
import FooterNav from '@/components/footer/FooterNav.vue'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed, ref } from 'vue'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<style scoped></style>
