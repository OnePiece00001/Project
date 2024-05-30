const express = require("express");

const app = express();

const PORT = 3000;
app.get('/', (req, res)=> {
    return res.send("Let's Get started");
})

app.listen(PORT, (err)=> {
    if(err) {
        console.log(err);
    }
    console.log(`Server is up and running at port: ${PORT}`);
})
