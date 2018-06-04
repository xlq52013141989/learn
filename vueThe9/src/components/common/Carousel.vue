<template>
    <div class="carousel">
        <div class="colImgWrap">
            <ul :style="{width: width}">
                <li v-for="item in imgList" :style="{width: liWidth}">
                    <img :src="item.imgsrc" alt="">
                </li>
            </ul>
        </div>
        <a class="prev" href="javascript:;"></a>
        <a class="next" href="javascript:;"></a>
        <div class="colItem">
            <ul>
                <li v-for="item, index in imgList" :class="{active: index === 0}"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            imgList: [
                {
                    imgsrc: require("../../assets/images/colImg1.jpg")
                },
                {
                    imgsrc: require("../../assets/images/colImg2.jpg")
                },
                {
                    imgsrc: require("../../assets/images/colImg3.jpg")
                },
                {
                    imgsrc: require("../../assets/images/colImg4.jpg")
                },
                {
                    imgsrc: require("../../assets/images/colImg5.jpg")
                }
            ]
        };
    },
    computed: {
        width() {
            return this.imgList.length * 100 + "%";
        },
        liWidth() {
            return 100 / this.imgList.length + "%";
        }
    },
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.carousel {
    height: 600px;
    position: relative;

    .colImgWrap {
        height: 600px;
        overflow: hidden;
        background-color: #000;

        ul {
            height: 600px;

            li {
                height: 600px;
                float: left;
            }
        }
    }

    .colItem {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 20px;

        ul {
            font-size: 0;

            li {
                width: 100px;
                height: 4px;
                display: inline-block;
                background-color: #6e6e6e;
                margin: 0 5px;
                cursor: pointer;

                &.active {
                    background-color: #fff;
                }
            }
        }
    }
}
</style>
