$( document ).ready(function() {
    
    var searchFor ={
    				'ingredient': getURLParameter('ingredient')
    			}

  	$.ajax({
	  dataType: "json",
	  type:'POST',
	  url: '../calcalc/getmeals',
	  data: searchFor,
	  success: success
	});
});

function success(retData){
	for (i = 0; i < retData.length; i++){
		$('#mealname'+i).text(retData[i].mealname);
		$('ingredients'+i).text(retData[i].ingredients);
		//$('imageUrl'+i).text(retData[i].url);
		
		document.getElementById('imageUrl'+i).src = retData[i].url;
	}


	// $('#mealName1').text(retData.mealname);
	// $('#mealName2').text(retData.mealname);
	// $('#mealName3').text(retData.mealname);
	// $('#mealName4').text(retData.mealname);
	// $('#ingredients').text(retData.ingredients);
	

	console.log('cooool');
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}