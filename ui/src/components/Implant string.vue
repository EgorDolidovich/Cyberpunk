<template>
    <n-space>
    <div class="implant-string">
        <div class="the-implant">
            <div class="implant-count">
                <AbilityFrame />
                <p class="implant-count-text">/</p>
            </div>
        </div>
        <div class="implant-description">
            <p class="implant-name">Система помощи при наведении:</p>
            <p class="implant-name-text">Разъемы интерфейса подключение к машинам и кибертехнике подключение к машинам и кибертехнике подключение к </p>
        </div>
    </div>
    </n-space>
</template>

<script setup>
import AbilityFrame from "@/assets/vectors/abilityframe.svg"

</script>

<style>
.implant-string {
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    
}

.the-implant {
    display: flex;
    float: left;
    margin-right: 9px;
    
}

.implant-count {
    height: 54px;
}

.implant-count-text {
    position: relative;
    left: 13px;
    bottom: 86px;
    
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 47px;
    width: 48px;
    align-items: center;
    text-align: center;
    color: #2FF0A5;
    text-shadow: -4px -4px 12px rgba(47, 240, 165, 0.3);
}

.implant-description {
display: flex;
flex-direction: column;
}

.implant-name {
    margin-top: 0px;
    margin-bottom: 3px;
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #2FF0A5;
}

.implant-name-text {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #D84048;
}


</style>