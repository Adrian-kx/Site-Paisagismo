<template lang="">
    <div class="section_home">
        <h2>PAISAGISMO E FLORICULTURA</h2>
        <p>Serviço Completo de Paisagismo e Jardinagem</p>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.section_home {
    height: 400px;
    width: 100%;
    background-image: url("https://papodepaisagista.com/wp-content/uploads/2021/10/Imagem-Destaque-site-2.png");
    display: flex;
    background-repeat: no-repeat;
    background-size: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
    filter: saturate(150%);
    box-shadow: 1px 10px 25px 1px rgba(0, 0, 0, 0.525);
    background-position: center;
}

.section_home h2 {
    color: rgb(255, 255, 255);
    font-size:xx-large;
    margin: 10px;
}

.section_home p {
    color: rgb(255, 255, 255);
    margin: 10px;
    font-style: italic;
    font-size: 1.2em;
}
@media (max-width: 950px)
{
    .section_home{
        height: 200px;
    }
    .section_home h2{
        font-size: x-large;
    }
}
</style>