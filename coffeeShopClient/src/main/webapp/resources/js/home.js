$(document).ready(function() {
	
	loadHome();
	
	$("#home").click(function() {
		if ($("#tab1-content-insertProduct").css('display') == 'none') {
			loadHome();
		}
	});
	
	function loadHome() {
		$("#tab4 .container").empty();
		$.get("http://localhost:8080/rest/productRestFul/list",function(data,status) {
			$.each(data,function(i,row) {
				$("#tab4 .container").append($("<div>", {
					"class" : "item"
				}).append($("<div>", {
					"class" : "image"
				}).append($("<img>", {
					"src" : "resources/image/product" + (i+1) +".jpg",
					"alt" : "product1"
				}))).append($("<div>", {
					"class" : "caption"
				}).append($("<p>", {
					"class" : "name",
					"text" : row.productName
				})).append($("<p>", {
					"class" : "price",
					"text" : row.price + "$"
				})).append($("<div>", {
					"class" : "cart"
				}).append($("<a>", {
					"class" : "btn btn-info cartBtn",
					"id" : row.id
				}).append($("<span>", {
					"class" : "glyphicon glyphicon-shopping-cart"
				}))))))
			});
		});
	}
	
	$(document).delegate(".cartBtn", "click", function() {
		var productId = this.id
		$.get("http://localhost:8080/rest/productRestFul/addToCart?productId="+productId, function(data,status) {
			if (data.size > 0) {
				alert("success");
			}
		})
	});
});