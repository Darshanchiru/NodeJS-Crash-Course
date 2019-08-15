//  const person = require('./person');
// console.log(person);

// const Person= require('./personClass');

// const p1=new Person("darshan",45);

// p1.display();

// const Logger= require('./logger') ;

// const logger = new Logger();

// logger.on('message',data => console.log("Called Listener",data));

// logger.log("hello");
const http = require('http');
const fs= require("fs");
const path = require("path");
const server= http.createServer( (req,res)=>
{
    // if( req.url === '/')
    // {
    //     fs.readFile(path.join(__dirname,"public","index.html"),(err,data)=>
    //     {
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(data);
    //     });
        
    // }

    let filePath = path.join(__dirname,'public',req.url === '/' ?  "index.html" : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch(extname)
    {
        case '.js' : contentType="text/javascript";
                    break;
        case '.json' : contentType = "application/json";
                    break;
        case '.css' : contentType = "text/css";
                    break;
        case '.png' : contentType = "image/png";
                    break;
       case '.jpg' : contentType="image/jpg";
                    break;            
    }

    fs.readFile(filePath,
         (err,content)=>
        {
            if(err)
            {
                if(err.code == 'ENOENT')
                {
                    //page not found
                    fs.readFile(path.join(__dirname,"public","404.html"),(err,content)=>
                    {
                        res.writeHead(200, {'Content-Tye' : 'text/html'});
                        res.end(content,'utf8');
                    });
                   
                }
                else
                {
                    // 500 error Some Server Error
                    res.writeHead(500);
                    res.end(`Server Error : ${err.code}`);
                }
            }
            else
            {
                //success
                res.writeHead(200, {'Content-Tye' : contentType});
                res.end(content,'utf8');
            }
            
        }
    );
} );

const PORT=process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server Running on Port : ${PORT}`);
 });