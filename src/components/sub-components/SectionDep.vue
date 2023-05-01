<template>
    <div id="depoimentos">
        <h1>Depoimentos</h1>
        <br>
        <slider ref="slider" :options="options">
            <slideritem v-for="(item, index) in someList" :key="index" :style="item.style">{{ item.html }}</slideritem>
        </slider>
    </div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
    el: '#app',
    data() {
        return {
            someList: [
                {
                    html: 'slide1',
                    style: {
                        'background': '#1bbc9b'
                    }
                },
                {
                    html: 'slide2',
                    style: {
                        'background': '#4bbfc3'
                    }
                },
                {
                    html: 'slide3',
                    style: {
                        'background': '#7baabe'
                    }
                }
            ],
            options: {
                currentPage: 0
            }
        }
    },
    components: {
        slider,
        slideritem
    }
}
</script>
<style>
#depoimentos{
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

}
#depoimentos .slider-container{
    width: 50%;
}
</style>