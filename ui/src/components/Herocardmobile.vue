<template>
    <n-space justify="center" align="center">
        <div class="card-mobile">
                <div class="description-place-mobile">
                    <div class="text-mobile">
                        <p class="red-text-mobile">Рок­-бунтари, применяющие свой музыкальный талант<br>и дар убеждения в борьбе против власти.</p>
                        <p class="green-text-mobile">“He's fucked up, the world<br>is fucked up, you're fucked up too,<br>because I'm the fucked up one<br>in your head.<br>If you want to save humanity, <br>you have to be fucked up first.”</p>
                    </div>
                    <div class="image-mobile">
                        <img class="Rocker-img-mobile" src="@/assets/images/rockermobile.png">
                    </div>
                </div>
                <div class="bottom-mobile">
                    <div class="vector-part">
                        <protocol/>
                        <task-manager style="margin-top: 20px;"/>
                    </div>
                    <div onclick="location.href='https://arcticmonkeys.com/';" class="button-place-mobile">
                        <rocker-button-mobile />
                    </div>
                </div>
        </div>
    </n-space>
</template>

<script setup>
    import { NSpace} from 'naive-ui';
    import Protocol from "@/assets/vectors/protocol.svg"
    import TaskManager from "@/assets/vectors/taskmanager.svg"
    import RockerButtonMobile from "@/assets/buttons/rockerbuttonmobile.svg"
</script>

<style>
.card-mobile {
     display: flex;
     flex-direction: column;
     height: 317px;
     width: 340px;
}

.description-place-mobile {
    display: flex;
    flex-direction: row;
}

.text-mobile {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    width: 200px;
   
}

.red-text-mobile {
    width: 200px;
    font-family: 'DIN Alternate';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #D84048;
}

.green-text-mobile {
    width: 200px;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #2FF0A5;
}

.image-mobile {
    float: right;
    margin-right: 10px;
    width: 122px;
    height: 237px;
}

.Rocker-img-mobile {
    float: right;
    width: 97px;
    height: 237px;
}

.bottom-mobile {
    display: flex;
    flex-direction: row;
    height: 60px;
    margin-top: 20px;
   
}

.vector-part {
    display: flex;
    flex-direction: column;
}

.button-place-mobile {
    margin-left: 64px;
}




</style>