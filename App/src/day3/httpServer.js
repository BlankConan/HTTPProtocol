const http = require('http');
// 创建 http server
const server = new http.Server();


// 监听 request 事件，当客户端发起请求后会响应这个事件
server.on('request', function(req, res){
	let path = req.url;
	if (path.indexOf('/api/list') == 0) {
		// 处理请求的 path 为 /api/list
		res.writeHead(200,{
			"Content-type" : "application/json"
		});

		let data = {
			"title": "学习http",
			des: "server返回了"
		};

		// 数据转成 json 字符串
		res.write(JSON.stringify(data));
	} else {
		res.writeHead(404,{
			"Content-type" : "application/json"
		});
		let data = {
 			"code": "404",
 			msg: "not found"
		};
		res.write(JSON.stringify(data));
	}
	res.end();
});

server.listen(8888, function(){
	console.log('Server run in: http://127.0.0.1:8888')
});