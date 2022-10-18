<template>
    <n-space>
        <div class="card">
            <div class="card-left">
                <LeftCorners />
            </div>
            <div class="card-center">
                <div class="description-place">
                    <div class="text">
                        <div class="top-text">
                            <p class="red-text">Рок­-бунтари, применяющие свой музыкальный талант и дар убеждения в борьбе против власти.</p>
                        </div>
                        <div class="bottom-text">
                            <p class="green-text">“He's fucked up, the world is fucked up, you're fucked up too, because I'm the fucked up one in your head. If you want to save humanity, you have to be fucked up first.”</p>
                        </div>
                    </div>
                    <div class="image">
                        <rocker />
                    </div>
                </div>
                <div class="button-place">
                    кнопка
                </div>
            </div>
            <div class="card-right">
                <RightCorners />
            </div>
            
        </div>
    </n-space>
</template>

<script setup>
    import { NSpace} from 'naive-ui';
    import LeftCorners from "@/assets/icons/left-corners.svg"
    import RightCorners from "@/assets/icons/right-corners.svg"
    import rocker from "@/assets/images/Rocker.png"
</script>

<style>
.card {
    display: flex;
    flex-direction: row;
     height: 339px;
     width: 520px;
}
.description-place {
    display: flex;
    flex-direction: row;
}
.text {
    display: flex;
    flex-direction: column;
}
.top-text {
    width: 251px;
    height: 76px;
    margin-top: 24px;
}

.red-text {
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #D84048;
}

.bottom-text {
    width: 251px;
    height: 140px;
    margin-top: 20px;
}

.green-text {
    font-family: 'Rajdhani';
    font-style: Light;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    color: #2FF0A5;
}
</style>