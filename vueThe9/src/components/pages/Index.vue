<template>
	<div class="content">
        <m-swipe swipeid="swipe" ref="swiper" :autoPlay="3000" effect="slide">
            <div v-for="top in tops" :key="top.id" class="swiper-slide" slot="swiper-con" >
                <img :src="top.imgsrc">
            </div>
        </m-swipe>

        <div class="newsWrap">
            <div class="tit">
                <h2><strong>N</strong>EWS</h2>  
                <router-link to="/news">more></router-link>
            </div>
            <div class="list">
                <ul>
                    <router-link v-for="item, index in listItem" :key="index" :to=" '/news_detail/' + item.articleId " tag="li" >
                        <a>
                            <div class="newsTit">
                                <h3>{{item.articleTitle}}</h3>
                                <time>{{item.time}}</time>
                            </div>
                            <div class="newsTxt">
                                <p>{{item.content.replace(/<[^>]+>/g,"")}}</p>
                            </div>
                        </a>
                    </router-link>
                </ul>
            </div>
        </div>
	</div>
</template>

<script>
import qs from 'qs';
import swiper from "@/components/common/swipe";

export default {
    name: "Index",
    data() {
        return {
            listItem : {},
            tops: [
                {
                    id: 1,
                    imgsrc: require("../../assets/images/colImg1.jpg")
                }
            ]
        };
    },
    components: {
        "m-swipe": swiper
    },
    methods: {
        getData () {
            var data = {page: 1, categoryId: 31, size: 5};
            this.axios.post('http://api.cms.the9.com/news/article', qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(res => {
                console.log(res)
                this.listItem = res.data.data.articles;

            }, res => {
                // 错误回调
            })
        }
    },
    mounted() {
        this.getData();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@blue: #5b7492;
.content{

    .swiper-container {
        width: 100%;
    }
    .swiper-slide {
        height: 600px;
        overflow: hidden;
        position: relative;

         div {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            position: absolute;
            background-color: @blue;
        }
        img {
            top: 50%;
            position: relative;
            transform: translate(0, -50%);
        }
    }

    .newsWrap{
        width:  1200px;
        margin: 0 auto;
        padding-top: 50px;

        .tit{
            height: 60px;
            overflow: hidden;
            line-height: 60px;
            border-bottom: 1px solid #c9c9c9;

            h2{
                font-size: 24px;
                font-weight: normal;
                float: left;

                strong{
                    font-size: 48px;
                    font-weight: normal;
                }
            }

            a{
                color: #494949;
                text-decoration: none;
                float: right;
                position: relative;
                top: 15px;
            }
        }

        .list{

            li{
                height: 130px;
                overflow: hidden;
                padding-top: 30px;

                a{
                    text-decoration: none;
                }

                .newsTit{
                    overflow: hidden;
                    font-size: 16px;
                    line-height: 16px;
                    color: #000;
                    margin-bottom: 16px;

                    h3{
                        font-weight: normal;
                        float: left;
                    }

                    time{
                        float: right;
                    }
                }

                .newsTxt{
                    img{
                        float: left;
                        margin-right: 28px;
                    }

                    p{
                        font-size: 14px; 
                        line-height: 24px;
                        color: #9a9a9a;
                    }
                }
            } 
        }
    }

    
}
</style>
