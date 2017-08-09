<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Coffee Home</title>
	<meta name="_csrf" content="${_csrf.token}"/>
	<!-- default header name is X-CSRF-TOKEN -->
	<meta name="_csrf_header" content="${_csrf.headerName}"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="resources/css/style.css" />
	<link rel="stylesheet" href="resources/css/login.css" />
	<script type="text/javascript" src="resources/js/main.js"></script>
	<script type="text/javascript" src="resources/js/login.js"></script>
	<script type="text/javascript" src="resources/js/product.js"></script>
	<script type="text/javascript" src="resources/js/person.js"></script>
	<script type="text/javascript" src="resources/js/order.js"></script>
	<script type="text/javascript" src="resources/js/home.js"></script>
	<script type="text/javascript" src="resources/js/profile.js"></script>
</head>
<body>
	<jsp:include page="resources/view/login.jsp"></jsp:include>
	
	<div id="coffeeShop">
    <div class="card hovercard">
        <div class="card-background">
            <img class="card-bkimg" alt="" src="http://lorempixel.com/100/100/people/9/">
        </div>
        <div class="useravatar">
            <img alt="" src="resources/image/profile.jpg" style="cursor: pointer;" id="avatar">
        </div>
        <div class="card-info"> <span class="card-title">Vu Lee</span>
        </div>
    </div>
	
    <div class="btn-pref btn-group btn-group-justified btn-group-lg" id="admin-tab-group" role="group" aria-label="...">
        <div class="btn-group" role="group">
            <button type="button" id="product" class="btn btn-primary" href="#tab1" data-toggle="tab"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                <div class="hidden-xs">Product</div>
            </button>
        </div>
        <div class="btn-group" role="group">
            <button type="button" id="person" class="btn btn-default" href="#tab2" data-toggle="tab"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                <div class="hidden-xs">Person</div>
            </button>
        </div>
        <div class="btn-group" role="group">
            <button type="button" id="order" class="btn btn-default" href="#tab3" data-toggle="tab"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                <div class="hidden-xs">Order</div>
            </button>
        </div>
    </div>
    
    <div class="btn-pref btn-group btn-group-justified btn-group-lg" id="user-tab-group" role="group" aria-label="...">
       <div class="btn-group" role="group">
           <button type="button" id="home" class="btn btn-primary" href="#tab4" data-toggle="tab"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>
               <div class="hidden-xs">Home</div>
           </button>
       </div>
       <div class="btn-group" role="group">
           <button type="button" id="profile" class="btn btn-default" href="#tab5" data-toggle="tab"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>
               <div class="hidden-xs">Profile</div>
           </button>
       </div>
       <div class="btn-group" role="group">
           <button type="button" id="cart" class="btn btn-default" href="#tab6" data-toggle="tab"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
               <div class="hidden-xs">Cart</div>
           </button>
       </div>
   </div>

	<div class="well" id="tab-content">
			<div class="tab-content">
					<div class="tab-pane fade in active" id="tab1">
						<div id="tab1-content">
							<div class="panel panel-default panel-table">
								<div class="panel-heading">
										<div class="row">
											<div class="col col-xs-6">
												<h3 class="panel-title">Product Manager</h3>
											</div>
											<div class="col col-xs-6 text-right">
												<button type="button" class="btn btn-sm btn-primary btn-create" id="createProductBtn"><strong>+</strong> Create
													New</button>
											</div>
										</div>
								</div>
							</div>
						</div>
						<div id="tab1-content-insertProduct">
							<div class="container">
								 <form class="form-horizontal" id="product-form">
								 	<input type="hidden" name="id" id="productId"/>
									<div class="form-group">
										<label>Name</label>
										<input type="text" id="productName" name="productName" class="form-control" placeholder="Name"/>
									</div>
									<div class="form-group">
										<label>Description</label>
										<input type="text" id="description" name="description" class="form-control" placeholder="Description"/>
									</div>
									<div class="form-group">
										<label>Price</label>
										<input type="number" id="price" name="price" class="form-control" placeholder="Price"/>
									</div>
									<div class="form-group">
										<label>Type</label>
										<select id="productType" name="productType" class="form-control">
											<option value="BREAKFAST">Breakfast</option>
											<option value="LUNCH">Lunch</option>
											<option value="DINNER">Dinner</option>
										</select>
									</div>
									<input type="hidden" name="${_csrf.parameterName}"
			 							value="${_csrf.token}"/>
		 							<button class="btn btn-success" id="updateProductBtn" type="submit">Update Product</button>
									<button class="btn btn-success" id="insertProductBtn" type="submit">Add Product</button>
									<a class="btn btn-info" id="backToProductsBtn">Back</a>
								</form>
							</div>
						</div>
					</div>
					<div class="tab-pane fade in" id="tab2">
						<div class="container">
							<div class="form-horizontal" id="person-form">
								<form>
									<div class="form-group">
										<label>FirstName</label>
										<input type="text" id="firstName" name="firstName" placeholder="FirstName.." 
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>LastName</label>
										<input type="text" id="lastName" name="lastName" placeholder="LastName.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>Phone</label>
										<input type="text" id="phone" name="phone" placeholder="Phone.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>Email</label>
										<input type="email" id="email" name="email" placeholder="Email.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>City</label>
										<input type="text" id="city" name="city" placeholder="City.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>State</label>
										<input type="text" id="state" name="state" placeholder="State.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>ZipCode</label>
										<input type="text" id="zipcode" name="zipcode" placeholder="ZipCode.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>Country</label>
										<input type="text" id="country" name="country" placeholder="Country.."
											class="form-control"/>
									</div>
									<button type="submit" class="btn btn-success" id="insertPersonBtn">Add</button>
									<a class="btn btn-info" id="backToPersonsBtn">Back</a>
								</form>
							</div> 
						</div>
					</div>
				<div class="tab-pane fade in" id="tab3"></div>
			</div>
		</div>
		<div class="well" id="tab-content-user">
			<div class="tab-content">
				<div class="tab-pane fade in active" id="tab4">
					<div class="container">
					</div>
				</div>
				<div class="tab-pane fade in" id="tab5">
					<div class="container">
							<div class="form-horizontal">
								<form id="profile-form">
									<input type="hidden" id="profile-id" name="profile-id" />
									<div class="form-group">
										<label>FirstName</label>
										<input type="text" id="profile-firstName" name="firstName" placeholder="FirstName.." 
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>LastName</label>
										<input type="text" id="profile-lastName" name="lastName" placeholder="LastName.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>Phone</label>
										<input type="text" id="profile-phone" name="phone" placeholder="Phone.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>Email</label>
										<input type="email" id="profile-email" name="email" placeholder="Email.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>City</label>
										<input type="text" id="profile-city" name="city" placeholder="City.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>State</label>
										<input type="text" id="profile-state" name="state" placeholder="State.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>ZipCode</label>
										<input type="text" id="profile-zipcode" name="zipcode" placeholder="ZipCode.."
											class="form-control"/>
									</div>
									<div class="form-group">
										<label>Country</label>
										<input type="text" id="profile-country" name="country" placeholder="Country.."
											class="form-control"/>
									</div>
									<button type="submit" class="btn btn-success" id="updateProfileBtn">Update</button>
									<a class="btn btn-danger" id="unclockBtn">Unclock</a>
								</form>
							</div> 
						</div>
					</div>
				<div class="tab-pane fade in" id="tab6">
					6
				</div>
			</div>
		</div>
		<div id="shopping-cart">
			<img alt="" src="resources/image/product1.jpg" class="goods" />
			<img alt="" src="resources/image/shoppingcart.png" />
		</div>
	</div>
</body>
</html>