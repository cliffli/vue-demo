<template>
	<div class="modal fade" ref="myModal" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" aria-label="Close"  @click="closeHandle"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">{{ dlgOptions.title }}</h4>
	      </div>
	      <div class="modal-body">
	         <slot></slot>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal" @click="okHandle">{{dlgOptions.okText}}</button>
	        <button type="button" class="btn btn-primary" v-if="dlgOptions.closeText" @click="closeHandle">{{dlgOptions.closeText}}</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
	
	export default {
  		name: 'MyDialog',
  		props: ["dlgOptions"],
  		data() {
  			return {
		        resolve: '',
		        reject: '',
		        promise: '' // 保存promise对象
		    }
  		},
  		mounted() {

  		},
  		methods: {
  			okHandle:function(){
  				this.resolve();
  				$(this.$refs.myModal).modal('hide');
  			},
  			closeHandle:function(){
  				this.reject();
  				$(this.$refs.myModal).modal('hide');
  			},
  			show: function() {
  				$(this.$refs.myModal).modal('show');

  				this.promise = new Promise((resolve, reject) => {
		            this.resolve = resolve;
		            this.reject = reject;
		        });
		        return this.promise;   
  			}
  		}
	}
</script>

<style scoped>

</style>