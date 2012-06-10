module.exports = function(app){
  app.get('/', function(req, res){
    console.log("GET to / received.");
    res.render('index')
  });
  app.post('/login', function(req, res){
    console.log("POST to login received.");
    res.render('login')
  });
};
