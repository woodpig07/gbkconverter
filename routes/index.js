
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Converter v0.0.1' });
};