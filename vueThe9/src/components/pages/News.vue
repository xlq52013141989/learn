<template>
	<div class="content">
		<h2>{{title}}</h2>
        <div class="newsWrap">
            <ul>
                <router-link v-for="item, index in newsList" :key="index"  :to=" '/news_detail/' + item.articleId " tag="li">
                    <a>
                        <time>{{item.time}}</time>
                        <p>{{item.articleTitle}}</p>
                    </a>
                </router-link>
            </ul>
        </div>
	</div>
</template>

<script>
import qs from 'qs';

export default {
    name: "News",
    data() {
        return {
            title: '企业新闻',
            newsList: {}
        };
    },
    methods: {
        getData () {
            var data = {page: 1, categoryId: 31, size: 20};
            this.axios.post('http://api.cms.the9.com/news/article', qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(res => {
                console.log(res)
                this.newsList = res.data.data.articles

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
.content{
    width: 1200px;
    margin: 50px auto;

    h2{
        border-bottom: 1px solid #ccc;
        font: normal 24px/48px 'Microsoft Yahei';  
        color: #666;
    }

    li{
        height: 48px;
        line-height:48px;

        a{
            color: #666;
        }

        time{
            float: left;
            margin-right: 60px;
        }

        p{
            float: left;
        }
    }
}
</style>
