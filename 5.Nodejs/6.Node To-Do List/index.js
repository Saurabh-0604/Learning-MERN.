const http = require('http');

const PORT = 8800;

const toDoList = ["Saurabh Gupta","Software Developer", "Oracle"]

http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.header);

    const {method, url} = req
    // console.log(method, url)
    if(url.toLocaleLowerCase() === '/todos' ){
        if(method === "GET"){
            res.writeHead(200,{"Content-Type":"text/html"})
            // res.write(toDoList)   not working because we have array structure so need to convert to string
            res.write(toDoList.toString());
            // res.end();
        }else if(method==='POST'){
            let body = '';
            req.on('error', (err) =>{
                console.error(err);       //  convert Buffer to string
            }).on('data', (chunk)=>{
                body += chunk
                // console.log("Chunk:",chunk)
            }).on('end',()=>{
                body = JSON.parse(body)
                // console.log("Body:",body)
                let newTodo = toDoList
                newTodo.push(body.item)
            })



        }else if(method === 'DELETE'){
            let body = '';
            req.on('error', (err) =>{
                console.error(err);       //  convert Buffer to string
            }).on('data', (chunk)=>{
                body += chunk
                // console.log("Chunk:",chunk)
            }).on('end',()=>{
                body = JSON.parse(body)
                // const index =toDoList.indexOf(body.item);
                // if(index  > -1){
                //     toDoList.splice(index,1);
                // }
                let deleteThis = body.item;
                for(let i=0; i<toDoList.length;i++){
                    if(toDoList[i] === deleteThis){
                        toDoList.splice(i,1);
                        break;
                    }
                }
            })
        }
        
        else{
            res.writeHead(501)
        }
    }else{
        res.writeHead(404)
    }
    res.end();


}).listen(PORT, ()=>{
    console.log(`To Do List Server got started on http://localhost:${PORT}`);
})