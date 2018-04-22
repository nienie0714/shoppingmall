#1 安装nodejs 
   5.0 以上

#2 安装gulp 和 bower , http-server
	 建议使用cnpm 

		  安装淘宝镜像 cnpm
		  npm install -g cnpm --registry=https://registry.npm.taobao.org

  cd /homework
  npm install gulp -g  (cnpm install gulp -g)
  npm install bower -g  (cnpm install bower -g)
  npm install http-server -g  (npm install http-server -g )

  			  
			   			  

#3 安装 包依赖 插件安装
	npm install  (cnpm install)
	bower install
		
 
#5 执行编译
    gulp build 

#6 启动服务 
	http-server -p 8081

#7 打开chrome浏览器
 	localhost:8081  


#8 自动化测试

	cd /homework
	npm test
    在 /homework/coverage 下 有index.html 文件， 可查看覆盖率。