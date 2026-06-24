const sumHandler = require('./modules/Addition')

const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.write(`
            <html>
            <head>
                <title>Welcome Page</title>
            </head>
            <body>
                <h1>Welcome to the Server !</h1>
                <a style = "color: #c2b8b0ff" href = "/calculator">CALCULATOR</a>
            </body>
            <script>
                document.body.style.backgroundColor = "#212121";
                document.body.style.color = "#ccbabaff";
            </script>
            </html>
        `);
        return res.end()
    }else if(req.url.toLowerCase() === "/calculator"){
        res.write(`
            <html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Welcome to Calculator</h1>
                <form action="/calculate-result" method="POST">
                    <input type="text" placeholder="First number" name="num1">
                    <input type="text" placeholder="Second number" name="num2">
                    <button type="submit">sum</button>
                </form>
            </body>
            <script>
                document.body.style.backgroundColor = "#212121";
                document.body.style.color = "#ccbabaff";
            </script>
            </html>
        `);
        return res.end()
    }else if(req.url.toLowerCase() === "/calculate-result" && req.method === "POST"){
        return sumHandler(req,res)
    }

    res.write(`
        <html>
        <head>
            <title>Page Not Found</title>
        </head>
        <body>
            <h1>404 Page Not Found !</h1>
            <a style = "color: #c2b8b0ff" href = "/">Go to HOME !</a>
        </body>
        <script>
            document.body.style.backgroundColor = "#212121";
            document.body.style.color = "#ccbabaff";
        </script>
        </html>
    `);
    return res.end()
}

module.exports = requestHandler