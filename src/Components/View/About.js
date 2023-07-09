import React, { useState, useEffect } from 'react'
import Timeline from './Timeline'
import { ABOUTS_APIS, REQUEST_TYPE, IMAGES } from "../../helper/APIInfo";
import { apiCall } from "../../helper/RequestHandler";
function About() {
	const [getHomePage, setHomePage] = useState({});

	useEffect(() => {
		onloadMethod()
	}, []);

	const onloadMethod = () => {
		let arr = [];
		apiCall(ABOUTS_APIS.find, REQUEST_TYPE.GET).then((response) => {
			let results = response.response.data.data
			results.map((rows, keys) => {
				arr[rows.types] = rows
			})

			setHomePage(arr)
		})
	}

	const getData = (_id) => {
		if (getHomePage[_id] != undefined) {
			return getHomePage[_id];
		}
	}



	return (
		<>
			<section id="about">


				<div className="container" data-aos="fade-up">


					<header className="section-header">
						<h3>{getData(1)?.description}</h3>
						<p dangerouslySetInnerHTML={{ __html:getData(2)?.description}}></p>
					</header>

					<div className="row about-container">

						<div className="col-lg-6 content order-lg-1 order-2">


							<div className="icon-box" data-aos="fade-up" data-aos-delay="100">
								<div className="icon"><i className="bi bi-check bi-3x circled"></i></div>
								<h4 className="title"><a href="">{getData(3)?.description}</a></h4>
								<p className="description">{getData(4)?.description}</p>
							</div>

							<div className="icon-box" data-aos="fade-up" data-aos-delay="200">
								<div className="icon"><i className="bi bi-phone bi-3x circled"></i></div>
								<h4 className="title"><a href="#">{getData(5)?.description}</a></h4>
								<p className="description">{getData(6)?.description} </p>
							</div>

							<div className="icon-box" data-aos="fade-up" data-aos-delay="300">
								<div className="icon"><i className="bi bi-gear"></i></div>
								<h4 className="title"><a href="#">{getData(7)?.description}</a></h4>
								<p className="description">{getData(8)?.description}</p>
							</div>

						</div>

						<div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
							<img src={IMAGES.imgs+getData(13)?.images} className="img-fluid" alt="" />
						</div>
					</div>

					<div className="row about-extra">
						<div className="col-lg-6" data-aos="fade-right">
							<img src={IMAGES.imgs+getData(9)?.images} className="img-fluid" alt="" />
						</div>
						<div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
							<h4>{getData(10)?.description}</h4>
							<h2 className="title">{getData(11)?.description}</h2>
							<p className='descriptions' dangerouslySetInnerHTML={{ __html:getData(12)?.description}}>
							
							</p>
							 

						</div>
					</div>

					<div style={{ textAlign: "center", marginTop: "3em", fontWeight: "bold" }}>
						<h4 style={{ fontWeight: "bold" }}>OUR HISTORY</h4>
					</div>


					<Timeline />
				</div>
			</section>
		</>
	)
}



export default About