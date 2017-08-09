$(document).ready(function() {
	
	loadProducts(true);
	
	$("#product").click(function() {
		if ($("#tab1-content-insertProduct").css('display') == 'none') {
			loadProducts(false);
		}
	});
	
	$("#backToProductsBtn").click(function() {
		showProducts();
	})
	
	function showProducts() {
		 $("#tab1-content").show(1000);
		 loadProducts(true);
	}
	
	$(document).delegate(".deleteProduct", "click", function(){
		 deleteProduct(this.id);
	});
	
	function deleteProduct(productId) {
		$.get({
			url : "http://localhost:8080/rest/productRestFul/delete/"+productId,
			success: function (data) {
	            loadProducts(false);
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
		        alert(xhr.status);
		        alert(thrownError);
	        }
		});
	}
	
	$(document).delegate(".editProduct", "click", function(){
		$("#tab1-content").hide(1000);
		$("#tab1 #tab1-content table").remove();
		$("#tab1-content-insertProduct").show(1000);
		
		var productId = this.id;
		$.get({
			url : "http://localhost:8080/rest/productRestFul/get/"+productId,
			success: function (data) {
				$("#product-form").trigger('reset');
	            fillValueToUpdateProductForm(data);
	            $("#updateProductBtn").show(1000)
	    		$("#insertProductBtn").hide(1000);
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
		        alert(xhr.status);
		        alert(thrownError);
	        }
		});
	});
	
	function fillValueToUpdateProductForm(productData) {
		$("#product-form #productId").val(productData.id);
		$("#product-form #productName").val(productData.productName);
		$("#product-form #description").val(productData.description);
		$("#product-form #price").val(productData.price);
		$("#product-form #productType").val(productData.productType);
	}
	
	function loadProducts(isLoadFromInsert) {
		$.get("http://localhost:8080/rest/productRestFul/list",function(data,status) {
			$("#tab1 table").remove();
			$("#tab1 #tab1-content").append(
					$('<table>', {
						"class": "table table-bordered"})
						.append($('<thead>')
								.append($('<tr>')
									.append($('<th style="text-align: center;">').append($('<span>', {
										"class" : "glyphicon glyphicon-cog"
									})))	
									.append($('<th>', {"text" : "#" }))
									.append($('<th>', {"text" : "Name" }))
									.append($('<th>', {"text" : "Description" }))
									.append($('<th>', {"text" : "Price" }))
									.append($('<th>', {"text" : "Type" }))
							))
						.append($('<tbody>')));
			$.each(data,function(i,row) {
				$("#tab1 table tbody")
								.append($("<tr>")
									.append($('<td align="center">')
											.append($("<a>", {
												"id" : row.id,
												"class" : "btn btn-default editProduct"
											}).append($("<span>", {"class" : "glyphicon glyphicon-pencil"})))
											.append($("<a>", {
												"id" : row.id,
												"class" : "btn btn-danger deleteProduct"
											}).append($("<span>", {"class" : "glyphicon glyphicon-trash"}))
										      .append($("<span>", {}))
											))
									.append($('<td>', {"text" : row.id }))
									.append($('<td>', {"text" : row.productName }))
									.append($('<td>', {"text" : row.description }))
									.append($('<td>', {"text" : row.price }))
									.append($('<td>', {"text" : row.productType })))
			});
			if (isLoadFromInsert) {
				$("#tab1-content-insertProduct").hide(1000);
			}
		})
	}
	
	
	$("#createProductBtn").click(function() {
		$("#tab1-content").hide(1000);
		$("#tab1 #tab1-content table").remove();
		$("#tab1-content-insertProduct").show(1000);
		
		$("#product-form").trigger('reset');
		$("#productId").val(0);
		$("#updateProductBtn").hide(1000)
		$("#insertProductBtn").show(1000);
	})
	
	
	
	$("#product-form").submit(function(event) {
		var modifyURL;
		var id = $("#productId").val();
		var productName = $("#productName").val();
		var description = $("#description").val();
		var price = $("#price").val();
		var productType = $("#productType").val();
		event.preventDefault();
		/*disable submit default*/
		$("#insertProductBtn").prop("disabled", true);
		$("#updateProductBtn").prop("disabled", true);
		var token = $("input[name='_csrf']").val();
	
	 if (id == 0) {
		 modifyURL = "http://localhost:8080/rest/productRestFul/insert";
		 var product = new Product(id,productName,description,price,productType);
	 } else {
		 modifyURL = "http://localhost:8080/rest/productRestFul/update";
		 var product = new Product(id,productName,description,price,productType);
	 }
	 $.ajax({
	        type: "POST",
	        contentType: "application/json",
	        url: modifyURL,
	        data: JSON.stringify(product),
	        dataType: 'json',
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	// if insert successfully screen to back again to product list
	            $("#insertProductBtn").prop("disabled", false);
	            $("#updateProductBtn").prop("disabled", false);
	            showProducts();
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	            alert(xhr.status);
	            alert(thrownError);
          }
	    });
	})
	
	function Product(id,name,description,price,type) {
		this.id = id;
		this.productName = name;
		this.description = description;
		this.price = price;
		this.productType = type;
	}
});