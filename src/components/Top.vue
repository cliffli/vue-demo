<template>
	<div class="topWrap clearfix">
		<div class="pull-left title">
			<h3><slot></slot></h3>
		</div>

		<div class="pull-right">
			<TimeModu></TimeModu>
		</div>
	</div>
</template>

<script>
	import TimeModu from '@/components/TimeModu'
	export default {
  		name: 'Top',
  		 components: {   
  		 	TimeModu
  		 }
	}
</script>

<style scoped>
	.topWrap{
		height: 100%;
		line-height: 100%;
	}
	.title{
		width: 200px;
		text-align: left;
	}
</style>