<template>
 <div class="container">
     <top></top>
     <userHead></userHead>
     <div class="userView-box">
        <div class="userView">
            <navigator></navigator>
            <div class="content"><router-view></router-view></div>
        </div>
     </div>
     <bottom></bottom>
     <foot></foot>
 </div>
</template>

<script>
import top from '../common/top.vue'
import foot from '../common/foot.vue'
import bottom from '../common/bottom.vue'
import userHead from '../common/user/userhead.vue'
import navigator from '../common/user/navigator.vue'
import {mapState} from 'vuex'
export default {
 data() {
  return {
      userView:'',
  }
 },
 created() {
    if(this.isLogin){
		
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
 },
computed: {
  ...mapState(['isLogin']),
},
 components: {
     'top':top,
     'foot':foot,
     'bottom':bottom,
     'userHead':userHead,
     'navigator':navigator
 }
}
</script>

<style scoped lang="scss">
    .userView-box{
        background: #fafafa;
    }
    .userView{
        overflow: hidden;
        width: 1190px;
        margin: 0 auto;
    }
    .content{
        float: left;
    }
</style>
