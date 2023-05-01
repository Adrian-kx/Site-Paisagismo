<template>
    <div id="trabalhos">
        <h1>Trabalhos</h1>
        <br>
        <slider ref="slider" :options="options">
            <slideritem class="slide_config" v-for="(item, index) in someList" :key="index" :style="item.style">{{ item.html }}
            </slideritem>
            <div slot="loading">loading...</div>
        </slider>
    </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
    el: '#app',
    data() {
        return {
            //data list [array]
            someList: [
                {
                    html: 'slide1',
                    style: {
                        'background-image': 'url("https://papodepaisagista.com/wp-content/uploads/2021/10/Imagem-Destaque-site-2.png")'
                    }
                },
                {
                    html: 'slide2',
                    style: {
                        'background-image': 'url("https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=")'
                    }
                },
                {
                    html: 'slide3',
                    style: {
                        'background-image': 'url("https://images.unsplash.com/photo-1621157281974-e926449624e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZ3JlZW58ZW58MHx8MHx8&w=1000&q=80")'
                    }
                }
            ],
            options: {
                currentPage: 0,
                autoplay: '5000',
                loop: true
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
#trabalhos{
    width: 80%;
    height: 500px;
    display: flex;
    flex-direction: column;

}
.slide_config {
    display: flex;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: center;
}
</style>