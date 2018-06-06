<template>
	<div class="tm-index-wrap">
		  <ul class="clearfix">
          <li v-for="(item, index) in tmArry" :key="item.TID" @click="tmClick(item, index+1)" :class="[(item.yourSelected!=''? 'sy-selected':'')]"> {{index+1}}</li>
      </ul>
	</div>
</template>

<script>
  import axios from 'axios'
  import eventBus from '@/EventBus'

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

            //默认选择第一题
            if(response.data.length > 0) {
              eventBus.$emit('tm.index.click', {
                item: response.data[0],
                index: 1
              });
            }

          }).catch((error) => {
            console.log(error);
          });
        },

        tmClick(item, index) {
            eventBus.$emit('tm.index.click', {
              item,
              index
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
.sy-selected
{
    background: #bcd0da;
    color: #1f1d1f;
}

.sy-checked
{
    color: #f72020;
    font-weight: bold;
}
</style>