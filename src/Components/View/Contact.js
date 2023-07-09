import React from "react";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: []
		};
	  }
	
	  componentDidMount() {
		  
		fetch("http://socialbites.co.uk/api/getUserPost", {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer d35e0fec2b944a16e5530f5d0e0d26d7124705046161749e30413cacaf98d766}`, // notic
			}})
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				items: result.items
			  });
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
	  }

	render() {
		return (
			<>
				<section id="contact">
					<div className="container-fluid" data-aos="fade-up">

						<div className="section-header">
							<h3>Contact Us</h3>
						</div>

						<div className="row">

							<div className="col-lg-4">
								<div className="mb-4 mb-lg-2 offset-3">
									<div className="row">
										<div className="col-md-12 info">
											<i className="bi bi-geo-alt"></i>
											<p>Sohani Patti Buxar Near Gorishankar Temple Buxar</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 info">
											<i className="bi bi-envelope"></i>
											<p>info@wdpcare.com</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 info">
											<i className="bi bi-phone"></i>
											<p>+91 9340334221</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-7">


								<div className="form">
									<form action="forms/contact.php" method="post" role="form" className="php-email-form">
										<div className="row">
											<div className="form-group col-lg-6">
												<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
											</div>
											<div className="form-group col-lg-6 mt-3 mt-lg-0">
												<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
											</div>
										</div>
										<div className="form-group mt-3">
											<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
										</div>
										<div className="form-group mt-3">
											<textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
										</div>
										<div className="my-3">
											<div className="loading">Loading</div>
											<div className="error-message"></div>
											<div className="sent-message">Your message has been sent. Thank you!</div>
										</div>
										<div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
									</form>
								</div>
							</div>

						</div>

					</div>
				</section>
			</>
		)
	}
}

export default Contact