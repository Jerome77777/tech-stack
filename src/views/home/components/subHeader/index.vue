<template>
  <div class="sub-head" id="sub-head">
    <ul class="sub-head-nav" ref="subHeadNav">
      <li :class="makeClassName({ key: '全部', value: 'all' })">
        <router-link @click.native="onAllTheme" to="/explore/all" class="theme-link">
          全部
        </router-link>
      </li>
      <li
        v-for="item in themeList"
        :key="item.vaule"
        :class="makeClassName(item)"
        @click="handleTabSwitch(item)"
      >
        <router-link class="theme-link" :to="getLinkPathByThemeVal(item.value)">
          {{ item.key }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.sub-head {
  width: 100%;
  max-width: 960px;
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
