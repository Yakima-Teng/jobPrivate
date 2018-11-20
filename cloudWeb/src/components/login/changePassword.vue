<template>
 <div class="container">
    <loginHead :headmsg="headmsg"></loginHead>
    <changesteps :activeStep="active"></changesteps>
    <div class="comp-f">
        <security v-if="active==0" :tel="tel" @next="next"></security>
        <resetPassword v-if="active==1" :tel="tel" @next="next"></resetPassword>
        <resetSuccess v-if="active==3"  @next="next"></resetSuccess>
    </div>
    <p class="footBorder"></p>
    <loginFoot></loginFoot>
 </div>
</template>

<script>
import loginHead from '../common/login/loginHead.vue'
import loginFoot from '../common/login/loginFoot.vue'
import changesteps from '../common/login/changesteps.vue'
import confirm from '../common/login/confirm.vue'
import security from '../common/login/security.vue'
import resetPassword from '../common/login/resetPassword.vue'
import resetSuccess from '../common/login/resetSuccess.vue'
import Api from '../../static/js/api.js'
export default {
metaInfo () {
    return {
        title: '修改密码-创新科技服务云平台',
    }
},
 data() {
  return {
      active:0,
      headmsg:'修改密码',
      tel:''
  }
 },
 created() {
     if(this.isLogin){
		 this.getUserinfo();
	}else{
		this.$router.push({path:'/login'})
	}
 },
 computed: {
 },
 methods: {
    next(tel) {
        //下一步操作
        this.tel=tel
        if (this.active++ > 2){ 
            this.active = 0;
        }
        if(this.active==2){
            this.active=3;
        }
    },
    getUserinfo(){
        //获取用户信息
        Api.getUserInfo().then(res=>{
            if(res.data.code==200){
                this.tel=res.data.data.tel;
                console.log(this.tel);
            }
        })
    },
 },
 components: {
    'loginHead':loginHead,
    'loginFoot':loginFoot,
    'changesteps':changesteps,
    'security':security,
    'resetPassword':resetPassword,
    'resetSuccess':resetSuccess
 }
}
</script>

<style scoped lang="scss">
    // .btnBox{
    //     width: 490px;
    //     margin: 26px auto 238px;
    //     button{
    //         width: 76px;
    //         height: 28px;
    //         border: 1px solid #7abd54;
    //         outline: none;
    //         background: #f4ffee;
    //         font-size: 14px;
    //         cursor: pointer;
    //         &:hover{
    //             background:#7abd54;
    //             color: white;
    //         }
    //     }
    // }
    .comp-f{
        height: 400px;
    }
    .footBorder{
        width: 1200px;
        margin: 0 auto 59px;
        height: 2px;
        background: #dddddd;
    }
</style>
