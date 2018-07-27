# shop_market 

> A Vue.js project

页面展示：
首页：
![image](https://github.com/chancejl/vue_market/blob/master/mainpage.PNG)
                                                                          
类别：
![image](https://github.com/chancejl/vue_market/blob/master/type.PNG)
                                                                      
发现：
![image](https://github.com/chancejl/vue_market/blob/master/find.PNG) 
                                                                        
购物车：
![image](https://github.com/chancejl/vue_market/blob/master/shopcar.PNG) 
                                                                               
使用方法：
1.下载之后使用npm install安装需要的依赖包
2.npm run dev可以正常使用项目

重点：
1.移动端默认首页是起始入口
所以在任何事件点进入app时都显示首页，所以在router-index.js中使用了重定向
 routes: [
    {
      path:'/',
      redirect:'/home'
    }]
2.在app底部需要更换nav 按钮时，使用了命名路由，每一个click事件中都包裹<router-link></router-link>，同时需要使用命名路由，决定实际去哪一个路由下
 <div class="footer">
  <router-link :to="{name:'home'}"><span class="mui-icon mui-icon-home"><div class="text">首页</div></span></router-link>
  <router-link :to="{name:'type',params:{id:2}}"><span class="mui-icon mui-icon-search"><div class="text">类别</div></span></router-link>
  <router-link :to="{name:'find',params:{id:3}}"><span class="mui-icon mui-icon-plus"><div class="text">发现</div></span></router-link>
  <router-link :to="{name:'shopcar',params:{id:4}}"><span class="mui-icon mui-icon-compose"><div class="text">购物车</div></span></router-link>
  <router-link :to="{name:'mine',params:{id:5}}"><span class="mui-icon mui-icon-person"><div class="text">我的</div></span></router-link>
</div>
3.在做类别切换页面时，一开始使用的是toggleTab方法，单个切换每一个type文件，需要同时书写多个type子文件，最终统一集合到一个 index文件，这样很麻烦
实际项目中也是请求接口数据不一样，则页面进行更换，所以使用不同type的json数据，axios发送请求数据
4.每一个页面顶部标签不同，有的是input搜索框，有的是文字，这个我在这里使用了url动态传递id值进行判断当前页面实际需要使用什么样式

待优化项目：
1.每一个页面顶部位置设置使用vuex更为高效快捷

