let express = require("express");
let app = express();

app.set("port", 80);
app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
    response.send("Hello World!");
});

app.listen(app.get("port"), function () {
    console.log("Node app is running at localhost:" + app.get("port"));
});
