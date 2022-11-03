fetch("./js/products.json").then((products) => products.json()).then(data => {
	data.map((item) => {
		$("#productsArea").append(`
		<div class="col-xl-3 col-lg-3 col-md-4 col-6" >
				<div class="card card-product-grid">
					<a href="./detail.html?id=${item.id}" class="img-wrap"> <img src="${item.images}"> </a>
					<figcaption class="info-wrap">
						<ul class="rating-stars mb-1">
							<li style="width:80%" class="stars-active">
								<img src="images/icons/stars-active.svg" alt="">
							</li>
							<li>
								<img src="images/icons/starts-disable.svg" alt="">
							</li>
						</ul>
						<div>
							<a href="#" class="text-muted">${item.product_type}</a>
							<a href="#" class="title">${item.model}</a>
						</div>
						<div class="price h5 mt-2">฿ ${item.price}</div>
					</figcaption>
				</div>
			</div>
		`)
	});
})

fetch("./js/navbar.json").then((url) => url.json()).then(data => {
	data.map((item) => {
		$("#navbarArea").append(`
		 		<ul class="navbar-nav flex-wrap">
                    <li class="nav-item">
                        <a class="nav-link" href="category.html?category=${item.name}">${item.name}</a>
                    </li>
                </ul>
		`)
	});
})



$(document).ready(function () {
	$(document).on('click', '.dropdown-menu', function (e) {
		e.stopPropagation();
	});

	if ($(window).width() < 768) {

		$('.nav-home-aside .title-category').click(function (e) {
			e.preventDefault();
			$('.menu-category').slideToggle('fast', function () { $('.menu-category .submenu').hide() });
		});

		$('.has-submenu a').click(function (e) {
			e.preventDefault();
			$(this).next().slideToggle('fast');
		});

	}

	$('.js-check :radio').change(function () {
		var check_attr_name = $(this).attr('name');
		if ($(this).is(':checked')) {
			$('input[name=' + check_attr_name + ']').closest('.js-check').removeClass('active');
			$(this).closest('.js-check').addClass('active');
		} else {
			item.removeClass('active');
		}

	});

	if ($('[data-toggle="tooltip"]').length > 0) {  
		$('[data-toggle="tooltip"]').tooltip()
	} 

	$("[data-trigger]").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var offcanvas_id = $(this).attr('data-trigger');
		$(offcanvas_id).toggleClass("show");
		$('body').toggleClass("offcanvas-active");
		$(".screen-overlay").toggleClass("show");
	});

	$(document).on('keydown', function (event) {
		if (event.keyCode === 27) {
			$(".mobile-offcanvas").removeClass("show");
			$("body").removeClass("overlay-active");
		}
	});

	$(".btn-close, .screen-overlay").click(function (e) {
		$(".screen-overlay").removeClass("show");
		$(".mobile-offcanvas").removeClass("show");
		$("body").removeClass("offcanvas-active");
	});

});

