const fs = require('fs')

const userRequestHandler = ((req,res) =>{
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
        const body =[]
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
            console.log(body)
        })
        req.on('end', ()=>{
            const fullBody = Buffer.concat(body).toString()
            console.log(fullBody);

            // URLSearchParams is a built-in JavaScript class that helps encod URL string and gives an easy way to access its key-value pairs."
            const parsedData = new URLSearchParams(fullBody)
            console.log(parsedData);

            // const bodyObject = {}
            // for(const [key,value] of parsedData.entries()){
            //     bodyObject[key] = value
            // }
            const bodyObject = Object.fromEntries(parsedData);
            console.log(bodyObject);
            fs.writeFileSync("03_Parsing request\\users.txt" , JSON.stringify(bodyObject))
        })
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

module.exports = userRequestHandler
