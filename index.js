const  http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    // if (req.url == "/"){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //        if (err) throw  err;
    //         res.writeHead(200,{'Content-Type':'Text/Html'})
    //         res.end(content);
    //     })
    //
    // }

    let filePath = path.join(__dirname,'public',req.url === '/' ? "index.html" : req.url);
    console.log(filePath);
    //Extion of file
    let extname = path.extname(filePath);
    //Inital content type
    let contentType = 'text/html';

    switch (extname){
        case '.js':
            contentType : 'text/javascript';
            break;
        case '.css':
            contentType : 'text/css';
            break;
        case '.json':
            contentType : 'applicaiton/json';
            break;
        case '.png':
            contentType : 'image/png';
            break;
        case '.jpg':
            contentType : 'image/jpg';
            break;
    }



    //Readfile
    fs.readFile(filePath,(err,content)=>{
        if (err){
             if (err.code == 'ENOENT'){

                 // //Page Not Found

                 fs.readFile(path.join(__dirname,'public','404.html'),'utf8',(err,data) => {
                         if (err) throw err;
                     res.writeHead(200,{'Content-Type':'text/html'})
                     res.end(content,'utf8');
                     }
                 );
             }else {
            //    some server error
                res.writeHead(500)
                res.end(`Server error : ${err.code}`);

            }
        }else {
        //    success
            console.log("error");
            res.writeHead(200,{'Content-Type': contentType});
             res.end(content);
        }
    })

    }
)

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log(`Server running on port ${PORT}`));


