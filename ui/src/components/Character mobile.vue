<template>
    <n-space justify="center" align="center">
        <div class="nav-menu-item-mobile">
            <div class="menu-item-mobile">
                <CharacterActiveIcon style="margin-bottom: 3px;"/>
                <p class="nav-bar-menu-item-mobile-text-active">CHARACTER</p>
            </div>
            <div class="realdiv"></div>
            <div class="menu-item-mobile">
                <InventoryDefaultIcon style="margin-bottom: 3px;"/>
                <p class="nav-bar-menu-item-mobile-text">INVENTORY</p>
            </div>
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
import CharacterActiveIcon from "@/assets/icons/characteractiveicon.svg"
import InventoryDefaultIcon from "@/assets/icons/inventorydefaulticon.svg"



</script>

<style>
.nav-menu-item-mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
}  

.nav-bar-menu-item-mobile-text {
    margin-left: 5px;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    height: 24px;
    color: #D84048;
    text-shadow: -4px -4px 12px rgba(216, 64, 72, 0.3);
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

.menu-item-mobile {
    
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.realdiv {
    width: 20px;
}

.nav-bar-menu-item-mobile-text-active {
    font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
height: 24px;
margin-left: 5px;
color: #49BFC7;
text-shadow: 0px 0px 24px rgba(73, 191, 199, 0.8);
}
</style>