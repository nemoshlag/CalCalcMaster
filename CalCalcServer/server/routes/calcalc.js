var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  res.send('test');
});

router.post('/getingredient', function(req, res) {
	
	var targetIng = req.body.ingredient;
	targetIng = targetIng.toLowerCase();
	targetIng = capitalize(targetIng);

	var db = req.db;
	var collection = db.get('ingredientscollection');
	
	collection.findOne({ ingredientname: targetIng}, function(err, doc) {
		
	 if (err === null) {

             res.send(doc);
         } else {
         	
             res.send(err);
         }
	 });
});

router.post('/getmeals', function(req, res) {
	
	var targetIng = req.body.ingredient;
	targetIng = targetIng.toLowerCase();

	var db = req.db;
	var collection = db.get('mealscollection');
	
	collection.find({ ingredients: targetIng}, function(err, doc) {
		
	 if (err === null) {

             res.send(doc);
         } else {
         	
             res.send(err);
         }
	 });
});

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

module.exports = router;
