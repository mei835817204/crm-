<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :offset="5">
                <div class="grid-content bg-purple">
                    用户查询:
                    <el-input
                        placeholder="请输入内容"
                        v-model="input"
                        clearable
                        class="user-input">
                    </el-input>
                    <el-button type="primary">搜索</el-button>
                </div>
            </el-col>
        </el-row>
        
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <h2>订单记录：</h2>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                        prop="release"
                        label="版本">
                        </el-table-column>
                        <el-table-column
                        prop="price"
                        label="价格">
                        </el-table-column>
                        <el-table-column
                        prop="startDate"
                        label="订单开始时间">
                        </el-table-column>
                        <el-table-column
                        prop="endDate"
                        label="订单结束时间">
                        </el-table-column>
                        <el-table-column
                        prop="period"
                        label="周期">
                        </el-table-column>
                        <el-table-column
                        prop="platform"
                        label="平台">
                        </el-table-column>
                    </el-table>
                </div>
                <div class="grid-content bg-purple">
                    <h2>最新详情：</h2>
                    <el-table
                        :data="tableData2"
                        stripe
                        style="width: 100%">
                        <el-table-column
                        prop="platform"
                        label="平台">
                        </el-table-column>
                        <el-table-column
                        prop="release"
                        label="版本">
                        </el-table-column>
                        <el-table-column
                        prop="duration"
                        label="时长">
                        </el-table-column>
                        <el-table-column
                        prop="allSheets"
                        label="总张数">
                        </el-table-column>
                        <el-table-column
                        prop="surplusSheets"
                        label="剩余张数">
                        </el-table-column>
                        <el-table-column
                        prop="deriveSheets"
                        label="已导出张数">
                        </el-table-column>
                        <el-table-column
                        prop="visits"
                        label="续费访问次数">
                        </el-table-column>
                        <el-table-column
                        prop="isTry"
                        label="是否试用">
                        </el-table-column>
                        <el-table-column
                        prop="isEvaluate"
                        label="能否评价">
                        </el-table-column>
                    </el-table>
                </div>
                <div>
                    <h2>备注:</h2>
                    <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入内容"
                    v-model="textarea">
                    </el-input>
                    <p>马磊 2018-03-19 10:21:30</p>
                </div>
            </el-col>
            <el-col :span="8" class="button-box">
                <div class="grid-content bg-purple">
                    <el-button class="button-L" type="primary">订单生成</el-button>
                    <el-button class="button-L" type="primary">添加张数</el-button>
                    <el-button class="button-L" type="primary">生成优惠券</el-button>
                    <el-button class="button-L" type="primary">站外邀请码生成</el-button>
                    <el-button class="button-L" type="primary">详情页下载到本地</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :offset="7">
                <div class="grid-content bg-purple">
                    <el-button type="primary">确定</el-button>
                    <el-button type="info">取消</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
    import {mapState,mapActions} from "vuex";
    export default {
    data() {
      return {
        input: '',
        textarea:''
      }
    },
    computed:{
        ...mapState({
            tableData:'tableData',
            text_:'text_',
            tableData2:'tableData2'
        })
    },
    methods:{
        ...mapActions([
            'getUser'
        ]),
        getUsers(){
            this.getUser({url:"http://app.wusetech.com:30005/ajax_get_crm_user_infos",nick:"kkaxua",soft_mark:"1688"})
        },
    },
    mounted(){
        this.getUsers()
    }
  }
</script>

<style scoped>
    .user-input{
        width:200px;
    }
    .button-box .button-L{
        width:100%;
        margin-left:0;
        margin-top:30px;
    }
</style>