<template>
    <n-space>
    <div class="hero-info">
        <div class="avatar">
            <div class="implant-count">
                <AvatarFrame />
            </div>
        </div>
        <div class="hero-description">
            <p class="hero-name">HERMANN WILHELM GÖRING</p>
            <p class="hero-class">NETRUNNER</p>
            <Protocol />
            <TaskManager style="margin-top: 6px;"/>
        </div>
    </div>
    </n-space>
</template>

<script setup>
import AvatarFrame from "@/assets/vectors/avatarframe.svg"
import Protocol from "@/assets/vectors/protocol.svg"
import TaskManager from "@/assets/vectors/taskmanager.svg"
</script>

<style>
.hero-info {
    height: 107px;
    margin-left: 15px;
    margin-right: 10px;
    margin-bottom: 20px;
    margin-top: 30px;
}

.avatar {
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

.hero-description {
display: flex;
flex-direction: column;
}

.hero-name {
    margin-top: 0px;
    margin-bottom: 5px;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #49BFC7;
    text-shadow: -4px -4px 12px rgba(73, 191, 199, 0.3);
}

.hero-class {
    
    margin-top: 0px;
    margin-bottom: 18px;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #2FF0A5;
    text-shadow: -4px -4px 12px rgba(47, 240, 165, 0.3);
}


</style>