<template>
    <div class="ctnr">
        <p>常规用法</p>
        <m-image-crop class="mic mic1"
                      v-model="img"></m-image-crop>

        <p>调整比例</p>
        <m-image-crop class="mic mic2"
                      v-model="img2"
                      :proportion="{ w: 100, h: 35 }"></m-image-crop>

        <p>列表</p>
        <div class="list">
            <div class="item"
                 v-for="(item, index) in imgList"
                 :key="item.id">
                <m-image-crop class="mic"
                              has-remove
                              :value="item"
                              :proportion="{ w: 1, h: 1 }"
                              @remove="removeHandle(index)"></m-image-crop>
            </div>
            <div class="item add"
                 @click="addHandle">添加图片</div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            img: {},
            img2: {},
            imgList: []
        };
    },
    methods: {
        addHandle() {
            this.imgList.push({});
        },
        removeHandle(index) {
            this.imgList.splice(index, 1);
        }
    }
};
</script>

<style lang="less">
html,
body {
    margin: 0;
}
.ctnr {
    height: 100vh;
    .mic {
        border: 1px dotted #4fc08d;
    }
    .mic1 {
        width: 200px;
        height: 100px;
    }
    .mic2 {
        width: 100vw;
        height: 35vw;
    }
    .list {
        font-size: 0;
        .item {
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: middle;
            display: inline-block;
            border: 1px dotted #4fc08d;
            width: 33.33vw;
            height: 33.33vw;
        }
        .add {
            text-align: center;
            line-height: 33.33vw;
        }
    }
}
</style>
