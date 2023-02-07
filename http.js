const  http=require('http')
const server=http.createServer((req , res)=>{
    res.end(`
<html>
<body>

<h2 title="I'm a header">The title Attribute</h2>

<p title="I'm a tooltip">Mouse over this paragraph, to display the title attribute as a tooltip.</p>

</body>
</html>`)
    if(req.url==="/"){
        res.end("welcome to our home page")
    }
    if(req.url==='/about')
    {
        res.end("here is our about page")
    }
else{
    console.log("error");
}


})


server.listen(5000)