export default function Form(block) {
  return (
    <section className="sing-up pt-md-20 pt-18 pb-md-20 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="sing-up-body">
              <h2>Share your thoughts!</h2>
              <form className="sing-up-items row gy-4 gx-3">
                <div className="col-md-12">
                  <label htmlFor="fullName" className="form-label">
                    Name of Event Attended
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="pEmailId" className="form-label">
                    Date of Event Attended
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="pEmailId"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="pEmailId" className="form-label">
                  How do you think the work you did contributes to the larger goal of urban sustainability?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="pEmailId"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="pEmailId" className="form-label">
                  What suggestions do you have for how we can improve our impact on urban sustainability in future events?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="pEmailId"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="pEmailId" className="form-label">
                  What are some sustainable habits you've learned from the event that you intend to continue for the long term?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="pEmailId"
                  />
                </div>
                
                <div className="col-md-12">
                  <button type="submit" className="btn btn-submit w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}  