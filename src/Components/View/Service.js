import React, { useState, useEffect } from "react";
import { SERVICES_APIS, REQUEST_TYPE, IMAGES } from "../../helper/APIInfo";
import { apiCall } from "../../helper/RequestHandler";
function Service() {
  const [getHomePage, setHomePage] = useState({});

  useEffect(() => {
    onloadMethod()
  }, []);

  const onloadMethod = () => {
    let arr = [];
    apiCall(SERVICES_APIS.find, REQUEST_TYPE.GET).then((response) => {
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
      <section id="services" className="section-bg">
        <div className="container" data-aos="fade-up">

          <header className="section-header">
            <h3>{getData(1)?.description}</h3>
            <p className="teamSection" dangerouslySetInnerHTML={{ __html:getData(2)?.description}}></p>
          </header>

          <div className="row justify-content-center">

            <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
              <div className="box">
                <div className="icon"><i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i></div>
                <h4 className="title"><a href="">{getData(3)?.description}</a></h4>
                <p className="description">
                {getData(4)?.description}										</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="box">
                <div className="icon"><i className="bi bi-card-checklist" style={{ color: "#e9bf06" }}></i></div>
                <h4 className="title"><a href="">{getData(5)?.description}</a></h4>
                <p className="description">{getData(6)?.description}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
              <div className="box">
                <div className="icon"><i className="bi bi-bar-chart" style={{ color: "#3fcdc7" }}></i></div>
                <h4 className="title"><a href="">{getData(7)?.description}</a></h4>
                <p className="description">{getData(8)?.description}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="box">
                <div className="icon"><i className="bi bi-binoculars" style={{ color: "#41cf2e " }}></i></div>
                <h4 className="title"><a href="">{getData(9)?.description}</a></h4>
                <p className="description">{getData(10)?.description}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
              <div className="box">
                <div className="icon"><i className="bi bi-brightness-high" style={{ color: "#d6ff22" }}></i></div>
                <h4 className="title"><a href="">{getData(11)?.description}</a></h4>
                <p className="description">	{getData(12)?.description}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="box">
                <div className="icon"><i className="bi bi-calendar4-week" style={{ color: "#4680ff" }}></i></div>
                <h4 className="title"><a href="">{getData(13)?.description}</a></h4>
                <p className="description">{getData(14)?.description}</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}



export default Service