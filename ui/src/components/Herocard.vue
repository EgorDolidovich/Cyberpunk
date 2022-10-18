<template>
    <n-space>
        <div class="card">
            <div class="card-left">
                <LeftCorners />
            </div>
            <div class="card-center">
                <div class="description-place">
                    <div class="text">
                        <p class="red-text">Рок­-бунтари, применяющие свой музыкальный талант и дар убеждения в борьбе против власти.</p>
                        <p class="green-text">“He's fucked up, the world<br>is fucked up, you're fucked up too, because I'm the fucked up one in your head. If you want to save humanity, you have to be fucked up first.”</p>
                    </div>
                    <div class="image">
                        <img class="Rocker-img" src="@/assets/images/Rocker1.png">
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
    import rocker from "@/assets/images/Rocker1.png"
    import RockerButton from "@/assets/buttons/rockerbutton.svg"
</script>

<style>
.card {
    display: flex;
    flex-direction: row;
     height: 339px;
     width: 520px;
}

.card-center {
    width: 492px;
}

.description-place {
    display: flex;
    flex-direction: row;
}

.text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 251px;
}

.red-text {
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #D84048;
}

.green-text {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 50;
    font-size: 16px;
    line-height: 20px;
    color: #2FF0A5;
}

.image {
    width: 231px;
    height: 279px;
}

.Rocker-img {
    float: right;
    margin-right: 40px;
    margin-top: 18px;
    width: 110px;
    height: 237px;
}

.button-place {
    
    display: flex;
    flex: 1;
    justify-content: center;
}




</style>