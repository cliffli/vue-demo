<template>
	<div class="">
		<h3>{{curTime}}</h3>
	</div>
</template>

<script>
	export default {
  		name: 'TimeModu',
  		data() {
  			return {
		      curTime: new Date().getTime()
		    }
  		},
  		mounted() {
  			let _this = this;
  			setInterval(() => {
  				_this.curTime = new Date().getTime()
  			}, 1000);
  		}
	}
</script>

<style scoped>

</style>