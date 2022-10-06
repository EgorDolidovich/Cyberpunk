<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="ThemeOverrides">
    <n-theme-editor>
      <n-layout position="absolute" class="layout-gradient-bg">
        <n-layout-header style="min-height: 5vh; padding: 0 24px; padding-top: 10px">
          <game-nav />
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
          <n-layout-sider bordered content-style="padding: 24px;">
            Handian Bridge
          </n-layout-sider>
          <n-layout content-style="padding: 24px;">
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
            <n-h2>Pingshan Road</n-h2>
          </n-layout>
          <n-layout-sider bordered content-style="padding: 24px;">
            Handian Bridge
          </n-layout-sider>
        </n-layout>
        <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">
          城府路
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
</script>

<style>
.layout-gradient-bg {
  background: linear-gradient(174.66deg, #2E2E2E 11.13%, rgba(20, 16, 16, 0.96) 95.73%);
}
</style>