<template>
    <div class="chart-item">

        <template v-if="type == 1">
            <!-- 收到的消息 -->
            <van-row type="flex" justify="start">
                <van-col span="4" style="text-align:center">
                    <div>
                        <van-image
                        round
                        :width="avatarSize"
                        :height="avatarSize"
                        :src="avatarSrc" />
                    </div>
                    <span>{{userName}}</span>
                </van-col>
                <van-col span="14" class="msg-box bg-receive">
                    <div>{{time}}</div>
                    <div>{{msg}}</div>
                </van-col>
            </van-row>
        </template>
        <template v-else-if="type == 2">
            <!-- 自己的消息 -->
            <van-row type="flex" justify="end">
                <van-col span="14" class="msg-box bg-send">
                    <div>{{time}}</div>
                    <div>{{msg}}</div>
                </van-col>
                <van-col span="4" style="text-align:center">
                    <div>
                        <van-image
                        round
                        :width="avatarSize"
                        :height="avatarSize"
                        :src="avatarSrc" />
                    </div>
                    <span>{{userName}}</span>
                </van-col>
            </van-row>
        </template>
        <template v-else-if="type == 3">
            <!-- join -->
            <van-row type="flex" justify="center">
                <van-col>
                    <span class="tips">{{userName}} 加入群聊</span>
                </van-col>
            </van-row>
        </template>
        <template v-else-if="type == 4">
            <!-- out -->
            <van-row type="flex" justify="center">
                <van-col>
                    <span class="tips">{{userName}} 退出群聊</span>
                </van-col>
            </van-row>
        </template>

    </div>
</template>




<script>



export default {
	name: 'chart-item',
    props: {
        type: String,
        msg: String,
        avatarSrc: String,
        userName: String
    },
    data: () => {
        return {
            avatarSize: ".3rem",
            time: ""
        }
    },
    created() {

    }
}
</script>



<style scoped>



.msg-box {
    border-radius: 0.12rem;
    padding: 0.1rem;
    color: white;
}

.bg-receive {
    background-color: rgb(124, 212, 22);
    
}


.bg-send {
    background-color: rgb(32, 108, 170);
}



.tips {
    font-size: .11rem;
    display: inline-block;
    background-color: rgba(155, 155, 155, 0.562);
    border-radius: 10%;
    padding: .03rem;
    color: white;
}

</style>