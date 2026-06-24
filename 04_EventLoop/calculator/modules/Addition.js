const sumHandler = (req,res)=>{
    console.log('1. In Request Handler');
    
    const body = []
    let result
    req.on("data", (chunk)=>{
        body.push(chunk)
        console.log('2. Chunk came');
        
    })
    req.on("end", () => {
        console.log('3. Chunk Ended');
        const data = Buffer.concat(body).toString()
        const params = new URLSearchParams(data)
        const bodyObj = Object.fromEntries(params)

        result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2)
        console.log(result);
    })

    console.log('4. Sending response');
    
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
    
}

module.exports = sumHandler