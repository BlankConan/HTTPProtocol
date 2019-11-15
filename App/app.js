// 导入 express 框架
const express = require('express')
// 初始化
const app = express()
// get 方法，匹配 path 为 /api/list
app.get('/api/list', function (req, res) {

	console.log('request path:' + req.path);
	var result = {
		code:200,
		data:{
			name:"前端小可",
			des:"第三阶段：网络编程内容 HTTP，TCP，WebServer"
		}
	}
	// 响应 json 返回给客户端
	res.json(result);
});

// 监听 8888 端口
app.listen(8888);

console.log('app start: http://127.0.0.1:8888');