<template>
	<div id="app">
        <div class="header">
            <div class="wrap">
                <h1 class="logo"><router-link to="/"><img src="@/assets/images/logo.png" alt=""></router-link></h1>
                <nav class="menu">
                    <ul>
                        <li>
                            <router-link to="/" exact>首页</router-link>
                        </li>
                        <li>
                            <router-link to="/tops">九城头条</router-link>
                        </li>
                        <li>
                            <router-link to="/bigs">九城大事记</router-link>
                        </li>
                        <li>
                            <router-link to="/news">企业新闻</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
		<router-view/>
        <Footer :foot="foot"></Footer>
	</div>
</template>

<script>
import Footer from '@/components/common/Footer'

export default {
    name: "App",
    data () {
        return {
            foot: ''
        }
    },
    components: {
        Footer
    }
};
</script>

<style scoped lang="less">
.header{
    min-width: 1200px;
    height: 60px;
    background-color: #000;
    border-top: 4px solid #f5a200;
    box-sizing: border-box;

    .wrap{
        width: 1200px;
        margin: 0 auto;

        .logo{
            width: 170px;
            height: 49px;
            float: left;
            margin: 4px 0 0 31px;
        }

        .menu{
            font-size: 0;
            float: right;
            margin-right: 20px;

            li{
                width: 120px;
                display: inline-block;
                text-align: center;

                a{
                    display: block;
                    font-size: 16px;
                    line-height: 56px;
                    color: #c9c9c9;
                    text-decoration: none;

                    &:hover, &.active{
                        background-color: #f5a200;
                        color: #353535;
                    }
                }
            }
        }
    }
}
</style>
