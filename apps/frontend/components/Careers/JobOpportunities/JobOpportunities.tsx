
const JobOpportunities = ({title,description}) => {

    return (
        <>

          <div className="text-center pt-5 mb-5 job_opportunities">
              <h2 className="text-primary mb-4 montserrat text-extra-bold">{title}</h2>
              <h5>{description}</h5>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10 text-start">

              <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input type="text" className="form-control" />
              </div>


              <div className="mb-3">
                <label className="form-label">Nationality</label>
                <div className="customSelect simpleSelect">
                <select className="form-select text-start">
                  <option value="1">United Kingdom</option>
                  <option value="2">Pakistan</option>
                  <option value="3">United Arab Emirates</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
              <label className="form-label">Highest Educational Certification</label>
              <div className="customSelect simpleSelect">
                <select className="form-select text-start">
                  <option value="1">Bachelor degree or equivalence</option>
                  <option value="2">Master</option>
                  <option value="3">PHD</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
              <label className="form-label">Years of Work Experience</label>
              <div className="customSelect simpleSelect">
              <select className="form-select text-start ">
                  <option value="1">5+</option>
                  <option value="2">7+</option>
                  <option value="3">10+</option>
                </select>
              </div>

              </div>
              <div className="mb-3">
              <label className="form-label">Language Skills</label>
              <div className="customSelect simpleSelect">
                <select className="form-select text-start">
                  <option value="1">Arabic</option>
                  <option value="2">English</option>
                  <option value="3">Urdu</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
              <label className="form-label">Visa Status</label>
              <div className="customSelect simpleSelect">
                <select className="form-select text-start">
                  <option value="1">Visit</option>
                  <option value="2">Work</option>
                  <option value="3">Permanant</option>
                </select>
                </div>
              </div>

              <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Upload CV</label>
                {/* <input className="form-control" type="file" id="formFile"/> */}
                <form className="form">
    <div className="file-upload-wrapper" data-text="samplefile.pdf">
      <input name="file-upload-field" type="file" className="file-upload-field" value=""/>
    </div>
  </form>
              </div>

              <div className="text-center mt-4">
                <button className="btn btn-primary btn-sm-wide">Submit</button>
              </div>


            </div>
          </div>

        </>
    )
}

export default JobOpportunities