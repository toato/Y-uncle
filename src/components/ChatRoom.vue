<template>
    <div class="Chat">

        <!-- header -->
        <van-nav-bar title="qun" left-text="返回"  left-arrow @click-left="onClickLeft">
            <van-icon name="ellipsis" slot="right" size="" color="#1989fa" />
        </van-nav-bar>




        <!-- chat-info -->
        <div class="chat-info" style="overflow:auto">
            <ChatItem 
                v-for="(item, i) in msgList"
                :key="i"
                :type="item.type" 
                :msg="item.msg" 
                avatarSrc="https://img.yzcdn.cn/vant/cat.jpeg"
                :userName="item.userName"
                style="padding: .045rem 0"/>
        </div>




        <!-- chat-send -->
        <div class="send">
            <van-cell-group>
                <van-field
                    v-model="sms"
                    center
                    border
                    left-icon="volume-o">
                    <div slot="button">
                        <svg style="padding-top:10" t="1577417895141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25141" width="32" height="32"><path d="M317.826685 437.925211l0 66.229578c0 34.852827 28.219844 63.076763 63.05835 63.076763 18.284691 0 34.577646-7.892268 46.116827-20.314278 8.848751 24.056328 31.814585 41.325203 58.965419 41.325203 27.151856 0 50.119736-17.269898 58.985878-41.325203 11.519744 12.423033 27.812699 20.314278 46.137287 20.314278 34.799632 0 63.018454-28.222913 63.018454-63.076763l0-66.229578c38.9877-37.656807 63.097223-88.217447 63.097223-143.958442C717.205099 177.877291 613.652204 83.762382 485.967281 83.762382 358.287473 83.762382 254.749922 177.877291 254.749922 293.966769 254.749922 349.707764 278.803181 400.304208 317.826685 437.925211zM585.044651 194.450541c39.148308 0 70.780803 31.704104 70.780803 70.77978 0 39.060332-31.633518 70.781826-70.780803 70.781826-39.098182 0-70.781826-31.722517-70.781826-70.781826C514.261802 226.154645 545.94647 194.450541 585.044651 194.450541zM498.6123 389.667293l31.336855 62.561183c6.947037 13.972843-0.092068 25.346302-15.668939 25.346302L457.656392 477.574777c-15.558458 0-22.616999-11.373459-15.668939-25.346302l31.336855-62.561183C480.273391 375.697518 491.66424 375.697518 498.6123 389.667293zM386.873542 194.450541c39.096136 0 70.781826 31.704104 70.781826 70.77978 0 39.060332-31.68569 70.781826-70.781826 70.781826-39.095113 0-70.780803-31.722517-70.780803-70.781826C316.093762 226.154645 347.77843 194.450541 386.873542 194.450541zM848.169686 737.803764c-35.4482-16.533355-77.510969-1.159033-94.04637 34.230857-2.082781 4.369135-3.631568 8.887624-4.698533 13.45624l-159.608967-74.412372 159.627381-74.430785c1.086402 4.516444 2.597339 9.030841 4.68012 13.382585 16.535401 35.445131 58.597147 50.762166 94.04637 34.229834 35.444108-16.48016 50.763189-58.596124 34.228811-94.044324-9.785798-21.066166-28.773275-34.799632-49.917187-39.20764 10.251253-18.985431 11.925866-42.335904 2.102218-63.424575-16.534378-35.4482-58.633974-50.764212-94.079105-34.228811-35.466613 16.534378-50.782625 58.59817-34.229834 94.043301 2.065391 4.424376 4.495984 8.498893 7.280527 12.259357l-224.233495 104.527792-224.175185-104.527792c2.726234-3.761487 5.196723-7.834981 7.262114-12.259357 16.515964-35.444108 1.196883-77.508923-34.229834-94.043301-35.445131-16.535401-77.54575-1.218366-94.079105 34.228811-9.824671 21.088671-8.183816 44.440168 2.102218 63.424575-21.179716 4.409031-40.12832 18.141475-49.954014 39.20764-16.534378 35.447177-1.217343 77.563141 34.229834 94.044324 35.408304 16.532332 77.54575 1.215297 94.060691-34.229834 2.02754-4.387548 3.593718-8.884555 4.701602-13.41839l159.550657 74.448176L229.239944 785.453011c-1.107884-4.531788-2.674062-9.049255-4.701602-13.41839-16.514941-35.38989-58.652388-50.764212-94.060691-34.230857C95.030474 754.340188 79.713439 796.402957 96.247816 831.849111c9.825694 21.087648 28.773275 34.837483 49.954014 39.222985-10.286034 18.987477-11.925866 42.359433-2.102218 63.411277 16.533355 35.462521 58.633974 50.761143 94.079105 34.224719 35.426717-16.456631 50.744775-58.594078 34.229834-94.041255-2.065391-4.386525-4.49803-8.441606-7.262114-12.182633l224.194621-104.551321 224.178254 104.514494c-2.784543 3.777854-5.179333 7.832935-7.2437 12.219461-16.552791 35.446154-1.236779 77.584623 34.229834 94.041255 35.444108 16.536424 77.544727 1.237802 94.079105-34.224719 9.824671-21.051844 8.149035-44.424823-2.102218-63.411277 21.143912-4.369135 40.130366-18.135337 49.917187-39.222985C898.933898 796.402957 883.614817 754.340188 848.169686 737.803764z" p-id="25142" fill="#515151"></path></svg><van-button size="small" type="primary" @click="getMsg()">send</van-button>
                    </div>
                </van-field>
            </van-cell-group>
        </div>


    </div>
