$(document).ready(function() {
	$("#admin-tab-group").hide();
	$("#user-tab-group").hide();
	$("#tab-content").hide();
	$("#tab-content-user").hide();
	$("#shopping-cart").hide();
	
	$("#avatar").click(function() {
		$("#login-modal").modal();
	})
	
	
	$(".btn-pref .btn").click(function () {
	    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
	    $(this).removeClass("btn-default").addClass("btn-primary");   
	});
});