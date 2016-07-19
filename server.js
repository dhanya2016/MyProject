var express	=	require("express");
var app	=	express();
var path	=	require("path");
// var global	=	require('./helpfile/global.js');
// var app		=	global.express();
// app.use(global.bodyParser.json());
// app.use(global.bodyParser.urlencoded({
  		// extended: true
		// }));
// app.use(global.methodOverride());
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/public/test.html'));
	
});

app.listen(3000);
console.log("Running at port 3000");

