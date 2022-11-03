<template>
    <n-space>
    <div class="ability-string">
        <div class="the-ability">
            
            <p class="skill-count-text">ИНТ +{{ count }}</p>
            <p class="skill-name-text">Знание местности</p>
        </div>
        <div class="ability-plus-minus">
            <button v-on:click="count--" class="skill-minus">-</button>
            <button v-on:click="count++" class="skill-plus">+</button>
        </div>
    </div>
    </n-space>
</template>

<script>
export default {
  data() {
    return {
      count: 2
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

.skill-count-text {
    margin-left: 5px;
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #49BFC7;
    text-shadow: -4px -4px 12px rgba(73, 191, 199, 0.3); 
}


.skill-name-text {
    margin-left: 15px;
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
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

.skill-minus {
    width: 32px;
    height: 32px;
    background: rgba(16, 24, 29, 0.5);
    border-radius: 2px;
    border: none;

    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    
    align-items: center;
    text-align: center;
    color: #49BFC7;
    text-shadow: -4px -4px 12px rgba(47, 240, 165, 0.3);
}

.skill-plus {
    width: 32px;
    height: 32px;
    background: rgba(16, 24, 29, 0.5);
    border-radius: 2px;
    border: none;
    margin-left: 25px;

    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    
    align-items: center;
    text-align: center;
    color: #49BFC7;
    text-shadow: -4px -4px 12px rgba(47, 240, 165, 0.3);
}
</style>