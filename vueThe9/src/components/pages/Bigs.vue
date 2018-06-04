<template>
    <div class="content">
        <h2>{{title}}</h2>
        <div class="topListWrap">
            <div class="line"></div>
            <ul>
                <li v-for="item, index in listCmputed" :key="index">
                    <time>{{item.time}}</time>
                    <div class="arc"></div>
                    <p>{{item.someThing}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BigData from '@/assets/js/bigData'

export default {
    name: "Index",
    data() {
        return {
            title: "九城大事记",
            dataList: BigData.bigData
        };
    },
    computed:{  
        listCmputed () {
            return this.dataList.sort(this.up);
        }  
    },
    methods: {
        up(x, y) {
            return y.id - x.id
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@orange: #f7ac00;
.content {
    width: 1200px;
    margin: 50px auto;

    h2 {
        border-bottom: 1px solid #ccc;
        font: normal 24px/48px "Microsoft Yahei";
        color: #666;
    }

    .topListWrap {
        position: relative;
        .line{
            width: 10px;
            height:  100%;
            background-color: @orange;
            background-clip: content-box;
            padding: 0 4px;
            position: absolute;
            box-sizing: border-box;
            position: absolute;
            left: 15%;
            top: 30px;
        }

        ul {
            padding-top: 20px;

            li {
                line-height: 20px;
                margin-bottom: 30px;
                position: relative;
                time {
                    width: 15%;
                    float: left;
                }

                p {
                    width: 80%;
                    float: right;
                }

                .arc{
                    width: 10px;
                    height: 10px;
                    background-color: @orange;
                    border-radius: 5px;
                    position: absolute;
                    left: 15%;
                    top: 3px;

                }

                &::after {
                    content: "";
                    display: block;
                    clear: both;
                }
            }
        }
    }
}
</style>
