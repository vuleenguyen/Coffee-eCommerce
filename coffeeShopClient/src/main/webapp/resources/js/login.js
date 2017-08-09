$(document).ready(function() {
	
	$("#login-form").submit(function(event) {
		event.preventDefault();
		$("#loginBtn").prop("disable",true);
		
		var users = new Users($("input[name='user']").val(),$("input[name='pass']").val());
		
		if (authentication(users) == null) {
			alert("Invalid Username or password");
		} else {
			var data = authentication(users);
			$("img#avatar").attr("alt",data.userName);
			if (data.role == 'ADMIN') {
				$("#tab-content-user").hide();
				$("#login-modal").modal('hide');
				$("#user-tab-group").hide();
				$("#admin-tab-group").show();
				$("#tab-content").show();
				$("#shopping-cart").hide();
			} else {
				$("#tab-content").hide();
				$("#login-modal").modal('hide');
				$("#admin-tab-group").hide();
				$("#user-tab-group").show();
				$("#tab-content-user").show();
				$("#shopping-cart").show();
			}
		}
		// I can use rest API but current the password is locked
//		$.post({
//			url: "http://localhost:8080/login",
//			data: JSON.stringify(users),
//			contentType: "application/json",
//			success: function(data) {
//				if (data == null) {
//					alert(null);
//				}
//			},
//			error: function(error) {
//				
//			}
//		})
	});
	
	function authentication(data) {
		if (data.userName == 'vuleenguyen.92@gmail.com' && data.password == '123456') {
			data.role = 'USER';
			return data;
		} else if (data.userName == 'admin-wp@gmail.com' && data.password == 'admin-wp@gmail.com') {
			data.role = 'ADMIN';
			return data;
		} else {
			return null;
		}
	}
	
	function Users(user,pass) {
		this.userName = user;
		this.password = pass;
		this.role = null;
	}
});