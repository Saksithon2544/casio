fetch("./products.json").then((products) => products.json()).then(data => {
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

