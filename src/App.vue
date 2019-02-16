<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style type="text/css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height:100%;
  }
  *{
    margin:0;
    padding:0;
  }
  html,body{
    width:100%;
    height:100%;
  }
  ul{list-style:none}
  a{text-decoration: none;}
  img{vertical-align:top;border:none}

  .clearf:after,
  .clearf:before{
    content:"";
    display:block;
    clear:both;
  }
</style>
