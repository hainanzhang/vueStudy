<template>
<div id="app">

	<h1>我是</h1>   
   	<p>{{isSelected}}</p>
    <input type="checkbox" v-model="isSelected">
   	<transition  leave-active-class="hinge" enter-active-class="bounce"
        appear-active-class="jello" appear
    >
        <Box v-if="isSelected"/>
    </transition>
	   	
    
    
</div>
</template>

<script>
	
	
	
	import Box from './components/Box'
	import bar from './components/Bar'
	export default {
		components:{
			bar,
			Box
		},
		data(){
			return{
				isSelected:true
			}
		}
		
		
	}
</script>

<style>
.box{
	height: 200px;
	width: 200px;
	background: burlywood;
}

.hinge, .bounce{
    animation-duration: 1500ms;
}
.jello{
	animation-duration: 5000ms;
}

</style>
