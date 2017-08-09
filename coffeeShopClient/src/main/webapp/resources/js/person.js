$(document).ready(function() {
	var isLoadProduct = true;
	
	$(document).delegate("#addPersonBtn", "click", function() {
		$('#tab2 table').hide(1000);
		$('#tab2 table').remove();
		
		$('#addPersonBtn').parent().remove();
		$('#addPersonBtn').remove();
		$('#tab2 .container').show(1000);
		
		isLoadProduct = false;
	});
	
	$("#backToPersonsBtn").click(function() {
		$('#tab2 .container').hide(1000);
		loadPersons();
		isLoadProduct = true;
	});
	
	$("#person").click(function() {
		if (isLoadProduct) {
			loadPersons();
			$('#tab2 .container').hide(1000);
		}
	});
	
	$("#person-form").submit(function(event) {
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var phone = $("#phone").val();
		var email = $("#email").val();
		var city = $("#city").val();
		var state = $("#state").val();
		var zipcode = $("#zipcode").val();
		var country = $("#country").val();
		var person = new Person(firstName,lastName,phone,email,city,state,zipcode,country);
		event.preventDefault();
		$("#insertPersonBtn").prop("disable", true);
		
		$.post({
			url: "http://localhost:8080/rest/personRestFul/save",
			data: JSON.stringify(person),
			contentType: "application/json",
			success: function(data) {
			   $("#insertPersonBtn").prop("disable", false);
			   $('#tab2 .container').hide(1000);
			   loadPersons();
			},
			error: function (xhr, ajaxOptions, thrownError) {
	            alert(xhr.status);
	            alert(thrownError);
			}
		})
		
	});
	
	function Person(firstName,lastName,phone,email,city,state,zipcode,country) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.address = new Address(city,state,zipcode,country);
	}
	
	function Address(city,state,zipcode,country) {
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.country = country;
	}
	
	function loadPersons() {
		$('#tab2 table').remove();
		$('#addPersonBtn').parent().remove();
		$('#addPersonBtn').remove();
		$.get("http://localhost:8080/rest/personRestFul/list",function(data,status) {
			$("#tab2").append(
					$('<table>', {
						"class": "table table-bordered"})
						.append($('<thead>')
								.append($('<tr>')
									.append($('<th>', {"text" : "#" }))
									.append($('<th>', {"text" : "FirstName" }))
									.append($('<th>', {"text" : "LastName" }))
									.append($('<th>', {"text" : "Phone" }))
									.append($('<th>', {"text" : "Email" }))
									.append($('<th>', {"text" : "City" }))
									.append($('<th>', {"text" : "State" }))
									.append($('<th>', {"text" : "ZipCode" }))
									.append($('<th>', {"text" : "Country" }))
							))
							.append($('<tbody>')))
						.append($('<div>', {
							"class" : "form-group"
						}).append($('<a>', {
							"class" : "btn btn-info",
							"text" : "+ Add",
							"id" : "addPersonBtn"
						})));
			$.each(data,function(i,row) {
				$("#tab2 table tbody")
								.append($("<tr>")
									.append($('<td>', {"text" : row.id }))
									.append($('<td>', {"text" : row.firstName }))
									.append($('<td>', {"text" : row.lastName }))
									.append($('<td>', {"text" : row.phone }))
									.append($('<td>', {"text" : row.email }))
									.append($('<td>', {"text" : row.address.city }))
									.append($('<td>', {"text" : row.address.state }))
									.append($('<td>', {"text" : row.address.zipcode }))
									.append($('<td>', {"text" : row.address.country })))
			});
		})
	}
});