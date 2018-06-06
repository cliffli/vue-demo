<template>
	<div class="tm-content-wrap">
      <h4 class="text-left">
        <span>{{index}}.</span>
        <span>{{item.BIAOTI}}</span>
      </h4>

      <div class="da-content text-left">
          <div v-if="item.LX=='判断题'||item.LX=='单选题'">
              <div v-for="(el, index) in item.danan"  :key="el.DID" class="radio">
                  <label>
                      <input type="radio" name="pdGroup"  :checked='isChecked(item, index)' v-bind:value="el.DID"  @click="dnClick(item, index)" />
                      <span>{{el.ANSWER}}</span>
                  </label>
              </div>
          </div>

           <div v-if="item.LX=='多选题'">
                <div v-for="(el, index) in item.danan" :key="el.DID" class="checkbox">
                    <label>
                        <input type="checkbox" name="duoxGroup"  ref="dxCheck" @click="dnClick(item, index)" v-bind:value="el.DID" :checked='isChecked(item, index)' />
                        <span>{{el.ANSWER}}</span>
                    </label>
                </div>
            </div>
      </div>
	</div>
</template>

<script>
  import eventBus from '@/EventBus'

	export default {
  		name: 'TmContent',
  		data() {
  			return {
           item: {},
           index: ""
		    }
  		},
      created() {
        eventBus.$on('tm.index.click', (obj) => {
            this.item = obj.item;
            this.index = obj.index;
        });
      },
  		mounted() {
        
  		},
      methods: {
        dnClick(el, index){
          //转换为字符串
          if (el.LX == "多选题") {
              let selected = "";
              $(this.$refs.dxCheck).each(function (index, checkObj) {
                  if ($(checkObj).prop("checked")) {
                      selected += "" + index;
                  }
              });
              el.yourSelected= selected;
          } else {
              el.yourSelected= index + "";
          }
          
        },
        isChecked(item, index){
          if (item.yourSelected.indexOf(index) > -1) {
            return true;
          } else {
            return false;
          }
        }
      }
	}
</script>

<style scoped>
.tm-content-wrap {
  padding: 10px;
}
.da-content {
  padding: 10px;
}
</style>