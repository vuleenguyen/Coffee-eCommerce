$(document).ready(function() {
	$("#profile").click(function() {
		loadProfile();
	})
	
	function loadProfile() {
		$.get("http://localhost:8080/rest/personRestFul/show?username="+$("img#avatar").attr("alt"), function(data,status) {
			fillProfileToTheForm(data);
		});
	}
	
	function fillProfileToTheForm(data) {
		$("#profile-id").val(data.id);
		$("#profile-firstName").val(data.firstName);
		$("#profile-lastName").val(data.lastName);
		$("#profile-phone").val(data.phone);
		$("#profile-email").val(data.email);
		$("#profile-city").val(data.address.city);
		$("#profile-state").val(data.address.state);
		$("#profile-zipcode").val(data.address.zipcode);
		$("#profile-country").val(data.address.country);
		
		$("#profile-firstName").attr('disabled', true);
		$("#profile-lastName").attr('disabled', true);
		$("#profile-phone").attr('disabled', true);
		$("#profile-email").attr('disabled', true);
		$("#profile-city").attr('disabled', true);
		$("#profile-state").attr('disabled', true);
		$("#profile-zipcode").attr('disabled', true);
		$("#profile-country").attr('disabled', true);
		$("#updateProfileBtn").attr('disabled', true);
	}
	
	$("#unclockBtn").click(function() {
		$("#profile-firstName").attr('disabled', false);
		$("#profile-lastName").attr('disabled', false);
		$("#profile-phone").attr('disabled', false);
		$("#profile-email").attr('disabled', false);
		$("#profile-city").attr('disabled', false);
		$("#profile-state").attr('disabled', false);
		$("#profile-zipcode").attr('disabled', false);
		$("#profile-country").attr('disabled', false);
		$("#updateProfileBtn").attr('disabled', false);
	});
	
	$("#profile-form").submit(function(event) {
		var id = $("#profile-id").val();
		var firstName = $("#profile-firstName").val();
		var lastName = $("#profile-lastName").val();
		var phone = $("#profile-phone").val();
		var email = $("#profile-email").val();
		var city = $("#profile-city").val();
		var state = $("#profile-state").val();
		var zipcode = $("#profile-zipcode").val();
		var country = $("#profile-country").val();
		var person = new Person(id, firstName,lastName,phone,email,city,state,zipcode,country);
		event.preventDefault();
		$("#updateProfileBtn").prop("disable", true);
		
		$.post({
			url: "http://localhost:8080/rest/personRestFul/update",
			data: JSON.stringify(person),
			contentType: "application/json",
			success: function(data) {
			   fillProfileToTheForm(data);
			   $("#updateProfileBtn").prop("disable", false);
			   
			},
			error: function (xhr, ajaxOptions, thrownError) {
	            alert(xhr.status);
	            alert(thrownError);
			}
		})
		
	function Person(id,firstName,lastName,phone,email,city,state,zipcode,country) {
		this.id = id;
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
		
	});
});