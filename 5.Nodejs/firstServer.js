// Creating first node Srver

// import http protocol
const http = require('http');

// function aSimpleServer(req,res){
//     console.log(req);
// }

const app = http.createServer((req,res)=>{
    console.log(req);
})

//port num
const PORT = 4000;

// Application listning on port 4000
app.listen(PORT ,()=>{
    console.log(`Server is up and running on port http://localhost:${PORT}`)
});