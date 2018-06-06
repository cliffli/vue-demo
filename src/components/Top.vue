<template>
	<div class="topWrap clearfix">
		<div class="pull-left title">
			<h3><slot></slot></h3>
		</div>

		<div class="pull-left">
			<TimeModu></TimeModu>
		</div>

		<div class="setting pull-right">
			<a href="javascript:void(0)" @click="showHandle">lcl</a>
			<MyDialog v-bind:dlgOptions="dlgOptions" ref="myDialog">
				
				<form class="form-horizontal">
				  <div class="form-group">
				    <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
				    <div class="col-sm-10">
				      <input type="text" class="form-control" id="inputEmail3" placeholder="用户名" v-model="userName">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
				    <div class="col-sm-10">
				      <input type="password" class="form-control" id="inputPassword3" placeholder="密码" v-model="userPwd">
				    </div>
				  </div>
				</form>
			</MyDialog>
		</div>
	</div>
</template>

<script>
	import TimeModu from '@/components/TimeModu'
	import MyDialog from '@/components/MyDialog'

	export default {
  		name: 'Top',
  		 components: {   
  		 	TimeModu,
  		 	MyDialog
  		 },
  		 data(){
  		 	return {
  		 		dlgOptions:{},
  		 		userName: "",
  		 		userPwd: ""
  		 	}
  		 },
  		 methods:{
  		 	showHandle(){
  		 		this.dlgOptions={
  		 			title: "标题",
  		 			okText: "确认",
  		 			closeText: "关闭"
  		 		};
  		 		var _this = this;
  		 		this.$refs.myDialog.show().then(function() {
  		 			console.log(_this.userName)
  		 		
  		 		}).catch(function(){
  		 			alert("close")
  		 		});
  		 	}
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
	.setting{
		width: 100px;
    	font-size: 1.5em;
	}
</style>