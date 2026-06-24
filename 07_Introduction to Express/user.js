const fs = require('fs')

const userRequestHandler = ((req,res) =>{
    console.log(req.method,req.url);
    
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


    }else if(req.url.toLowerCase() === '/submit-details' && req.    method =="POST"){

        const body =[]
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', ()=>{
            const fullBody = Buffer.concat(body).toString()
            const parsedData = new URLSearchParams(fullBody)
            const bodyObject = Object.fromEntries(parsedData);

            fs.writeFile("users.txt" , JSON.stringify(bodyObject), error => {
                res.statusCode = 302
                res.setHeader("Location","/")
                return res.end()
            })
        })
        return

    }else{
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head> <title>Learning Node</title> </head>')
        res.write('<body> <h1>Ye Default hai !</h1></body>')
        res.write('<script>');
        res.write('document.body.style.backgroundColor = "#212121";');
        res.write('document.body.style.color = "#ccbabaff";');
        res.write('</script>');
        res.write('</html>')
        return res.end()
    }
})

module.exports = userRequestHandler
