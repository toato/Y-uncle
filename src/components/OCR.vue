<template>
    <div class="ocr">
        <van-nav-bar
            title="OCR文字识别"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        <div style="text-align:center; display:flex; justify-content: space-around; align-items:center; margin-top:.2rem">
             <van-uploader  v-model="fileList" :after-read="afterRead" multiple />

            <van-button type="primary" @click="ocr">
                开启识图
            </van-button>
        </div>


        <div class="result" style="margin-top:.2rem; padding: .15rem">
            {{rrr}}
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return{
            fileList: [
            ],
            obj : {},
            rrr:""
        }
    },
    methods: {
        ocr() {
            var form = new FormData(); // FormData 对象
            form.append("file", this.obj.file); // 文件对象
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };
            this.$http.post('/loc/ocr/general', form, config).then(res => {
                console.log(res.data);
                this.rrr = res.data.data;
                
            })
        },
        afterRead(file) {
            this.obj = file;
            
        },
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>


.result {
    min-height: 1rem;
    border: 2px solid rgb(109, 109, 109);
    border-radius: .12rem;
    width: 90%;
    margin: auto;
}


</style>