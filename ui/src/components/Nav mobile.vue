<template>
    <n-space justify="center" align="center">
        <div class="nav-bar-menu-item-mobile">
            <p class="nav-bar-menu-item-mobile-text">CHOOSE YOUR HERO</p>
        </div>
    </n-space>
    <n-space>
        <div class="mobnav-bottom">
            <div class="lines-mobile">
                <div class="blue-vectors">
                    <BlueLineMobile />
                </div>
                <div class="green-vectors" >
                    <GreenLineMobile/>
                </div>
            </div>
            <div class="nav-bottom-line-glow-mobile"></div>  
        </div>   
    </n-space>
</template>

<script setup>
import { NSpace, NDivider } from 'naive-ui';
import BlueLineMobile from "@/assets/vectors/bluelinemobile.svg"
import GreenLineMobile from "@/assets/vectors/greenlinemobile.svg"

</script>

<style>
.nav-bar-menu-item-mobile {
    display: flex;
    align-items: center;
    height: 40px;
    
    
}  

.nav-bar-menu-item-mobile-text {
    align-items: center;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #D84048;
}

.mobnav-bottom {
    display: flex;
    flex-direction: column;
}
.lines-mobile {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 5px;
    
}
.blue-vectors {
    display: flex;
    align-items: center;
    float: left;
}
.green-vectors {
    display: flex;
    align-items: center;
    float: right;
}

.nav-bottom-line-glow-mobile {
    
    width: 100vw;
    background-color: #D84048;
    height: 2px;
    box-shadow: 0px 8px 12px rgba(216, 64, 72, 0.3);
}
</style>