<template>
    <n-space>
    <div class="ability-string">
        <div class="the-ability">
            <div class="ability-count">
                <AbilityFrame />
                <p class="ability-count-text">{{ count }}</p>
            </div>
                
            <p class="ability-name-text">СКОРОСТЬ</p>
        </div>
        <div class="ability-plus-minus">
            <button v-on:click="count--" class="ability-minus" >-</button>
            <button v-on:click="count++" class="ability-plus">+</button>
        </div>
    </div>
    </n-space>
</template>

<script setup>
import AbilityFrame from "@/assets/vectors/abilityframe.svg"
</script>

<script>
export default {
  data() {
    return {
      count: 5
    }
  }
}
</script>

<style>
.ability-string {
    height: 42px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}

.the-ability {
    display: flex;
    align-items: center;
    float: left;
    height: 42px;
}

.ability-count {
    width: 48px;
    height: 42px;
}

.ability-count-text {
    position: relative;
    left: 14px;
    bottom: 64px;
    
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    width: 28px;
    align-items: center;
    text-align: center;
    color: #2FF0A5;
    text-shadow: -4px -4px 12px rgba(47, 240, 165, 0.3);
}

.ability-name-text {
    margin-left: 10px;
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #D84048;
    text-shadow: -4px -4px 12px rgba(216, 64, 72, 0.3);
    
}

.ability-plus-minus {
    display: flex;
    align-items: center;
    float: right;
    margin-right: 10px;
    height: 42px;
}

.ability-minus {
    width: 32px;
    height: 32px;
    background: rgba(16, 24, 29, 0.5);
    border-radius: 2px;
    border: 0px;

    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    
    align-items: center;
    text-align: center;
    color: #2FF0A5;
    text-shadow: -4px -4px 12px rgba(47, 240, 165, 0.3);
}

.ability-plus {
    width: 32px;
    height: 32px;
    background: rgba(16, 24, 29, 0.5);
    border-radius: 2px;
    border: 0px;
    margin-left: 25px;

    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    
    align-items: center;
    text-align: center;
    color: #2FF0A5;
    text-shadow: -4px -4px 12px rgba(47, 240, 165, 0.3);
}
</style>