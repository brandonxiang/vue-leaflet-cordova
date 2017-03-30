<template>
    <f7-toolbar tabbar>
        <f7-link tab-link="#tab1">Tab 1</f7-link>
        <f7-link tab-link="#tab2">Tab 2</f7-link>
    </f7-toolbar>
</template>

<script>

export default {
  computed:{
    items:function(){
      return [{
        link: "/",
        logo: require("../assets/map.png"),
        name: this.$t('Map')
      },{
        link: "/discovery",
        logo: require("../assets/discovery.png"),
        name: this.$t('Discovery')
      },{
        link:"/setting",
        logo: require("../assets/setting.png"),
        name: this.$t('Setting')
      }];
    }
  },
  methods:{
    itemclick(){
      console.log(1)
    }
  }
}
</script>
