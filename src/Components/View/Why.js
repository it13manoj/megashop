import React from "react"

class Why extends React.Component{
	super(){

	}

	render(){
		return(
			<>
				<section id="why-us">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Why choose us?</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
        </header>

        <div className="row row-eq-height justify-content-center">

          <div className="col-lg-4 mb-4">
            <div className="card" data-aos="zoom-in" data-aos-delay="100">
              <i className="bi bi-calendar4-week"></i>
              <div className="card-body">
                <h5 className="card-title">Corporis dolorem</h5>
                <p className="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                <a href="#" className="readmore">Read more </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <i className="bi bi-camera-reels"></i>
              <div className="card-body">
                <h5 className="card-title">Voluptates dolores</h5>
                <p className="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                <a href="#" className="readmore">Read more </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card" data-aos="zoom-in" data-aos-delay="300">
              <i className="bi bi-chat-square-text"></i>
              <div className="card-body">
                <h5 className="card-title">Eum ut aspernatur</h5>
                <p className="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                <a href="#" className="readmore">Read more </a>
              </div>
            </div>
          </div>

        </div>

        <div className="row counters" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="1" className="purecounter"></span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1364" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
			</>
		)
	}
}

export default Why