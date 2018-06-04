<template>
	<div class="content">
		<h2>{{title}}</h2>
        <div class="article">
            <div class="atlTit">
                <h3>{{artitleTit}}</h3>
                <p>{{articleTime}}</p>
            </div>
            <div class="atlTxt" v-html="articleTxt"></div>
        </div>
	</div>
</template>

<script>
import qs from 'qs';

export default {
    name: "NewsDetail",
    data() {
        return {
            title: '企业新闻',
            artitleTit: '',
            articleTime: '',
            articleTxt: '',
            articleId: ''
        };
    },
    methods: {
        getData () {
            var data = {articleId: this.articleId};
            this.axios.post('http://api.cms.the9.com/news/article/info', qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(res => {
                console.log(res)
                let data = res.data.data.article;
                this.artitleTit = data.articleTitle;
                this.articleTime = data.time;
                this.articleTxt = data.articleContent;

            }, res => {
                // 错误回调
            })
        }
    },
    created() {
        this.articleId = this.$route.params.articleId;
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

    .atlTit{
        height: 140px;
        border-bottom: 1px dashed #ccc;
        text-align: center;
        margin-bottom: 25px;
        padding-top: 25px;
        box-sizing: border-box;

        h3{
            font: normal 24px/48px 'Microsoft Yahei';  
        };

        p{
            font-size: 18px;
            line-height: 48px;
        };
    }

    .atlTxt{
        font: 18px/40px 'Microsoft Yahei';
        color: #494949;
        text-indent: 2em;
    }
  
}
</style>
