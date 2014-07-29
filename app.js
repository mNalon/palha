var express = require('express');
var app = express();

app.use("/static", express.static(__dirname + "/static"));
app.use("/static", express.static(__dirname + "/static"));
app.set("view engine",'jade');

app.get("/", function (req,res) {
  res.render('index');
});

app.listen(3000);
