<template>
	<!-- App -->
	<div id="app">
	
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
	
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view"
			         tabbar-fixed
			         navbar-through
			         :dynamic-navbar="true"
			         main>
				<!-- Navbar -->
				<f7-navbar>
					<f7-nav-center sliding>vueleaflet</f7-nav-center>
				</f7-navbar>
	
				<f7-toolbar tabbar
				            labels>
					<f7-link icon="i map-i"
					         text="地图"
					         tab-link="#home"
					         active></f7-link>
					<f7-link icon="i discovery-i"
					         text="设置"
					         tab-link="#settings"></f7-link>
					<f7-link icon="i setting-i"
					         text="设置"
					         tab-link="#settings"></f7-link>
				</f7-toolbar>

				<f7-tabs>
				<f7-tab id="map" active>
					<map-view></map-view>  
				</f7-tab>

				<f7-tab id="setting">
					<setting-view></setting-view>
				</f7-tab>
				</f7-tabs>
			</f7-view>
		</f7-views>
	
	</div>
</template>

<script>
import MapView from './components/Map'
import SettingView from './components/Setting'

export default {
	components:{
		MapView,
		SettingView,
	}
}
</script>

<style lang="css">
.i {
	width: 20px;
	height: 20px;
}

.map-i {
	background-image: url('./assets/map.png');
}

.discovery-i {
	background-image: url('./assets/discovery.png');
}

.setting-i {
	background-image: url('./assets/setting.png');
}
</style>