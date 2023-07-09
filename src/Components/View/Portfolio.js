import React, { useState, useEffect } from "react";
import { PORTFOLIOS_APIS, REQUEST_TYPE, IMAGES } from "../../helper/APIInfo";
import { apiCall } from "../../helper/RequestHandler";

function Portfolio() {
	const [getPortfolio, settPortfolio] = useState();

	useEffect(() => {
		onloadMethod()
	}, []);
	const onloadMethod = () => {
		let arr = []
		apiCall(PORTFOLIOS_APIS.find, REQUEST_TYPE.GET).then((response) => {
			let data = response.response.data.data
			settPortfolio(data)
		})

	}


	return (
		<>
			<section id="portfolio" className="clearfix">
				<div className="container" data-aos="fade-up">

					<header className="section-header">
						<h3 className="section-title">Our Portfolio</h3>
					</header>

					<div className="row" data-aos="fade-up" data-aos-delay="100">
						<div className="col-lg-12">
							<ul id="portfolio-flters">
								<li data-filter="*" className="filter-active">All</li>
								<li data-filter=".filter1">App</li>
								<li data-filter=".filter2">Card</li>
								<li data-filter=".filter3">Web</li>
							</ul>
						</div>
					</div>

					<div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
						{
							getPortfolio?.map((results) => (

								<div className={"col-lg-4 col-md-6 portfolio-item filter"+results.status } key={results.id}>
									<div className="portfolio-wrap">
										<img src={IMAGES.imgs+results.images} className="img-fluid" alt="" />
										<div className="portfolio-info">
											<h4><a href="portfolio-details.html">App 1</a></h4>
											<p>App</p>
											<div>
												<a href="assets/img/portfolio/app1.jpg" data-gallery="portfolioGallery" title="App 1" className="portfolio-lightbox link-preview"><i className="bi bi-plus"></i></a>
												<a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
											</div>
										</div>
									</div>
								</div>
							))
						}

					</div>

				</div>
			</section>
		</>
	)
}


export default Portfolio