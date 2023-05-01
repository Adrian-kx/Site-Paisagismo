<template>
    <Section>
        <Home></Home>
        <Sobre></Sobre>
        <Trabalhos></Trabalhos>
        <Funcoes></Funcoes>
        <Depoimentos></Depoimentos>
        <localizacao></localizacao>
    </Section>
</template>
<script>
import Home from './sub-components/SectionHome.vue'
import Sobre from './sub-components/SectionSobre.vue'
import Trabalhos from './sub-components/SectionJobs.vue'
import Funcoes from './sub-components/SectionFunc.vue'
import Depoimentos from './sub-components/SectionDep.vue'
import localizacao from './sub-components/SectionLoc.vue'
export default {
    components: {
    Home, 
    Sobre,
    Trabalhos,
    Funcoes,
    Depoimentos,
    localizacao
  }
}
</script>
<style>
    section{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>