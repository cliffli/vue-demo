<template>
	<div class="tm-index-wrap">
		  <ul class="clearfix">
          <li v-for="(item, index) in tmArry" :key="item.TID" > {{index+1}}</li>
      </ul>
	</div>
</template>

<script>
  import axios from 'axios'
	export default {
  		name: 'TimuIndex',
  		data() {
  			return {
		      tmArry: []
		    }
  		},
  		mounted() {
  			this.getTmList();
  		},
      methods: {
        getTmList() {
          var that = this;

          axios.get('/static/tm.json').then(function(response) {

            that.tmArry = response.data;

          }).catch((error) => {
            console.log(error);
          });
        }
      }
	}
</script>

<style scoped>
.tm-index-wrap ul{
  list-style-type: none;
  margin: 0;
    padding: 5px;
    cursor: pointer;
}
.tm-index-wrap ul li{
  width:30px;
  float: left;
  padding: 5px;
  border: 1px solid #ddd;
}
</style>