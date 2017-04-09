<template>
  <div id="app">
    <f7-statusbar></f7-statusbar>

    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <f7-navbar theme="white">
          <f7-nav-left>
          </f7-nav-left>
          <f7-nav-center sliding>小好地图</f7-nav-center>
          <f7-nav-right>
          </f7-nav-right>
        </f7-navbar>
        <f7-pages>
          <f7-page toolbar-fixed navbar-fixed>
            <f7-toolbar tabbar labels>
              <f7-link icon="map-icon" :text="$t('Map')" tab-link="#map-page" active></f7-link>
              <f7-link icon="discovery-icon" :text="$t('Discovery')" tab-link="#discovery-page"></f7-link>
              <f7-link icon="setting-icon" :text="$t('Setting')" tab-link="#setting-page"></f7-link>
            </f7-toolbar>
            <f7-tabs>
              <f7-tab id="map-page" active>
                <map-view></map-view>  
              </f7-tab>
              <f7-tab id="discovery-page">
                <discovery-view></discovery-view>
              </f7-tab>
              <f7-tab id="setting-page">
                <setting-view></setting-view>
              </f7-tab>
            </f7-tabs>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </div>
</template>

<script>
import MapView from './components/Map'
import SettingView from './components/Setting'
import DiscoveryView from './components/Discovery'

export default {
  name: 'app',
  components:{
    MapView,
    DiscoveryView,
    SettingView,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

.map-icon{
  background-image: url('./assets/map.png')
}

.discovery-icon{
  background-image: url('./assets/discovery.png')
}

.setting-icon{
  background-image: url('./assets/setting.png')
}


.tabs, .tab{
  height: 100%;
}
</style>
