<template>
    
    <div class="kuaidi" style="padding-top:.15rem">
        


        <div style="text-align:center" v-show="xianshi">
            <van-loading color="#1989fa"/>
        </div>


        <van-steps direction="vertical" :active="0">
        <van-step v-for="(ins, i) in info" :key="i">
            <h3>{{ins.context}}</h3>
            <p>{{ins.time}}</p>
        </van-step>
        </van-steps>



    </div>



</template>



<script>
export default {
    data() {
        return {
            info:[],
            xianshi:true
        }
    },
    methods: {

    },
    created() {
        var self = this;
        // https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/channel/data/asyncqury/?cb=jQuery110204759692032715892_1499865778178&appid=4001&com=&nu=77110939724482



        console.log(self.$route.params.id);
        this.$http.get('/kuaidi/?sn=' + self.$route.params.id + '&code=' + self.$route.params.com).then(res => {
            console.log(res.data.data);
            self.info = res.data.data;
            self.xianshi = false;
        })
        // this.$http.get('/newkuaidi/?cb=jQuery110204759692032715892_1499865778178&appid=4001&com=&nu=' + self.$route.params.id).then(res => {
        //     console.log(res);
            
        // })


    }
}
</script>



<style scoped>






</style>