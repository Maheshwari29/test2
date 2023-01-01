const fs=require("fs");
const http=require("http");
server=http.createServer(function(req,res){
    rs=fs.createReadStream("./public/index.html");
    rs.pipe(res);
});
server.listen(3100);
console.log("server is listening");