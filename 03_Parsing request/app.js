const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) =>{
    // console.log(req.url,req.method,req.headers);
    
    if( req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" />')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"/>')
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('<script>');
        res.write('document.body.style.backgroundColor = "#212121";');
        res.write('document.body.style.color = "#ccbabaff";');
        res.write('</script>');
        res.write('</html>')
        return res.end();  

        //return =>full function/callback se bahr.
        //without return => just ends if block, continues remaining function code.
    }else if(req.url.toLowerCase() === '/submit-details' && req.    method =="POST"){
        req.on('chunk', (chunk ) => {
            console.log(chunk)
        })
        fs.writeFileSync("03_Parsing request\\users.txt" , "Krish Thamke")
        res.statusCode = 302
        res.setHeader("Location","/")

        res.write('<script>');
        res.write('document.body.style.backgroundColor = "#212121";');
        res.write('document.body.style.color = "#ccbabaff";');
        res.write('</script>');
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head> <title>Learning Node</title> </head>')
    res.write('<body> <h1>Ye Default hai !</h1></body>')
    res.write('<script>');
    res.write('document.body.style.backgroundColor = "#212121";');
    res.write('document.body.style.color = "#ccbabaff";');
    res.write('</script>');
    res.write('</html>')
    res.end()
})

server.listen(3000,() => {
    console.log(`running at http://localhost:${3000}`);    
})