<template>
	<div class="footer">
        <div class="friendship">
            <a href="">关于第九城市</a> | 
            <a href="">投资者关系</a> | 
            <a href="">企业文化</a> | 
            <a href="">招贤纳士</a> | 
            <a href="">合作伙伴</a>
        </div>
        <p>－上海第九城市信息技术有限公司－ 法律声明－办公地址：上海市张江高科技园区碧波路690号3号楼</p>
        <p>本公司游戏产品适合18岁以上成年人使用  公司违法信息举报电话：021-51729559</p>
        <p>客服电话：021-80203660&nbsp;&nbsp;&nbsp;上海市网络游戏行业自律公约</p>
        <p>增值电信业务经许可证B2-20100087号上海市互联网违法与违规举报中心 沪网文【2011】0493-053<img src="@/assets/images/footerImg1.jpg" /></p>
        <div class="footerImg">
            <img alt="" src="@/assets/images/footerImg2.png">
            <img alt="" src="@/assets/images/footerImg3.png">
            <img alt="" src="@/assets/images/footerImg4.png">
            <img alt="" src="@/assets/images/footerImg5.png">
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
           
        };
    },
    props: ['foot']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer{
    height: 400px;
    background-color: #e9e9e9;
    text-align: center;
    margin-top: 5%;
    padding-top: 50px;
    box-sizing: border-box;

    .friendship{
        margin-bottom: 86px;

        a{
            color: #353535;
            text-decoration: none;
        }
    }

    p{
        line-height: 36px;
        color: #8c8c8c;

        img{
            margin-left: 10px;
        }
    }

    .footerImg{
        margin-top: 30px;

        img{
            margin: 0 15px;
        }
    }
}
</style>
