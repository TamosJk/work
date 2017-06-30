///**
// * 查看index.html
// * 有几个请求
// */
var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    var url=req.url
    switch (url){
        case "/every.html":
            fs.readFile("every.html","utf-8", function (err,data) {
                        if(err){
                            console.log("失败")
                            console.log(err)

                        }else{
                            //设置响应头
                            res.writeHead(200,{"content-type":"text/html;charset==utf8"})
                            res.end(data);
                        }
                    })
            break;
        case "/2.html":
            fs.readFile("2.html","utf-8", function (err,data) {
                if(err){
                    console.log("失败")
                    console.log(err)

                }else{
                    //设置响应头
                    res.writeHead(200,{"content-type":"text/html;charset==utf8"})
                    res.end(data);
                }
            })
            break;
        case "/3.html":
            fs.readFile("3.html","utf-8", function (err,data) {
                if(err){
                    console.log("失败")
                    console.log(err)

                }else{
                    //设置响应头
                    res.writeHead(200,{"content-type":"text/html;charset==utf8"})
                    res.end(data);
                }
            })
            break;
        case"/2.css":
            fs.readFile("2.css","utf-8", function (err,data) {
                        if(err){
                            console.log("失败")
                            console.log(err)

                        }else{
                            //设置响应头
                            res.writeHead(200,{"content-type":"text/css;charset==utf8"})
                            res.end(data);
                        }
                    })
            break;
        case"/1.js":
            fs.readFile("1.js","utf-8", function (err,data) {
                            if(err){
                                console.log("失败")
                                console.log(err)

                            }else{
                                //设置响应头
                                res.writeHead(200,{"content-type":"text/javascript;charset==utf8"})
                                res.end(data);
                            }
                        })
            break;
        case "/2.jpg":
            fs.readFile("2.jpg", function (err,data) {
                        if(err){
                            console.log("失败")
                            console.log(err)

                        }else{
                            //设置响应头
                            res.writeHead(200,{"content-type":"image/jpeg"})
                            res.end(data);
                        }
                    })
            break;
        case "/3.jpg":
            fs.readFile("3.jpg", function (err,data) {
                if(err){
                    console.log("失败")
                    console.log(err)

                }else{
                    //设置响应头
                    res.writeHead(200,{"content-type":"image/jpeg"})
                    res.end(data);
                }
            })
            break;
        case "/4.jpg":
            fs.readFile("4.jpg", function (err,data) {
                if(err){
                    console.log("失败")
                    console.log(err)

                }else{
                    //设置响应头
                    res.writeHead(200,{"content-type":"image/jpeg"})
                    res.end(data);
                }
            })
            break;
    }
}).listen(3000)
