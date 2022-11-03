
fetch('products.json')
    .then(Response => Response.json())
    .then(data => appendData(data))
    .catch(err => {console.log('error: ' + err)})

function appendData(data){ 
    var mainContainer = document.getElementById("productsArea");
    for(var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `
                            <div class="col-xl-3 col-lg-3 col-md-4 col-6" >
								<div class="card card-product-grid">
										<a href="${data[i].url}" class="img-wrap"> <img src="${data[i].images}"> </a>
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
                                            <a href="#" class="text-muted">${data[i].product_type}</a>
                                            <a href="#" class="title">${data[i].model}</a>
										</div>

										<div class="price h5 mt-2">฿ ${data[i].price}</div>
									</figcaption>
								</div>
							</div>
        `;
        mainContainer.appendChild(div);
    }
}