$(document).ready(function() {
	
	$("#order").click(function() {
		$('#tab3 table').remove();
		$.get("http://localhost:8080/rest/orderRestFul/list",function(data,status) {
			$("#tab3").append(
					$('<table>', {
						"class": "table table-bordered"})
						.append($('<thead>')
								.append($('<tr>')
									.append($('<th>', {"text" : "#" }))
									.append($('<th>', {"text" : "Customer Name" }))
									.append($('<th>', {"text" : "Customer Email" }))
									.append($('<th>', {"text" : "Date Order" }))
									.append($('<th>', {"text" : "Detail" }))
							))
						.append($('<tbody>')));
			$.each(data,function(i,row) {
				$("#tab3 table tbody")
								.append($("<tr>")
									.append($('<td>', {"text" : row.id }))
									.append($('<td>', {"text" : row.person.firstName + row.person.lastName }))
									.append($('<td>', {"text" : row.person.email }))
									.append($('<td>', {"text" : row.orderDate }))
									.append($('<td>').append($('<a>', {
										"class" : "btn btn-default detailOrder",
										"id"    : row.id
									}).append($("<span>", {
										"class" : "glyphicon glyphicon-zoom-in"
									}))))
								)
			});
		})
	});
	
	$(document).delegate(".detailOrder", "click", function() {
		var personId = this.id;
		$.get({
			url : "http://localhost:8080/rest/orderRestFul/detail/"+personId,
			success: function(data) {
				$('#tab3 table').remove();
				$("#tab3").append(
						$('<table>', {
							"class": "table table-bordered",
							"id"   : "detailOrder"})
							.append($('<thead>')
									.append($('<tr>')
										.append($('<th>', {"text" : "Product" }))
										.append($('<th>', {"text" : "Description" }))
										.append($('<th>', {"text" : "Price" }))
										.append($('<th>', {"text" : "Quantity" }))
								))
							.append($('<tbody>')));
				
				
				$.each(data,function(i,em) {
					$("#tab3 table#detailOrder tbody")
									.append($("<tr>")
											.append($("<td>", {"text" : em.product.productName}))
											.append($("<td>", {"text" : em.product.description}))
											.append($("<td>", {"text" : em.product.price + "$", "css" : {"color" : "red", "font-weight" : "bold"}}))
											.append($("<td>", {"text" : em.quantity}))
									)})
			},
			error : function(error) {
				alert(error);
			}
		})
	});
});