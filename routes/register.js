module.exports = function(app){
  app.post('/register', function(req, res){
    console.log("POST to register received.");
    res.render('register')
  });
};
