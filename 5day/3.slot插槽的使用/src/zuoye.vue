<template>
<div id="app">




   <!-- <tabs>
        <tab ref='one' v-for='(item,sss) in data' >{{item.text}}</tab>
        <!--<tab ref='two'>发现</tab>
        <tab ref='three'>热门</tab>
        <tab ref='four' >设置</tab>
        
    </tabs>-->
    <tad ref='one'>ssss</tad>
    <!--<tab @click='clickEvent'>www</tab>-->
    <!--<section @click='clickEvent'>123</section>-->
</div>
</template>

<script>
import Tabs from './components/tags'
import Tab from './components/tag'
export default {
    components: {
        Tabs,
        Tab
    },
    data(){
    	return{
    		className:'sss',
    		data:[
    			{
    				text:'首页'
    			},
    			{
    				text:'发现'
    			},
    			{
    				text:'热门'
    			},
    			{
    				text:'设置'
    			}
    		]
    	}
    },
    mounted(){
    	console.log('sss')
    	console.log(this.$refs.one)
    	this.$refs.one.testAction()
    },
    methods:{
    	clickEvent(){
    		console.log('sss')
    	}
    }
    
}
</script>

<style>

</style>
