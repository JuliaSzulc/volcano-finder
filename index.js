const { readFile } = require("fs");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use([express.static(__dirname), express.static(__dirname + '/data')]);

app.get("/", (request, response) => {
    readFile("index.html", "utf8", (err, html) => {
        if (err) {
            response.status(500).send("oh no")
        }
        response.send(html);
    })
})

app.listen(port, () => console.log(`Available on port ${port}`))
