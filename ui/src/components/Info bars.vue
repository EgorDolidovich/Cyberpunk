<template>
    <n-space>
    <div class="info-bars">
        <div class="death-save">
            <div>
                <DeathSaveFrame />
                <p class="death-save-count">3</p>
            </div>
        </div>
        <div class="bars">
            <div class="cyber-psy">
                <div class="actual-psy"></div>
            </div>
            <div class="health-bar">
                <ActualHealth />
            </div>
            <div class="armor">
                <div class="armor-bars">
                    <div class="armor-point"></div>
                    <div class="armor-point"></div>
                    <div class="armor-point"></div>
                    <div class="armor-point"></div>
                    <div class="armor-point"></div>
                    <div class="armor-point"></div>
                    <div class="armor-point"></div>
                    <div class="armor-point"></div>
                </div>
                <div class="health-now">25</div>
            </div>
        </div>
        <div class="health-full">25</div>
    </div>
    </n-space>
</template>

<script setup>
import DeathSaveFrame from "@/assets/vectors/deathsaveframe.svg"
import ActualHealth from "@/assets/vectors/actualhealth.svg"

</script>

<style>
.info-bars {
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    margin-bottom: 10px;
    width: 316px;
    height: 55px;
}

.death-save {
    display: flex;
    float: left;
    width: 40px;
    height: 55px;
}

.death-save-count {
    position: relative;
    left: 0px;
    bottom: 72px;
    
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    
    align-items: center;
    text-align: center;
    color: #FFD43F;
    text-shadow: 0px 4px 12px rgba(255, 212, 63, 0.35);
}

.bars {
    margin-left: 10px;
    width: 250px;
    height: 55px;
}

.cyber-psy {
    background: rgba(47, 240, 165, 0.5);
    border-radius: 1px;
    width: 235px;
    height: 5px;
}

.actual-psy {
    width: 50px;
    height: 5px;
    background: #2FF0A5;
    box-shadow: -4px -4px 12px rgba(47, 240, 165, 0.35);
border-radius: 1px;

}

.health-bar {
    width: 235px;
    height: 16px;
    margin-top: 5px;
}

.health-full {
    margin-top: 10px;
    width: 16px;
    height: 20px;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #D84048;
}

.health-now {
    width: 24px;
    height: 29px;

    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #D84048;
    text-shadow: 0px 4px 12px rgba(216, 64, 72, 0.3);
}

.armor {
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 29px;
}

.armor-bars {
    display: flex;
    width: 226px;
    
}

.armor-point {
    margin-top: 5px;
    margin-right: 3px;
    width: 4px;
    height: 16px;
    background: #57B2BE;
    box-shadow: 0px 4px 12px rgba(87, 178, 190, 0.3);
    border-radius: 1px;
}

</style>