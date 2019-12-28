<template>
    <div class="weather">

        <div style="padding: .2rem 0.25rem 0 .25rem">
            <div class="up">
                <span>now --- {{city}}</span>
                <div>{{infoList[0].air_tips}}</div>
            </div>        

            <van-divider />

            <div class="down">
                <div>
                    <p class="degree">{{infoList[0].air}}</p>
                    <p class="info">AQI</p>
                </div>
                <van-icon name="fire-o" color="red" size=".25rem"/>
            </div>
        </div>


        <!-- detail info -->
        <div class="more">

            <van-tabs swipeable color="rgba(51, 121, 201, 0.808)">
                <van-tab v-for="(info,index) in 7" :title="infoList[index].day.split('（')[0]" :key="index">
                    <van-row class="top">
                        <van-col span="15">
                            <p>日期: {{infoList[index].date}}</p>
                            <p>星期: {{infoList[index].week}}</p>
                            <p>天气: {{infoList[index].wea}}</p>
                        </van-col>
                        <van-col span="9">
                            <img :src='"../assets/images/" + infoList[index].wea_img + ".png"'>
                        </van-col>
                    </van-row>
                    
                    <div class="quality">
                        <p>空气质量评分: {{infoList[index].air}}</p>
                        <p>空气质量等级: {{infoList[index].air_level}}</p>
                        <p>Tips: {{infoList[index].air_tips}}</p>
                    </div>



                    
                    <div class="weatherbox">
                        <van-row class="title" type="flex" justify="space-between">
                            <van-col span="5">
                                时间
                            </van-col>
                            <van-col span="4">
                                天气
                            </van-col>
                            <van-col span="4">
                                温度
                            </van-col>
                            <van-col span="4">
                                风向
                            </van-col>
                            <van-col span="4">
                                风力
                            </van-col>
                        </van-row>
                        <van-row class="box-item" type="flex" justify="space-between" v-for="(tt, u) in infoList[index].hours" :key="u">
                            <van-col span="5">
                                {{tt.day}}
                            </van-col>
                            <van-col span="4">
                                {{tt.wea}}
                            </van-col>
                            <van-col span="4">
                                {{tt.tem}}
                            </van-col>
                            <van-col span="4">
                                {{tt.win}}
                            </van-col>
                            <van-col span="4">
                                {{tt.win_speed}}
                            </van-col>
                        </van-row>


                    </div>
                </van-tab>
            </van-tabs>

        </div>
    </div>
</template>

<script>



export default {
    name: 'weather',
    components: {

        

    },
    data() {
        return {
            city: "",
            infoList: [],
        }
    },
    created() {
        
        this.$http.get("https://www.tianqiapi.com/api/?appid=26458714&appsecret=5jZJoJql").then((result) => {
            var data = result.data;
            this.city = data.city;
            this.infoList =  data.data;
            console.log(data);
        }).catch((err) => {
            window.console.log(err);
            
        });
    },
    methods: {

    }
}
</script>


<style scoped>



.up span {
    font-size: .18rem;
    color: rgba(105, 105, 105, 0.534);
}


.up div, .degree {
    font-size: .20rem;
    font-weight: bolder;
}

.down {
    display: flex;
    justify-content: space-between;
}

.info {
    font-size: .14rem;

}


.more {
    padding: 0 0.15rem;
    font-weight: bold;
}


.more .top {
    border-left: 4px solid rgb(39, 156, 68);
    border-right: 4px solid rgb(39, 156, 68);
    padding-left: .1rem;
    margin: .15rem 0;
    border-radius: 15px;
}

.more .quality {
    margin: .15rem 0;
    border-left: 4px solid rgb(199, 178, 62);
    border-right: 4px solid rgb(199, 178, 62);
    padding-left: .1rem;
    border-radius: 15px;
}

.quality p {
    
    padding: .03rem 0;
}



.weatherbox {
    text-align:center;
    background-color: rgba(51, 121, 201, 0.808);
    border-radius: .1rem;
    padding: .1rem;
    margin-bottom: .2rem;
    
}

.weatherbox .title {
    color: rgba(255, 255, 255, 0.616);
    font-weight: bold;
}

.weatherbox .box-item {
    padding: .1rem 0;
    color: white;
}

</style>