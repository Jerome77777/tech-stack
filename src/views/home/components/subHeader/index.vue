<template>
  <div class="sub-head" id="sub-head">
    <ul class="sub-head-nav" ref="subHeadNav">
      <li v-for="item in Category" :key="item.value" :class="makeClassName(item.value)">
        <router-link class="theme-link" :to="getLinkPathByThemeVal(item.value)">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Category } from './header'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentType = computed(() => router.currentRoute.value.params.type)

const makeClassName = (value: string) => {
  return currentType.value === value ? 'nav-item is-active' : 'nav-item'
}

const getLinkPathByThemeVal = (value: string) => {
  return value ? `/${value}` : '/all'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.sub-head {
  width: 100%;
  overflow: auto;
  text-align: left;
  border-bottom: solid 1px #d1d5da;
  padding: 0.3rem;
  z-index: $zindex-subhead;
  background-color: $white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  transform: translateZ(0);

  &::-webkit-scrollbar {
    background: transparent;
    height: 0px;
  }

  &:hover::-webkit-scrollbar {
    background: transparent;
    height: 0px;
  }

  .sub-head-nav {
    width: 100%;
    display: flex;
    margin: 0;

    .nav-item {
      margin: auto 0.5rem;

      .theme-link {
        display: inline-block;
        min-width: 4rem;
        padding: 1rem 0;
        color: $black-grey;
        font-size: $font-small;
        font-weight: 500;

        &:hover {
          color: $brand;
        }
      }
    }

    .is-active {
      .theme-link {
        color: $brand;
      }
    }
  }
}

@media screen and (max-width: $mobile-screen) {
  .sub-head {
    position: fixed;
    top: 110px;
    max-width: $mobile-screen;
    background-color: $white;
    z-index: $zindex-subhead;
  }
}
</style>
