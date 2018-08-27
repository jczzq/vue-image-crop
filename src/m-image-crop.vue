<template>
    <div class="m-image-crop">
        <img class="show-img"
             :src="currentValue | fileSrc">
        <svg v-if="hasRemove"
             @click.stop="$emit('remove')"
             class="icon icon-remove"
             aria-hidden="true">
            <use xlink:href="#icon-remove"></use>
        </svg>
        <slot></slot>
        <input v-show="state==1"
               class="path"
               @change="imageChange"
               ref="path"
               accept="image/*"
               type="file">
        <div v-show="state==2"
             ref="fileView"
             class="file-view"
             v-touch:move="move"
             v-touch:end="end"
             v-touch:scale="scale">
            <img class="file"
                 ref="file"
                 :src="url"
                 alt="">
            <div class="imgView"
                 ref="imgView">
                <div class="imgViewBox"
                     ref="imgViewBox">
                    <img class="file"
                         ref="file2"
                         :src="url"
                         alt="">
                </div>
            </div>
            <div class="ctrl">
                <div class="back"
                     flex="33"
                     @click="back"
                     layout="column"
                     layout-align="center center">取消</div>
                <div class="rotate"
                     @click="rotateChange"
                     flex="33"
                     layout="column"
                     layout-align="center center">旋转</div>
                <div class="submit"
                     flex="33"
                     @click="submitFile"
                     layout="column"
                     layout-align="center center">确认</div>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * [events]
 * remove: 移除按钮被点击时触发
 * change: 改变选中图片时触发
 * submit: 图片操作完成时触发
 * cancel: 图片操作取消时触发
 */
