// import http
const http = require('http');

// creating a server
const server = http.createServer((req, res)=>{
    // request details
    // console.log(req.url, req.method, req.headers);

    // res
    // res.setHeader('Content-type','json')
    res.setHeader('Content-type','text/html')
    // res.write('<h1>hello world - Saurabh</h1>')


    // res.write(`
    //     <html>
    //         <head>
    //             <title>NodeJs</title>
    //         </head>
    //         <body>
    //             <h2>heading2</h2>
    //             <p>Hey para</P>
    //         </body>
    //     </html>
    //     `)

    res.write('<html>')
    res.write('<head> <title>NodeJs</title> </head>')
    res.write('<body><h4>HELLO EVERYBUDY !</h4></body>')
    res.write('</html>')

    // Exiting out of event loop
    // process.exit()
})

// port num
const PORT = 4000;

// server listening on port 4000
server.listen(PORT, ()=>{
    console.log(`Our server is up and running on http://localhost:${PORT}`);
})


// GET, POST, PUT, PATCH, & DELETE