</template>




<script>

import ChatItem from './ChatItem';

export default {
    data: () => {
        return {
            sms: "",
            msgList:[],
            socket:{}

        }
    },
    created() {
        console.log(this.$route.params.userid);
        this.openSocket(this.$route.params.userid);
    },
    methods: {
        getMsg() {

            this.msgList.push({
                "type":2,
                "msg":this.sms,
                "userName":"Me"
            });


            this.sendMessage();
        },
        openSocket(id) {
            if(typeof(WebSocket) == "undefined") {
                console.log("您的浏览器不支持WebSocket");
                
            }else{
                console.log("您的浏览器支持WebSocket");
                //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
                //等同于socket = new WebSocket("ws://localhost:8888/xxxx/im/25");
                //var socketUrl="${request.contextPath}/im/"+$("#userId").val();
                var socketUrl="http://localhost:9090/im/"+id;
                socketUrl=socketUrl.replace("https","ws").replace("http","ws");
                console.log(socketUrl)
                this.socket = new WebSocket(socketUrl);
                //打开事件
                this.socket.onopen = function() {
                    console.log("连接成功");
                    
                    //socket.send("这是来自客户端的消息" + location.href + new Date());
                };
                //获得消息事件
                this.socket.onmessage = msg => {
                    var data = JSON.parse(msg.data);
                    console.log("================");
                    
                    var info = data.info;


                    this.msgList.push({
                        "type":1,
                        "msg":info.msg,
                        "userName":info.fromId
                    });


                    // console.log(data);
                    // console.log(info);
                    // console.log(msg);
                    // console.log(info.fromId + ": " + info.msg);
                    
                    //发现消息进入    开始处理前端触发逻辑
                };
                //关闭事件
                this.socket.onclose = function() {
                    console.log("连接关闭");
                    
                };
                //发生了错误事件
                this.socket.onerror = function() {
                    console.log("websocket发生了错误");
                    
                }
            }
        },
        sendMessage() {
            if(typeof(WebSocket) == "undefined") {
                console.log("您的浏览器不支持WebSocket");
            }else {

                var msg = {
                    "info" : {
                        "time": new Date(),
                        "fromId" : this.$route.params.userid,
                        "msg" : this.sms
                    }
                }
                console.log(JSON.stringify(msg));
                this.socket.send(JSON.stringify(msg));


                // console.log("您的浏览器支持WebSocket");
                // console.log('[{"toUserId":"'+$("#toUserId").val()+'","contentText":"'+$("#contentText").val()+'"}]');
                // socket.send('[{"toUserId":"'+$("#toUserId").val()+'","contentText":"'+$("#contentText").val()+'"}]');
            }
        },
        onClickLeft() {
            this.socket.close();
            this.$router.go(-1);
        }
    },
	components: {
        ChatItem,




	}
}
</script>



<style scoped>



.chat-info {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    padding-bottom: 0.7rem;
    padding-top: .6rem;
}




.send {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}


</style>