import './iconfont.js';
export default {
    name: 'm-image-crop',
    data() {
        return {
            state: 1, // 截图状态
            top: null, // 初始移动Y
            left: null, // 初始移动X
            url: null, // 图片地址
            img: new Image(),
            maxSize: 3, // 最大缩放比
            initViewWidth: 74 / 100, // 初始截取区宽度比例
            borderWidth: 1, // 截取区border
            view: { width: 0, height: 0 }, // 屏幕
            fileSize: { width: 0, height: 0, top: 0, left: 0 }, // 图片
            fileInitSize: { width: 0, height: 0 }, // 图片初始大小
            filRealitySize: { width: 0, height: 0 }, // 图片真实大小
            viewBox: { width: 0, height: 0, left: 0, top: 0 }, // 截取区
            rotate: 0, // 旋转角度 0 1 2 3
            point1: null, // 触控点1
            point2: null, // 触控点2
            indicator: {
                visible: false
            }
        };
    },
    props: {
        // 图片包装对象
        value: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
        // 图片宽高比例
        proportion: {
            type: Object,
            default: function() {
                // w: 宽；h：高
                return { w: 2, h: 1 };
            }
        },
        // 清晰度
        quality: {
            type: Number,
            default: 0.92
        },
        // 是否显示移除按钮
        hasRemove: {
            type: Boolean,
            default: false
        },
        // 是否跳过裁剪直接使用
        skipCrop: {
            type: Boolean,
            default: false
        },
        // 配置对象
        config: {
            type: Object,
            default: function() {
                return {
                    size: 1200, // 图片最大宽度（px）
                    isSlice: true, // 文件比例一致时是否需要裁剪，与skipCrop不同
                    path: null // 显示图片时的路径，path参数将直接与图片id拼接(path + id)
                };
            }
        }
    },
    components: {},
    beforeDestroy() {
        document.removeEventListener('touchmove', this.preventDefault, false);
        document.body.removeChild(this.$refs.fileView); // 退出销毁外置截取区域
    },
    mounted() {
        // 初始化value格式
        document.body.appendChild(this.$refs.fileView); // 外置截取区域
        this.currentValue.origin = {};
        this.$nextTick(function() {
            this.initViewSize();
        });
    },
    methods: {
        imageChange(evt) {
            // 加载文件
            let file = evt.target.files[0];
            this.$emit('change', file);
            if (!file) return;
            let url = URL.createObjectURL(file);
            this.currentValue.origin = file;
            // 渲染图片
            this.img.src = url;

            this.img.onload = () => {
                this.filRealitySize = {
                    width: this.img.width,
                    height: this.img.height
                };

                let showView = () => {
                    this.indicator.visible = true;
                    this.loadImg();
                    setTimeout(() => {
                        this.indicator.visible = false;
                        this.state = 2;
                        this.$nextTick(function() {
                            this.file2SizePosition();
                        });
                    }, 800);
                };
                if (this.skipCrop) {
                    this.uploadCanvas();
                } else {
                    if (
                        this.config.isSlice &&
                        this.filRealitySize.width /
                            this.filRealitySize.height ==
                            this.proportion.w / this.proportion.h
                    ) {
                        var flag = window.confirm(
                            '文件已符合规定尺寸，是否直接使用？'
                        );
                        if (flag) {
                            this.uploadCanvas();
                        } else {
                            showView();
                        }
                    } else {
                        showView();
                    }
                }
            };
        },
        loadImg() {
            let imgWidth = this.filRealitySize.width;
            if (imgWidth > this.config.size) {
                imgWidth = this.config.size;
            }
            let imgHeight =
                imgWidth *
                (this.filRealitySize.height / this.filRealitySize.width);
            // 解决兼容 ios
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            switch (this.rotate) {
                case 0:
                    canvas.setAttribute('width', imgWidth);
                    canvas.setAttribute('height', imgHeight);
                    ctx.drawImage(this.img, 0, 0, imgWidth, imgHeight);
                    break;
                case 1:
                    imgWidth += imgHeight;
                    imgHeight = imgWidth - imgHeight;
                    imgWidth = imgWidth - imgHeight;
                    canvas.setAttribute('width', imgWidth);
                    canvas.setAttribute('height', imgHeight);
                    ctx.translate(imgWidth, 0);
                    ctx.rotate(90 * Math.PI / 180);
                    ctx.drawImage(this.img, 0, 0, imgHeight, imgWidth);
                    break;
                case 2:
                    canvas.setAttribute('width', imgWidth);
                    canvas.setAttribute('height', imgHeight);
                    ctx.translate(imgWidth, imgHeight);
                    ctx.rotate(180 * Math.PI / 180);
                    ctx.drawImage(this.img, 0, 0, imgWidth, imgHeight);
                    break;
                case 3:
                    imgWidth += imgHeight;
                    imgHeight = imgWidth - imgHeight;
                    imgWidth = imgWidth - imgHeight;
                    canvas.setAttribute('width', imgWidth);
                    canvas.setAttribute('height', imgHeight);
                    ctx.translate(0, imgHeight);
                    ctx.rotate(270 * Math.PI / 180);
                    ctx.drawImage(this.img, 0, 0, imgHeight, imgWidth);
                    break;
            }
            this.url = canvas.toDataURL(
                this.currentValue.origin.type,
                this.quality
            );
            if (imgWidth / imgHeight >= this.view.width / this.view.height) {
                // 判断图片长宽比
                let _fileSize = {
                    width: this.view.width,
                    height: imgHeight / imgWidth * this.view.width
                };
                if (_fileSize.height < this.viewBox.height) {
                    // 判断是否小于截取区
                    _fileSize.height = this.viewBox.height;
                    _fileSize.width = imgWidth / imgHeight * _fileSize.height;
                }
                this.fileSize.width = _fileSize.width;
                this.fileSize.height = _fileSize.height;
                this.fileSize.left = 0;
                this.fileSize.top =
                    (this.view.height - this.fileSize.height) / 2;
            } else {
                let _fileSize = {
                    width: imgWidth / imgHeight * this.view.height,
                    height: this.view.height
                };
                if (_fileSize.width < this.viewBox.width) {
                    _fileSize.width = this.viewBox.width;
                    _fileSize.height = imgHeight / imgWidth * _fileSize.width;
                }
                this.fileSize.height = _fileSize.height;
                this.fileSize.width = _fileSize.width;
                this.fileSize.top = 0;
                this.fileSize.left =
                    (this.view.width - this.fileSize.width) / 2;
            }
            this.fileInitSize = {
                width: this.fileSize.width,
                height: this.fileSize.height
            };
            this.fileSizePosition();
        },
        initViewSize() {
            this.view.width = document.documentElement.clientWidth;
            this.view.height = document.documentElement.clientHeight;
            // 屏幕
            this.$refs.fileView.style.width = this.view.width + 'px';
            this.$refs.fileView.style.height = this.view.height + 'px';
            // 主工作区
            this.$refs.imgView.style.width = this.view.width + 'px';
            this.$refs.imgView.style.height = this.view.height + 'px';
            // 视图区
            if (
                this.view.width *
                    this.initViewWidth *
                    this.proportion.h /
                    this.proportion.w <
                this.view.height * this.initViewWidth
            ) {
                // 判断宽高
                this.viewBox = {
                    width: Math.floor(this.view.width * this.initViewWidth),
                    height: Math.floor(
                        this.view.width *
                            this.initViewWidth *
                            this.proportion.h /
                            this.proportion.w
                    )
                };
            } else {
                this.viewBox = {
                    width: Math.floor(
                        this.view.height *
                            this.initViewWidth *
                            this.proportion.w /
                            this.proportion.h
                    ),
                    height: Math.floor(this.view.height * this.initViewWidth)
                };
            }

            this.viewBox.left = Math.floor(
                (this.view.width - this.viewBox.width) / 2
            );
            this.viewBox.top = Math.floor(
                (this.view.height - this.viewBox.height) / 2
            );

            this.$refs.imgViewBox.style.width = this.viewBox.width + 'px';
            this.$refs.imgViewBox.style.height = this.viewBox.height + 'px';
            this.$refs.imgViewBox.style.top = this.viewBox.top + 'px';
            this.$refs.imgViewBox.style.left = this.viewBox.left + 'px';
        },
        fileSizePosition() {
            this.$refs.file.style.top = this.fileSize.top + 'px';
            this.$refs.file.style.left = this.fileSize.left + 'px';
            this.$refs.file.style.width = this.fileSize.width + 'px';
            this.$refs.file.style.height = this.fileSize.height + 'px';
            this.file2SizePosition();
        },
        file2SizePosition() {
            this.$refs.file2.style.top =
                this.$refs.file.offsetTop -
                (this.$refs.imgViewBox.offsetTop + this.borderWidth) +
                'px';
            this.$refs.file2.style.left =
                this.$refs.file.offsetLeft -
                (this.$refs.imgViewBox.offsetLeft + this.borderWidth) +
                'px';
            this.$refs.file2.style.width = this.$refs.file.offsetWidth + 'px';
            this.$refs.file2.style.height = this.$refs.file.offsetHeight + 'px';
        },
        setAttr(ele, attrs) {
            // 暂未用到
            if (!attrs && attrs.length < 1) {
                return;
            }
            // attrs.forEach((item, key)=>{
            //     console.log(item);
            //     console.log(key);
            // });
        },
        checkPosition() {
            // 缩放移动校验
            let sizeFlag = false;
            if (this.fileSize.top >= this.viewBox.top + this.borderWidth) {
                // top 校验
                this.fileSize.top = this.viewBox.top + this.borderWidth;
            } else if (
                this.fileSize.top + this.fileSize.height <=
                this.viewBox.top + this.viewBox.height + this.borderWidth
            ) {
                this.fileSize.top =
                    this.viewBox.top +
                    this.viewBox.height -
                    this.fileSize.height +
                    this.borderWidth;
            }
            if (this.fileSize.left >= this.viewBox.left + this.borderWidth) {
                // left 校验
                this.fileSize.left = this.viewBox.left + this.borderWidth;
            } else if (
                this.fileSize.left + this.fileSize.width <=
                this.viewBox.left + this.viewBox.width + this.borderWidth
            ) {
                this.fileSize.left =
                    this.viewBox.left +
                    this.viewBox.width -
                    this.fileSize.width +
                    this.borderWidth;
            }
            // 缩放大小校验
            if (this.fileSize.width <= this.viewBox.width) {
                // width 校验
                this.fileSize.width = this.viewBox.width;
                this.fileSize.height =
                    this.fileInitSize.height /
                    this.fileInitSize.width *
                    this.fileSize.width;
            }
            if (this.fileSize.height <= this.viewBox.height) {
                this.fileSize.height = this.viewBox.height;
                this.fileSize.width =
                    this.fileInitSize.width /
                    this.fileInitSize.height *
                    this.fileSize.height;
            }
            if (this.fileSize.width > this.fileInitSize.width * this.maxSize) {
                this.fileSize.width = this.fileInitSize.width * this.maxSize;
                this.fileSize.height =
                    this.fileInitSize.height /
                    this.fileInitSize.width *
                    this.fileSize.width;
                sizeFlag = true;
            }
            if (
                this.fileSize.height >
                this.fileInitSize.height * this.maxSize
            ) {
                this.fileSize.height = this.fileInitSize.height * this.maxSize;
                this.fileSize.width =
                    this.fileInitSize.width /
                    this.fileInitSize.height *
                    this.fileSize.height;
                sizeFlag = true;
            }
            if (sizeFlag) {
                this.fileSize.left = this.$refs.file.offsetLeft; // 阻止移动
                this.fileSize.top = this.$refs.file.offsetTop;
            }
        },
        move(evt) {
            if (this.top) {
                this.fileSize.top = Math.floor(
                    this.$refs.file.offsetTop +
                        evt.touches[0].clientY -
                        this.top
                );
                this.fileSize.left = Math.floor(
                    this.$refs.file.offsetLeft +
                        evt.touches[0].clientX -
                        this.left
                );
                this.checkPosition();
                this.fileSizePosition();
            }
            this.top = evt.touches[0].clientY;
            this.left = evt.touches[0].clientX;
        },
        scale(evt) {
            if (this.point1) {
                let scale = this.distance(evt.touches);
                let oldSize = {
                    width: this.fileSize.width,
                    height: this.fileSize.height
                };
                let newSize = {
                    width: oldSize.width * scale,
                    height: oldSize.height * scale
                };
                this.fileSize.width = newSize.width;
                this.fileSize.height = newSize.height;
                this.fileSize.left =
                    this.$refs.file.offsetLeft -
                    (newSize.width - oldSize.width) / 2;
                this.fileSize.top =
                    this.$refs.file.offsetTop -
                    (newSize.height - oldSize.height) / 2;
                this.checkPosition();
                this.fileSizePosition();
            }
            this.point1 =
                JSON.stringify(evt.touches[0]).length < 3
                    ? evt.touches[0]
                    : JSON.parse(JSON.stringify(evt.touches[0]));
            this.point2 =
                JSON.stringify(evt.touches[1]).length < 3
                    ? evt.touches[1]
                    : JSON.parse(JSON.stringify(evt.touches[1]));
        },
        distance(touches) {
            let oldVal = Math.sqrt(
                Math.pow(touches[0].clientX - touches[1].clientX, 2) +
                    Math.pow(touches[0].clientY - touches[1].clientY, 2)
            );
            let newVal = Math.sqrt(
                Math.pow(this.point1.clientX - this.point2.clientX, 2) +
                    Math.pow(this.point1.clientY - this.point2.clientY, 2)
            );
            let scale = oldVal / newVal;
            return scale;
        },
        imgSizeScale() {
            let sizeScale;
            if (
                this.viewBox.width /
                    this.$refs.file.offsetWidth *
                    this.filRealitySize.width <
                this.config.size
            ) {
                sizeScale = Number(
                    (
                        this.viewBox.width /
                        this.$refs.file.offsetWidth *
                        this.filRealitySize.width /
                        this.viewBox.width
                    ).toFixed(15)
                );
            } else {
                sizeScale = this.config.size / this.viewBox.width;
            }
            return sizeScale;
        },
        setCanvas() {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            let sizeScale = this.imgSizeScale(); // 固定大小宽度比值
            canvas.setAttribute('width', this.viewBox.width * sizeScale);
            canvas.setAttribute('height', this.viewBox.height * sizeScale);
            ctx.drawImage(
                this.$refs.file,
                (this.$refs.file.offsetLeft -
                    this.viewBox.left -
                    this.borderWidth) *
                    sizeScale,
                (this.$refs.file.offsetTop -
                    this.viewBox.top -
                    this.borderWidth) *
                    sizeScale,
                this.$refs.file.offsetWidth * sizeScale,
                this.$refs.file.offsetHeight * sizeScale
            );
            // let base64 = canvas.toDataURL(this.currentValue.origin.type, this.quality);
            let base64 = canvas.toDataURL('image/jpeg', this.quality);
            this.$set(this.currentValue, 'base64', base64);
            // this.currentValue.content = base64.split(',')[1];
            this.currentValue.id = null;
            this.$emit('submit', this.currentValue);
        },
        uploadCanvas() {
            // 不裁剪，直接使用
            let imgWidth = this.filRealitySize.width;
            if (imgWidth > this.config.size) {
                imgWidth = this.config.size;
            }
            let imgHeight =
                imgWidth *
                (this.filRealitySize.height / this.filRealitySize.width);
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            canvas.setAttribute('width', imgWidth);
            canvas.setAttribute('height', imgHeight);
            ctx.drawImage(this.img, 0, 0, imgWidth, imgHeight);
            // let _base64 = canvas.toDataURL(this.currentValue.origin.type, this.quality);
            let base64 = canvas.toDataURL('image/jpeg', this.quality);
            this.$set(this.currentValue, 'base64', base64);
            // this.currentValue.content = base64.split(',')[1];
            this.currentValue.id = null;
            this.$emit('submit', this.currentValue);
        },
        end() {
            this.top = null;
            this.left = null;
            this.point1 = null;
            this.point2 = null;
        },
        preventDefault(e) {
            e.preventDefault();
        },
        addEventDefault() {
            document.addEventListener('touchmove', this.preventDefault, false);
        },
        removeEventDefault() {
            document.removeEventListener(
                'touchmove',
                this.preventDefault,
                false
            );
        },
        submitFile() {
            this.state = 1;
            this.$refs.path.value = null; // 重置选取文件
            this.setCanvas();
        },
        rotateChange() {
            this.rotate++;
            this.rotate %= 4;
            this.loadImg();
        },
        back() {
            this.state = 1;
            this.$refs.path.value = null; // 重置选取文件
            this.$emit('cancel');
        }
    },
    watch: {
        state(newVal) {
            if (newVal === 2) {
                this.addEventDefault();
            } else {
                this.removeEventDefault();
            }
        }
    },
    computed: {
        currentValue: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    filters: {
        fileSrc(value) {
            if (value) {
                if (value.base64) {
                    return value.base64;
                } else if (value.id) {
                    return this.config.path + value.id;
                } else {
                    return '';
                }
            } else {
                return '';
            }
        }
    },
    directives: {
        touch: {
            bind: function(el, binding) {
                /* 传入的模式 press swipeRight swipeLeft swipeTop swipeDowm Tap move end*/
                var touchType = binding.arg;
                var timeOutEvent = 0;
                var direction = '';
                /* 滑动处理 */
                var startX, startY;

                /* 返回角度 */
                function GetSlideAngle(dx, dy) {
                    return Math.atan2(dy, dx) * 180 / Math.PI;
                }

                /* 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动 */
                function GetSlideDirection(startX, startY, endX, endY) {
                    var dy = startY - endY;
                    var dx = endX - startX;
                    var result = 0;

                    /* 如果滑动距离太短 */
                    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                        return 'tap';
                    }

                    var angle = GetSlideAngle(dx, dy);
                    if (angle >= -45 && angle < 45) {
                        result = 'swiperight';
                    } else if (angle >= 45 && angle < 135) {
                        result = 'swipeup';
                    } else if (angle >= -135 && angle < -45) {
                        result = 'swipedown';
                    } else if (
                        (angle >= 135 && angle <= 180) ||
                        (angle >= -180 && angle < -135)
                    ) {
                        result = 'swipeleft';
                    }
                    return result;
                }

                el.addEventListener(
                    'touchstart',
                    function(ev) {
                        startX = ev.touches[0].pageX;
                        startY = ev.touches[0].pageY;

                        /* 判断长按 */
                        timeOutEvent = setTimeout(() => {
                            timeOutEvent = 0;
                            if (touchType === 'press') {
                                binding.value(ev);
                            }
                        }, 500);
                    },
                    false
                );

                el.addEventListener('touchmove', function(ev) {
                    clearTimeout(timeOutEvent);
                    timeOutEvent = 0;
                    if (ev.touches.length === 1) {
                        if (touchType === 'move') {
                            binding.value(ev);
                        }
                    } else if (event.touches.length === 2) {
                        if (touchType === 'scale') {
                            binding.value(ev);
                        }
                    }
                });

                el.addEventListener(
                    'touchend',
                    function(ev) {
                        var endX, endY;
                        endX = ev.changedTouches[0].pageX;
                        endY = ev.changedTouches[0].pageY;
                        direction = GetSlideDirection(
                            startX,
                            startY,
                            endX,
                            endY
                        );

                        clearTimeout(timeOutEvent);
                        if (touchType === 'end') {
                            binding.value(ev);
                        }
                        switch (direction) {
                            case 0:
                                break;
                            case 'tap':
                                if (touchType === 'tap') {
                                    binding.value(ev);
                                }
                                break;
                            case 'swipeup':
                                if (touchType === 'swipeup') {
                                    binding.value(ev);
                                }
                                break;
                            case 'swipedown':
                                if (touchType === 'swipedown') {
                                    binding.value(ev);
                                }
                                break;
                            case 'swipeleft':
                                if (touchType === 'swipeleft') {
                                    binding.value(ev);
                                }
                                break;
                            case 'swiperight':
                                if (touchType === 'swiperight') {
                                    binding.value(ev);
                                }
                                break;
                            default:
                                break;
                        }
                    },
                    false
                );
            }
        }
    }
};
</script>

<style lang="less">
.m-image-crop {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;
    img.show-img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        &[src=''] {
            opacity: 0;
        }
    }
    input.path {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
        z-index: 2;
    }
    .icon-remove {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0;
        bottom: 0;
        z-index: 3;
    }
}
.file-view {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.9);
    .file {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .imgView {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background: rgba(0, 0, 0, 0.4);
    }
    .imgViewBox {
        position: absolute;
        top: 10px;
        left: 10px;
        border: 1px solid white;
        overflow: hidden;
    }
    canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
    }
    .ctrl {
        display: flex;
        flex-direction: row;
        word-break: break-all;
        justify-content: space-between;
        align-items: stretch;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 5;
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: white;
        height: 50px;
        & > div {
            line-height: 50px;
            border: 1px solid fade(white, 10%);
            background: fade(white, 10%);
            flex: 1;
        }
    }
}
</style>
