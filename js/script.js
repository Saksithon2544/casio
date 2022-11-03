fetch("./js/products.json").then((products) => products.json()).then(data => {
	data.map((item) => {
		$("#productsArea").append(`
		<div class="col-xl-3 col-lg-3 col-md-4 col-6" >
				<div class="card card-product-grid">
					<a href="${item.url}" class="img-wrap"> <img src="${item.images}"> </a>
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
	})
})



$(document).ready(function() {
	// jQuery code

  // var html_download = '<a href="http://bootstrap-ecommerce.com/templates.html" class="btn btn-dark rounded-pill" style="font-size:13px; z-index:100; position: fixed; bottom:10px; right:10px;">Download theme</a>';
  //  $('body').prepend(html_download);
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


     ///////////////// fixed menu on scroll for desctop
    if ($(window).width() < 768) {

     	$('.nav-home-aside .title-category').click( function(e){
     		e.preventDefault();
     		$('.menu-category').slideToggle('fast', function() { $('.menu-category .submenu').hide() });
     	});

     	$('.has-submenu a').click( function(e){
     		e.preventDefault();
     		$(this).next().slideToggle('fast');
     	});
 
    } // end if


    // custom checkbox inside card effect
    $('.js-check :radio').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $('input[name='+ check_attr_name +']').closest('.js-check').removeClass('active');
            $(this).closest('.js-check').addClass('active');
           // item.find('.radio').find('span').text('Add');

        } else {
            item.removeClass('active');
            // item.find('.radio').find('span').text('Unselect');
        }
   
    });

	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if


	// offcanvas menu
	$("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    }); 

   	// Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
           $(".mobile-offcanvas").removeClass("show");
           $("body").removeClass("overlay-active");
        }
    });
    // Close menu by clicking
    $(".btn-close, .screen-overlay").click(function(e){
    	$(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }); 
    
}); 

