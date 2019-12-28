import Vue from "vue";
import VueRouter from "vue-router";

import Menu from "../components/Menu.vue"
import Chat from "../components/Chat.vue"
import Weather from "../components/Weather.vue"
import OCR from "../components/OCR.vue"
import Kuaidi from "../components/Kuaidi.vue"
import ChatRoom from "../components/ChatRoom.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "menu",
		component: Menu
	},
	{
		path: "/chat",
		name: "chat",
		component: Chat
	},
	{
		path: "/weather",
		name: "weather",
		component: Weather
	},
	{
		path: "/kuaidi/:id/:com",
		name: "kuaidi",
		component: Kuaidi
	},
	{
		path: "/ocr",
		name: "ocr",
		component: OCR
	},
	{
		path: "/room/:userid",
		name: "chatroom",
		component: ChatRoom
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
