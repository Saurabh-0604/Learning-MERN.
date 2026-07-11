const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res)=>{
    // if(req.url === '/'){
    //     res.write('<h1>Home/Default Page </h1>')
    //     res.end()
    // }else if(req.url.toLocaleLowerCase() === '/products'){
    //     res.write('<h1> Products Page </h1>')
    //     res.end()
    // }else if(req.url.toLocaleLowerCase() === '/about-us'){
    //     res.write('<h1> About-Us Page </h1>')
    //     res.end()
    // }else
    // res.write('<h1>Implementation not done yet</h1>')

    if(req.url === '/form'){
        res.write('<h1>User login Page:</h1>')
        res.write(`
                <form action= '/submitted-data' method='POST'>
                    <label>UserName:</label>
                    <input type='text' id ='name' name='name' placeholder='Pls enter your username' />
                    <br><br/>
                    <label>Gender:</label>
                    <input type='radio' id ='male' name='gender' value= 'male' />
                    <label for='male'>Male</label>
                    <input type='radio' id ='female' name='gender' value= 'female' />
                    <label for='female'>Female</label>
                    <br><br/>
                    <button type='submit'>Submit</button>
                </form>
                `)
            // res.statusCode =201;
            return res.end()
    }else if(req.url ==='/redirected'){
        res.write('<h1>Redirected</h1>')
        return res.end()
    }       
    else if(req.method ==='POST' && req.url.toLocaleLowerCase() === '/submitted-data'){
        res.statusCode = 302;
        fs.writeFileSync('user-data.txt','Sauabh') 
        res.setHeader('Location','/redirected');
        return res.end()
    }
    res.write('<h1>No User Input !!</h1>')
    // res.end()
})

const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`NodeJs server is up and running - http://localhost:${PORT}`)
})