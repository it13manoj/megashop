import React, { useState, useEffect } from "react";
import { TEAMS_APIS, REQUEST_TYPE, IMAGES } from "../../helper/APIInfo";
import { apiCall } from "../../helper/RequestHandler";

function TeamSection() {
	const [getTeams, setTeams] = useState();
	const [getTeamsh1, setTeamsh1] = useState();


	useEffect(() => {
		onloadMethod()
		onloadFindHeader()
	}, []);
	const onloadMethod = () => {
		apiCall(TEAMS_APIS.find, REQUEST_TYPE.GET).then((response) => {
			let data = response.response.data.data
			setTeams(data)
		})
	}

	const onloadFindHeader = () => {
		const params = {
			id: 1
		}
		apiCall(TEAMS_APIS.findById, REQUEST_TYPE.POST, params).then((response) => {
			let data = response.response.data.data
			setTeamsh1(data)
		})
	}
	console.log(getTeamsh1)

	return (
		<>
			<section id="team">
				<div className="container" data-aos="fade-up">
					<div className="section-header">
						<h3>Team</h3>
						<p className="teamSection">{getTeamsh1?.map((rows) => (rows.descriptions))}</p>
					</div>

					<div className="row">
						{
							getTeams?.map((results) => (
								(results.id !=1)? 
								<div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100" key={results.id}>
									<div className="member">
										<img src={IMAGES.imgs+results.images} className="img-fluid" alt="" />
										<div className="member-info">
											<div className="member-info-content">
												<h4>{results.name}</h4>
												<span>{results.profile}</span>
												<div className="social">
													<a href=""><i className="bi bi-twitter"></i></a>
													<a href=""><i className="bi bi-facebook"></i></a>
													<a href=""><i className="bi bi-instagram"></i></a>
													<a href=""><i className="bi bi-linkedin"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								:""
							))
						}
					</div>

				</div>
			</section>
		</>
	)
}



export default TeamSection