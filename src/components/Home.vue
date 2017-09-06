<template>
  <div class="tab">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="recents" title="Recents" icon="restore"/>
      <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite"/>
      <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/>
    </mu-bottom-nav>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        bottomNav: 'recents'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
