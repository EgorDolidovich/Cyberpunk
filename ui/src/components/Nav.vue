<template>
    <n-space justify="center" align="center">
        <div class="nav-top">
            <span>
                <ImplantsIcon style="margin-right: 10px; margin-top: 2px;"/>
            </span>
            <span class="nav-bar-menu-item">
            CHOOSE YOUR HERO
            </span>
        </div>
    </n-space>
    <n-space>
    <div class="nav-bottom">
        <div class="nav-lines">
                <BlueLine style="margin-left: 86px;"/>
                <GreenLine style="margin-left: 60px;"/>
        </div>
        <div class="nav-bottom-line-glow"></div>
    </div>
    </n-space>
</template>

<script setup>
import { NSpace, NDivider } from 'naive-ui';
import ImplantsIcon from "@/assets/icons/implants.svg"
import BlueLine from "@/assets/icons/blue-nav-line.svg"
import GreenLine from "@/assets/icons/green-nav-line.svg"
</script>

<style>
.nav-top {
    display: flex;
    margin-top: 18px;
    height: 44px;
}

.nav-bar-menu-item {
    font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 41px;
color: #D84048;

}

.nav-lines {
    display: flex;
}

.nav-bottom-line-glow {
    margin-top: 6px;
    margin-left: 50px;
    margin-right: 50px;
    width: 94vw;
    height: 3px;
    background: #D84048;
    box-shadow: 0px 0.3rem 0.4rem rgba(216, 64, 72, 0.3);
}

</style>