<template>
  <div id="app">

    <app-header/>

    <app-content/>


  </div>
</template>

<script>
	/*这是导入文件*/
import AppHeader from './components/Header'
import AppContent from './components/Content'

export default {
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}



</style>
