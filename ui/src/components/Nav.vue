<template>
    <n-space justify="center" align="center">
        <span>
            <ImplantsIcon />
        </span>
        <span class="nav-bar-menu-item">
            CHOOSE YOUR HERO
        </span>
    </n-space>

    <n-space>
        <div class="nav-lines">
            <div>
                <BlueLine />
            </div>
            <div class="GreenLinePosition">
                <GreenLine />
            </div>
        </div>
    </n-space>

    <n-space justify="center" align="center">
        <div class="nav-bottom-line-glow"></div>
    </n-space>
</template>

<script setup>
import { NSpace, NDivider } from 'naive-ui';
import ImplantsIcon from "@/assets/icons/implants.svg"
import BlueLine from "@/assets/icons/blue-header-line.svg"
import GreenLine from "@/assets/icons/green-header-line.svg"
</script>

<style>
.nav-bar-menu-item {
    font-family: 'Rajdhani';
    font-size: 2rem;
    line-height: 5vh;
    vertical-align: text-bottom;
    
}

.nav-lines {
    float: left;
    margin-left: 86px;
    display: flex;
    flex-direction: row;
}

.GreenLinePosition {
margin-left: 60px;
}

.nav-bottom-line-glow {
    width: 94vw;
    background: var(--n-text-color);
    border: 0.1rem solid var(--n-text-color);
    box-shadow: 0px 0.3rem 0.4rem rgba(216, 64, 72, 0.3);
}
</style>