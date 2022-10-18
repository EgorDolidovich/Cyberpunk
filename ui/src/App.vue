<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="ThemeOverrides">
    <n-theme-editor>
      <n-layout position="absolute" class="layout-gradient-bg">
        <n-layout-header>
          <game-nav />
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 75px; bottom: 64px;">
          <n-layout-sider style="width: 3vw;">
          </n-layout-sider>
          <n-layout content-style="padding: 24px;">
            <herocard />
            <n-h2>Hero card mobile</n-h2>
            <GameNavMobile />
            <HerocardMobile />
            
            <BlockTitle />
            <PlusMinusSkills/>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
          </n-layout>
          <n-layout-sider style="width: 3vw;">
            хуй
          </n-layout-sider>
        </n-layout>
        <n-layout-footer bordered position="absolute" style="height: 30px;">
          <Footerdesktop />
        </n-layout-footer>
      </n-layout>
    </n-theme-editor>
  </n-config-provider>
</template>

<script setup>
import {
  NConfigProvider, darkTheme,
  NLayout, NLayoutContent, NLayoutFooter,
  NLayoutHeader, NLayoutSider, NH2, NThemeEditor
} from "naive-ui"

import ThemeOverrides from "@/assets/theme-overrides.json"

import GameNav from "@/components/Nav.vue"

import Herocard from "@/components/Herocard.vue"

import ModelLineDivider from "@/components/Modelline div.vue"

import HerocardMobile from "@/components/Herocardmobile.vue"

import GameNavMobile from "@/components/Nav mobile.vue"

import BlockTitle from "@/components/Block title.vue"

import PlusMinusSkills from "@/components/Plus minus skills.vue"

import Footerdesktop from "@/components/Footer.vue"
</script>

<style>
.layout-gradient-bg {
  background: linear-gradient(174.66deg, #2E2E2E 11.13%, rgba(20, 16, 16, 0.96) 95.73%);
}
</style>