/*
    为了 /test、/test/index.html都能访问，在前一步增加了路由，这一步要在生成过程中把后面加的去掉，避免重复生成html文件
*/
module.exports = function() {
    this.nuxt.hook('generate:extendRoutes', async routes => {
        routes.forEach((route, index) => {
            // 把后端获取到的数据放置在每个页面的上下文content上,属性名：payload。
            route.payload = this.options.query;
        })
        const deleteLength = routes.length / 2;
        routes.splice(deleteLength, deleteLength)
    });
};