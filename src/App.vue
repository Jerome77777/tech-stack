<template>
  <el-config-provider>
    <HeaderNav />
    <RouterView />
    <FooterNav />
  </el-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/header/HeaderNav.vue'
import FooterNav from '@/components/footer/FooterNav.vue'
</script>

<style scoped></style>
