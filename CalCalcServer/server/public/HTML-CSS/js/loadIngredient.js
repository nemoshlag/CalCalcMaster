$( document ).ready(function() {
    
    var searchFor ={
    				'ingredient': getURLParameter('ingredient')
    			}

  	$.ajax({
	  dataType: "json",
	  type:'POST',
	  url: '../calcalc/getingredient',
	  data: searchFor,
	  success: success
	});
});

function success(retData){
	$('#ingredientname').text(retData.ingredientname);
	$('#calories').text(retData.calories);
	$('#fat').text(retData.fat);
	$('#cholesterol').text(retData.cholestrol);
	$('#sodium').text(retData.sodium);
	$('#potassium').text(retData.potassium);
	$('#carbohydrate').text(retData.carbohydrate);
	$('#protein').text(retData.protein);
	$('#imageUrl').text(retData.url);

	var smeal = "resultsMeals.html?ingredient=" + retData.ingredientname;

	$('#suggest_button').attr('href', smeal);

	document.getElementById('mainImage').src = retData.url;

	console.log('cooool');
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}