module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api" : {
                target: "http://pv.sohu.com/cityjson?ie=utf-8",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            "/kuaidi" : {
                target: "http://tool.bitefu.net/kuaidi",
                changeOrigin: true,
                pathRewrite: {
                    '^/kuaidi': ''
                }
            },
            "/newkuaidi" : {
                target: "https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/channel/data/asyncqury",
                changeOrigin: true,
                pathRewrite: {
                    '^/newkuaidi': ''
                }
            },
            "/chat" : {
                target: "http://api.qingyunke.com/api.php",
                changeOrigin: true,
                pathRewrite: {
                    '^/chat': ''
                }
            },
            "/loc" : {
                target: "http://localhost:9090",
                changeOrigin: true,
                pathRewrite: {
                    '^/loc': ''
                }
            }
        }
    }
}