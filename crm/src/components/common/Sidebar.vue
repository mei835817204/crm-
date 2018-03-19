<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="(item,j) in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="j">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="j">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'home',
                        title: '用户查询'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '工具系统',
                        subs: [
                            {
                                index: 'baseform',//basetable
                                title: '生成优惠链接'
                            },
                            {
                                index: 'baseform',
                                title: '详情页下载到本地'
                            },
                            {
                                index: 'baseform',
                                title: '站外邀请码生成'
                            },
                            {
                                index: 'baseform',
                                title: '订单生成'
                            },
                            {
                                index: 'baseform',
                                title: '张数添加'
                            }

                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '用户列表',
                        subs: [
                            {
                                index: 'basetable',
                                title: '服务中的用户订单'
                            },
                            {
                                index: 'vuetable',
                                title: '历史用户订单'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '4',
                        title: '工单系统',
                        subs:[
                            {
                                index:'basetable',
                                title:'待处理工单'
                            },
                            {
                                index:'vuetable',
                                title:"历史工单"
                            }
                        ]
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
