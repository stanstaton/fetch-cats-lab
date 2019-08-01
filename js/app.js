console.log("Locked and loaded");

document.getElementById("cat-button").addEventListener("click", function(){
	console.log("Clicked");
	// var inputField = document.getElementById("input");
	// inputField.textContent = " ";
	clearField();
	playFetch();

})


function playFetch(){
	var searchQuery = document.getElementById("query").value;
	console.log(searchQuery);

	//perform fetch

	if (searchQuery <= 0) {
		document.getElementById("results").textContent = "Do you not want to see cats?";
	} else {


		fetch("https://api.thecatapi.com/v1/images/search?limit="+searchQuery)
		.then(function(responseDate) {
			return responseDate.json();
		})
		.then(function(jsonData) {
			console.log(jsonData);
			jsonData.forEach(function(cats) {
				let catPic = document.createElement("img");
					catPic.src = cats.url;
					catPic.style.height = "150px";
					catPic.style.width = "auto";

					document.getElementById("results").append(catPic);
			})
		})
	}
}


function clearField(){
	$("#results").empty();
}








