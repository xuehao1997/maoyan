module.exports = {
    devServer:{
        open:true,
        proxy:{
            '/ajax':{//标识符
                target:'http://m.maoyan.com',
                changeOrigin:true
            }
        }
    }
}