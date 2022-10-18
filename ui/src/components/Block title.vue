<template>
    <n-space>
     <ProtocolLineDivider />
     <div class="block-title-center">
        <div class="block-title-center-left">
            <p class="block-title-text">SKILLS</p>
        </div>
        <div class="block-title-center-right">
            <div class="block-title-sign">
                <SkillsHyro />
            </div>
            <div class="block-title-vectors">
                <CornersWithDot />
            </div>
        </div>
     </div>
     <ModelLineDivider />
    </n-space>
</template>

<script setup>
import ProtocolLineDivider from "@/components/Protocolline div.vue"
import ModelLineDivider from "@/components/Modelline div.vue"
import SkillsHyro from "@/assets/vectors/skillshyrosign.svg"
import CornersWithDot from "@/assets/vectors/cornerswithdot.svg"
</script>

<style>
.block-title-center {
    height: 38px;
    margin-left: 10px;
    margin-right: 10px;
}

.block-title-center-left {
    display: flex;
    align-items: center;
    float: left;
    height: 38px;
}

.block-title-text {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #D84048;
    text-shadow: -4px -4px 12px rgba(216, 64, 72, 0.3);
}

.block-title-center-right {
    display: flex;
    align-items: center;
    float: right;
    height: 38px;
}

.block-title-sign {
    margin-right: 22px;
}
</style>