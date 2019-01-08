<template>
<div id="app">

    <Wrap>
    	<h1 slot="h">{{message}}</h1>
    	<solt>我是没有名字的额</solt>
    	<template slot='p'>
    		<span>我是App</span>
    		<span>我是App</span>
    		
    	</template>
    </Wrap>

</div>
</template>

<script>
import Wrap from './components/Wrap'
export default {
    components: {
        Wrap
    },
    data(){
        return {
            message: '千锋教育'
        }
    }
}
</script>

<style>

</style>
