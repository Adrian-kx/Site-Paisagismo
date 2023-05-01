<template>
  <div>
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/IndexHeader.vue'
import Footer from './components/IndexFooter.vue'
import Section from './components/IndexSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Section
  }
}
</script>

<style>
</style>