<template>
<div class="page subpage" id="detail">
      商品详情
      {{detailName}}
      {{detailId}}
</div>
</template>

<script>
export default {
	data(){
		return{
			detailName:'',
			detailId:''
		}
	},
    watch:{
    	'$route.params.name':{
				handler(newVal,oldVal){
					console.log(newVal)
					this.detailName=newVal
				},
				immediate:true
		},
		'$route.params.id':{
				handler(newVal,oldVal){
					console.log(newVal)
					this.detailId=newVal
				},
				immediate:true
			}
    }
}
</script>

<style>
#detail{
    background: thistle;
}
</style>
