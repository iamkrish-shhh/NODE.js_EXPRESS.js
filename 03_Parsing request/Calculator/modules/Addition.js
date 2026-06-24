const sumHandler = (req,res)=>{
    const body = []
    req.on("data", (chunk)=>{
        body.push(chunk)
    })
    req.on("end", () => {
        const data = Buffer.concat(body).toString()
        const params = new URLSearchParams(data)
        const bodyObj = Object.fromEntries(params)

        const result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2)
        console.log(result);
        

        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
            <head>
                <title>Result Page</title>
            </head>
            <body>
                <h1>Your Result is</h1>
                <h2> ${result}</h2>
            </body>
            <script>
                document.body.style.backgroundColor = "#212121";
                document.body.style.color = "#ccbabaff";
            </script>
            </html>
        `);
        res.end()
    })
    
}

module.exports = sumHandler