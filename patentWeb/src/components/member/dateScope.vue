<template>
    <div>
        <datepicker @opened="openView"
                    @selected="disableTo"
                    v-model="startDate"
                    :disabledDates="minDate"
                    :clear-button = "true"
                    :highlighted="highlightedFn"
                    :format="customFormatter"
                    :language="languages[lang]"
                    :placeholder="$t('START_TIME')"></datepicker>
        <i class="el-icon-minus"></i>
        <datepicker @opened="openView"
                    @selected="disableFrom"
                    v-model="endDate"
                    :disabledDates="maxDate"
                    :clear-button = "true"
                    :highlighted="highlightedFn"
                    :format="customFormatter"
                    :language="languages[lang]"
                    :placeholder="$t('END_TIME')"></datepicker>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import {en, ja, zh} from 'vuejs-datepicker/dist/locale'
export default {
    name: "vo-date-range",
    components:{ Datepicker },
    data:()=>({
        highlightedFn: {
            customPredictor(date) {
                if (date.getDate() === (new Date()).getDate()) {
                    return true;
                }
            }
        },
        languages:{en: en,zh: zh,jp: ja},
        lang:'',
        startDate:'',
        endDate:'',
        minDate:{},
        maxDate:{},
        html:''
    }),
    methods: {
    
          //自定义时间格式
            customFormatter(date) {
                return moment(date).format('YYYY-MM-DD')
            },
            
            //在打开时间控件的时候，获取localStorage中的语言。
            //这样做的目的是为了与父级语言切换同步
        openView(){
            this.lang = JSON.parse(localStorage.getItem('locale')).type
        },

        //设置disable时间区间
        disableTo(date) {
                this.maxDate = {
                    to:date,
               from : null
            }
            this.$emit('getDate',{startDate:date,endDate:this.endDate});
        },
        disableFrom(date) {
                this.minDate = {
                    to:null,
               from: date
                }
            this.$emit('getDate',{startDate:this.startDate,endDate:date});
        }
    }
}
</script>
