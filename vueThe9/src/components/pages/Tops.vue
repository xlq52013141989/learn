<template>
    <div class="content">

        <div class="topsWrap">
            <div class="topBig">
                <img src="@/assets/images/new_object.jpg" alt="">
                <span>九城与区块链技术公司签定合作协议 布局区块链服务业务</span>
            </div>
            <div class="topSmall">
                <div class="item">
                    <img src="@/assets/images/rd.jpg" alt="">
                    <span>《红龙传说》精彩CG</span>
                </div>
                <div class="item">
                    <img src="@/assets/images/edu.jpg" alt="">
                    <span>2017九育布局游戏教育生态圈</span>
                </div>
            </div>
        </div>

        <h2>{{title}}</h2>
        <div class="headlineListWrap">
            <ul>
                <li v-for="item, index in headlineData" :key="index">
                    <img :src="item.imgsrc" alt="">
                    <p>{{item.title}}</p>
                    <time>{{item.time}}</time>
                </li>
            </ul>
        </div>    

    </div>
</template>

<script>
var headlineListData = [
    {
        time: '2018.01.16',
        title: '九城与区块链技术公司签定合作协议 布局区块链服务业务',
        imgsrc: require('@/assets/images/new_object.jpg')
    },
    {
        time: '2017.03.06',
        title: '2017第九城市年会集锦',
        imgsrc: require('@/assets/images/meet.jpg')
    },
    {
        time: '2017.03.06',
        title: '《红龙传说》精彩CG',
        imgsrc: require('@/assets/images/rd.jpg')
    },
    {
        time: '2017.03.06',
        title: '2017九育布局游戏教育生态圈',
        imgsrc: require('@/assets/images/edu.jpg')
    },
    {
        time: '2017.03.06',
        title: '九城游戏学院招生启动',
        imgsrc: require('@/assets/images/edu02.jpg')
    }

]
export default {
    name: "Index",
    data() {
        return {
            title: "九城头条",
            headlineData: headlineListData
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
    width: 1200px;
    margin: 50px auto;

    h2 {
        border-bottom: 1px solid #ccc;
        font: normal 24px/48px "Microsoft Yahei";
        color: #666;
    }

    .topsWrap {
        overflow: hidden;
        font-size: 14px;
        margin-bottom: 30px;

        .topBig {
           width: 795px;
           float: left;
           position: relative; 
        }

        .topSmall{
            width: 390px;
            float: right;

            .item{
                height: 218px;
                overflow: hidden;
                position: relative;

                &:nth-of-type(1) {
                    margin-bottom: 10px;
                }
            }
        }

        span{
            width:100%;
            height: 30px;
            background-color: rgba(0, 0, 0, 0.5);
            line-height:30px;
            color: #fff;
            padding-left: 12px;
            position: absolute;
            left: 0;
            bottom: 0;
            box-sizing: border-box;
        }

        img{
            width: 100%;
        }
    }

    .headlineListWrap{
        padding-top: 30px;
        ul{
            width:1220px;
            overflow: hidden;

            li{
                width: 228px;
                font-size: 14px;
                float: left;
                margin-right: 15px;

                img{
                    width: 225px;
                }

                p{
                    overflow:hidden;
                    line-height: 42px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>
